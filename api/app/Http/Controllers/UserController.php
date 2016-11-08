<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\LanguageLevel;
use App\Models\Plan;
use App\Models\PricingPlan;
use Illuminate\Support\Facades\App;
use App\Models\MailTemplate;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;
use Hash;
use Mail;

use App\Models\User;
use App\Models\Application;
use App\Models\Experience;
use App\Models\Alert;

class UserController extends Controller
{
    /**
     * Sign in user
     * @param $email
     * @param $password
     * @return mixed
     */
    public function signIn($email, $password)
    {
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = User::where('email', $email)->first()
                        ->load('plans',
                               'status',
                               'type',
                               'civility',
                               'place',
                               'lookingForJobNamings');

            /**
             * Activate account in case of disabled account
             */
            $user->is_active = 1;
            $user->last_login = time();
            $user->save();

            return $user;
        }
    }

    /**
     * Get the percentage which the profile is filled in
     * @param $user
     * @return int
     */
    public function getProfilePercentage($userId = null) {
        $user = Auth::user();

        if ($userId) {
            $user = User::find($userId);
        }

        /**
         * Initial percentage
         */
        $percentage = 10;

        if ($user->experiences) {
            $percentage += 15;
        }

        if ($user->education) {
            $percentage += 15;
        }

        if ($user->languages) {
            $percentage += 15;
        }

        if ($user->description) {
            $percentage += 15;
        }

        if ($user->profilePictureUrl) {
            $percentage += 10;
        }

        if ($user->resumeUrl) {
            $percentage += 20;
        }

        return $percentage;
    }

    /**
     * Create candidate user
     * @param Request $request

    public function fillCandidateInfos(Request $request) {
        $userInfos = $request::get('user');
        $user = User::find($userInfos['id']);

        $lookingForJobsNamingIdList = $request::get('lookingForJobsNamingIdList');

        Log::info($request::all());

        foreach ($userInfos as $key => $value) {
            $user[$key] = $value;
        }

        /**
         * Populate job_naming_user table with jobs that the user is currently looking for
        foreach ($lookingForJobsNamingIdList as $jobNamingId) {
            $user->lookingForJobNamings()->attach($jobNamingId);
        }

        $user->is_active = 1;

        $user->save();

        return $user;
    }
*/
    /**
     * Login using specific id
     * @param $userId
     * @return User
     */
    public function loginUsingId($userId) {
        Auth::loginUsingId($userId);

        return Auth::user();
    }

    /**
     * Sign out currently logged user
     */
    public function signOut() {
        Log::info('logging user out');

        Auth::logout();
    }

    /**
     * Get logged user related infos
     * @return mixed
     */
    public function getInfos() {
        $user = array();
        
        if (Auth::user()) {
            $user = Auth::user()
                ->load('plans',
                    'status',
                    'type',
                    'civility',
                    'place',
                    'lookingForJobNamings',
                    'lookingForJobNamingPlaces');
        }

        return $user;
    }

    /**
     * Save user's job seeking data
     * @param Request $request
     * @return User
     */
    public function saveJobSeekingData(Request $request) {
        $user = Auth::user();

        $jobSeekingData = $request::get('lookingForJobNamingList');

        /**
         * Remove previous data...
         */
        DB::table('job_naming_user')
            ->where('user_id', $user->id)
            ->delete();

        foreach ($jobSeekingData as $data) {
            $placeGoogleData = $data['place'];
            $jobNamingId = $data['id'];

            if ($placeGoogleData) {
                /**
                 * Get the Place object in DB via googlePlaceId or
                 * create it if it doesn't exist yet
                 */
                $place = app('App\Http\Controllers\PlaceController')
                                    ->savePlaceData($placeGoogleData);


                /**
                 * ...& then save new
                 */
                DB::table('job_naming_user')->insert(
                    ['job_naming_id' => $jobNamingId,
                     'user_id' => $user->id,
                     'place_id' => $place->id]
                );
            }
        }

        $user->alert_frequency_id = $request::get('alertFrequencyId');
        $user->save();

        return $user;
    }

    /**
     * Get specific user data
     * @param $userId
     * @return mixed
     */
    public function get($userId) {
        $user = User::find($userId)
                    ->load('languages',
                            'status',
                            'lookingForJobNamings');

        return $user;
    }


    /**
     * Function used to get current user
     * matching profiles for all job posts
     */
    public function getMatchingProfiles() {
        /**
         * First, list all user jobs posts values
         * & populate arrays of parameter ids
         */
        $jobPostList = Auth::user()
                        ->jobPosts
                        ->load('jobNaming');

        $jobNamingIdList = array();
        foreach ($jobPostList as $jobPost) {
            $jobNamingIdList[] = $jobPost->jobNaming->id;
        }

        /**
         * Remove duplicate values from array
         */
        $jobNamingIdList = array_unique($jobNamingIdList);

        /**
         * Get users looking for job-posts job-namings
         */
        $jobNamingUserList = DB::table('job_naming_user')
                             ->whereIn('job_naming_id', $jobNamingIdList)
                             ->get();

        $userIdList = array();
        foreach ($jobNamingUserList as $jobNamingUser) {
            $userIdList[] = $jobNamingUser->user_id;
        }

        /**
         * Remove duplicate values from array
         */
        $userIdList = array_unique($userIdList);

        /**
         * Get only users that are currently looking for a job
         */
        $userList = User::whereIn('id', $userIdList)
                        ->get()
                        ->load('lookingForJobNamings', 'xpLevel', 'place');

        /**
         * Transform relationship lists to id lists
         */
        foreach ($userList as $user) {
            $lookingForJobNamings = $user->lookingForJobNamings;
            $lookingForJobNamingIdList = array();

            foreach ($lookingForJobNamings as $lookingForJobNaming) {
                $lookingForJobNamingIdList[] = strval($lookingForJobNaming->id);
            }

            $user->lookingForJobNamingIdList = $lookingForJobNamingIdList;

            if ($user->status_id == 2) {
                unset($user, $userList);
            }
        }

        return $userList;
    }

    /**
     * Create new user
     * @param $request
     * @return User
     */
    public function createUser(Request $request) {
        $user = new User();

        Log::info($request::all());

        /**
         * Check if a user exists with same email address
         */
        if (User::where('email', $request::get('email'))->first()) {
            return "Cet e-mail est déjà pris";
        }
        else {
            $user->email = $request::get('email');
            $user->user_type_id = $request::get('user_type_id');
            $user->firstName = $request::get('firstName');
            $user->lastName = $request::get('lastName');
            $user->password = Hash::make($request::get('password'));
            $user->civility_id = $request::get('civilityId');
            $user->save();

            $user->civility = $user->civility;

            /**
             * Send confirmation email
             */
            $this->sendAccountConfirmationEmail($user);

            return $user;
        }
    }

    /**
     * Create new candidate user
     * @param Request $request
     * @return User
     */
    public function createCandidateUser(Request $request)
    {
        $userData = $request::get('user');
        $user = new User();
        $user->user_type_id = 3;

        foreach ($userData as $key => $value) {
            if ($key != "profilePictureUrl" && $key != "password") {
                $user[$key] = $value;
            }
            else if ($key == "password") {
                $user['password'] = Hash::make($value);
            }
        }

        $user->save();

        /**
         * Populate the table containing the jobs the new candidate is looking for
         */
        $lookingForJobDataList = $request::get('lookingForJobNamingList');

        // TODO : do it before launch!!!
        /*foreach ($lookingForJobDataList as $data) {
            $place = app('App\Http\Controllers\PlaceController')
                     ->savePlaceData($data['place']);

            DB::table('job_naming_user')->insert(
                ['job_naming_id' => $data['id'],
                 'place_id' => $place['id'],
                 'user_id' => $user->id]
            );
        }*/

        if (array_key_exists('profilePictureUrl', $userData)) {
            $this->uploadProfilePictureBase64($userData['profilePictureUrl'], $user->id);
        }

        $this->sendAccountConfirmationEmail($user);

        return $user;
    }

    public function sendAccountConfirmationEmail($user) {
        $templateName = "";

        if ($user->user_type_id == 3) {
            $templateName = "confirm-account-candidate";
        }
        else {
            $templateName = "confirm-account-recruiter";
        }

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        Mail::send('emails.'.$templateName,
            [
                'content' => $mailTemplate->message,
                'user' => $user,
                'confirm_link' => env('APP_ROOT_URL').'/profil/confirmer-le-compte/'.$user->id
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );
    }

    /**
     * Subtract one contact credit from user after he asked
     * for access to user infos
     * @param $candidateId
     * @return string
     */
    public function subtractProfileContact($candidateId) {
        $accountHasEnoughDailyContacts = "false";

        if (Auth::user()->plans) {
            $userPlans = Auth::user()->plans;

            foreach ($userPlans as $plan) {
                if ($plan->credits > 0 && $plan->daily_remaining_contacts > 0) {
                    $plan->daily_remaining_contacts = $plan->daily_remaining_contacts - 1;
                    $plan->save();

                    $accountHasEnoughDailyContacts = "true";
                }
            }

            /**
             * Save the fact that the user has access to
             * this candidate in DB
             */
            DB::table('recruiter_candidate_access')->insert([
                ['recruiter_id' => Auth::user()->id,
                    'candidate_id' => $candidateId],
            ]);
        }

        return $accountHasEnoughDailyContacts;
    }

    /**
     * Returns wheter or not current recruiter has access to specific candidate
     * @param $candidateId
     * @return string
     */
    public function doRecruiterHasAccessToCandidate($candidateId) {
        $isCandidateAccessible = "false";

        if ($access = DB::table('recruiter_candidate_access')
            ->where('recruiter_id', Auth::user()->id)
            ->where('candidate_id', $candidateId)
            ->first()) {
            $isCandidateAccessible = "true";
        }

        return $isCandidateAccessible;
    }

    /**
     * Activate account
     * @param $userId
     * @return User
     */
    public function activateAccount($userId) {
        $user = User::find($userId);

        $user->is_active = 1;

        $user->save();

        return $user;
    }

    /**
     * Confirm account email address
     * @param $userId
     */
    public function confirmEmailAddress($userId) {
        $user = User::find($userId);
        $user->is_verified = 1;

        Auth::loginUsingId($userId);

        $user->save();

        /**
         * If user is a recruiter, create a prospect on Sellsy
         */
        if ($user->user_type_id == 2) {
            App::make('SellsyClient')
                ->getService('Peoples')
                ->call('create',
                ['people' =>
                    ['cookorico_id' => $user->id,
                     'name' => $user->lastName,
                     'forename' => $user->firstName,
                     'email' => $user->email]
                ]
            );
        }

        return $user;
    }

        /**
     * Get user's applications
     * @return mixed
     */
    public function getApplications($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $applications = User::find($userId)->applications
                            ->load('job',
                                   'job.business',
                                   'job.business.place',
                                   'user');

        return $applications;
    }

    /**
     * Archivate specific application
     * @param Request $request
     * @return mixed
     */
    public function archivateApplication(Request $request) {
        $applicationId = $request::get('applicationId');

        $application = Application::find($applicationId);
        $application->archived = true;

        $application->save();

        return $application;
    }

    /**
     * Get user's work experiences
     * @return mixed
     */
    public function getExperiences($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $experiences = User::find($userId)->experiences
                           ->load('jobNaming', 'user', 'business', 'testimonial');

        foreach ($experiences as $experience) {
            $experience->business->place = $experience->business->place;
        }

        return $experiences;
    }

    /**
     * Get user's specific work experience
     * @return mixed
     */
    public function getExperience($experienceId) {
        $experience = Experience::find($experienceId);

        return $experience;
    }

    /**
     * Get user's education
     * @return mixed
     */
    public function getEducation($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $education = User::find($userId)->education
                         ->load('diploma', 'business');

        foreach ($education as $study) {
            $study->business->place = $study->business->place;
        }

        return $education;
    }

    /**
     * Get user's job alerts
     * @return mixed
     */
    public function getAlerts() {
        $alerts = Auth::user()->alerts
                        ->load('alertFrequency', 'jobNaming');

        return $alerts;
    }

    /**
     * Get user's specific job alerts
     * @return mixed
     */
    public function getAlert($alertId) {
        $alert = Alert::find($alertId);

        return $alert;
    }

    /**
     * Get user's testimonials
     * @return mixed
     */
    public function getTestimonials($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $testimonials = User::find($userId)->testimonials
                        ->load('jobNaming',
                                'employee',
                                'business',
                                'recruiter');

        foreach ($testimonials as $testimonial) {
            $testimonial->recruiter->civility = $testimonial->recruiter->civility;
            $testimonial->business->place = $testimonial->business->place;
        }

        return $testimonials;
    }

    /**
     * Get user's businesses
     * @return mixed
     */
    public function getBusinesses() {
        $businesses = Auth::user()->businesses
                        ->load('type', 'place');

        return $businesses;
    }

    /**
     * Get the plans that logged user subscribed to
     */
    public function getPlans() {
        $plans = Auth::user()->plans
                        ->load('pricingPlan');

        return $plans;
    }

    /**
     * Get user's created testimonials
     * @return mixed
     */
    public function getCreatedTestimonials() {
        $testimonials = Auth::user()->createdTestimonials
            ->load('jobNaming', 'employee', 'business', 'recruiter');

        return $testimonials;
    }

    /**
     * Get user's job posts
     */
    public function getJobPosts() {
        $jobPosts = Auth::user()->jobPosts
                    ->load('jobNaming', 'business', 'contractType', 'applications');

        foreach ($jobPosts as $jobPost) {
            $jobPost->business->place = $jobPost->business->place;
        }

        return $jobPosts;
    }

    /**
     * Get users that applied to logged user job offers
     */
    public function getApplicants() {
        $userJobs = Auth::user()->jobPosts;
        $userJobsIdList = array();

        foreach ($userJobs as $job) {
            $userJobsIdList[] = $job->id;
        }

        $applications = Application::whereIn('job_id', $userJobsIdList)
                                    ->orderBy('is_interested', 'asc')
                                    ->orderBy('created_at', 'desc')
                                    ->get()
                                    ->load('user')
                                    ->load('job');

        /**
         * Necessary workaround to return business data
         */
        foreach ($applications as $application) {
            $application->job->business = $application->job->business;
            $application->job->jobNaming = $application->job->jobNaming;
            $application->job->business->place = $application->job->business->place;
            $application->user->languages = $application->user->languages;
            $application->user->xpLevel = $application->user->xpLevel;
        }

        return $applications;
    }

    /**
     * Save user's new info
     * @param Request $request
     * @return mixed
     */
    public function saveInfo(Request $request) {
        $user = Auth::user();
        $key = $request::input('key');
        $value = $request::input('value');
        $user[$key] = $value;
        $user->save();

        if ($key == 'new_email') {
            $mailTemplate = MailTemplate::where('slug', 'new-email')->first();
            Mail::send('emails.new-email',
                [
                    'content' => $mailTemplate->message,
                    'user' => $user
                ],
                function ($message) use ($user, $mailTemplate) {
                    $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                    $message->to($user->new_email, $user->firstName . ' ' . $user->lastName)
                            ->subject($mailTemplate->subject);
                }
            );
        }
        return $user;
    }

    /**
     * Upload a new profile picture
     * @param Request $request
     * @return string
     */
    public function uploadProfilePicture(Request $request) {
        $userId = Auth::user()->id;

        $base64String = $request::input('base64');

        $newFilePath = $this->uploadProfilePictureBase64($base64String, $userId);

        return $newFilePath;
    }

    /**
     * Upload profile picture
     * @param $base64
     * @param $userId
     * @return string
     */
    public function uploadProfilePictureBase64($base64, $userId) {
        $newFilePath = 'uploads/user/pp/'.time().'.jpg';
        $dirName = dirname($newFilePath);

        /**
         * If directory is not yet created, do it
         */
        if (!is_dir(dirname($newFilePath))) {
            mkdir($dirName, 0755, true);
        }

        $ifp = fopen($newFilePath, "wb");
        $data = explode(',', $base64);

        fwrite($ifp, base64_decode($data[1]));
        fclose($ifp);

        app('App\Http\Controllers\FileController')
            ->upload('oechr-profile-picture', $userId.'.jpg', $newFilePath);

        $user = User::find($userId);
        $user->profilePictureUrl = "https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/".$userId.".jpg";
        $user->save();

        return $user->profilePictureUrl;
    }


    /**
     * Upload a new resume
     * @param Request $request
     * @return string
     */
    public function uploadResume(Request $request) {
        Log::info($request::all());

        return 'test';
    }

    /**
     * Save user spoken languages and levels
     * @param Request $request
     */
    public function saveSpokenLanguages(Request $request) {
        $spokenLanguagesData = $request::get('languages');

        /**
         * Remove existing data
         */
        DB::table('language_user')->where('user_id', Auth::user()->id)->delete();

        foreach ($spokenLanguagesData as $language) {
            DB::table('language_user')->insert(
                ['language_id' => $language['language_id'],
                 'user_id' => Auth::user()->id,
                 'language_level_id' => $language['language_level_id']]
            );
        }
    }

    /**
     * Disable currently logged user account
     */
    public function disableAccount() {
        $user = Auth::user();
        $user->is_active = 0;
        $user->save();

        return $user;
    }

    /**
     * Get user spoken languages
     * @return mixed
     */
    public function getSpokenLanguages() {
        $languages = DB::table('language_user')
                        ->where('user_id', Auth::user()->id)
                        ->get();

        foreach ($languages as $lang) {
            $lang->language = Language::find($lang->language_id);
            $lang->languageLevel = LanguageLevel::find($lang->language_level_id);
        }

        return $languages;
    }

    /**
     * Save user's payment after validation
     */
    public function savePayment(Request $request) {
        $serviceData = $request::get('service');

        Log::info($serviceData);

        $pricingPlanTitle = $serviceData['name'];

        $pricingPlan = PricingPlan::where('title', $pricingPlanTitle)->first();

        /**
         * Check if user already has a plan
         * If so, add more credits to it
         * If not, create a new one
         */
        $userPlan = Plan::where('user_id', Auth::user()->id)->first();

        /* $funnels = App::make('SellsyClient')
            ->getService('Opportunities')
            ->call('getStepsForFunnel', array('funnelid' => 30165));

        Log::info($funnels);
 */
        if ($userPlan) {
            $userPlan->user_id = Auth::user()->id;
            $userPlan->pricing_plan_id = $pricingPlan->id;
            $userPlan->credits += $pricingPlan->credits;
            $userPlan->daily_contacts = $pricingPlan->daily_contacts;
            $userPlan->daily_remaining_contacts = $pricingPlan->daily_contacts;
            $userPlan->spaces = $pricingPlan->spaces;

            /**
             * Set plan ends date if it has a duration
             */
            if ($pricingPlan->duration) {
                $userPlan->ends_at = date("Y-m-d H:i:s", strtotime(time().''.$pricingPlan->duration.' + months'));
            }
            else {
                $userPlan->ends_at = null;
            }

            // Update "payment date" to today
            $userPlan->created_at = date("Y-m-d H:i:s");
            $userPlan->save();

            return $userPlan;
        }
        else {
            $plan = new Plan();
            $plan->user_id = Auth::user()->id;
            $plan->pricing_plan_id = $pricingPlan->id;
            $plan->credits = $pricingPlan->credits;
            $plan->daily_contacts = $pricingPlan->daily_contacts;
            $plan->daily_remaining_contacts = $pricingPlan->daily_contacts;
            $plan->spaces = $pricingPlan->spaces;
            $plan->save();
        }

        return $plan;
    }

    /**
     * Daily reset recruiter access count (CVTHEQUE)
     */
    public function resetRecruiterAccessCount() {
        $plans = Plan::all();

        foreach ($plans as $plan) {
            $plan->daily_remaining_contacts = $plan->daily_contacts;
            $plan->save();
        }
    }

    /**
     * Know if currently logged user is part of a group
     */
    public function isPartOfAGroup() {
        $businesses = Auth::user()->businesses;
        $isUserPartOfAGroup = 'false';

        foreach ($businesses as $business) {
            $users = $business->users;

            foreach ($users as $user) {
                if ($user->user_type_id == 5) {
                    $isUserPartOfAGroup = 'true';
                }
            }
        }

        return $isUserPartOfAGroup;
    }

    /**
     * Skip job creation after sign up as a recruiter
     */
    public function skipJobCreationOnSignUp() {
        $user = Auth::user();
        $user->is_active = true;
        $user->save();

        $pricingPlan = PricingPlan::find(11);

        $plan = new Plan();
        $plan->user_id = $user->id;
        $plan->credits = $pricingPlan->credits;
        $plan->pricing_plan_id = $pricingPlan->id;
        $plan->daily_contacts = $pricingPlan->daily_contacts;
        $plan->daily_remaining_contacts = $pricingPlan->daily_contacts;
        $plan->spaces = $pricingPlan->spaces;
        $plan->save();

        return $user;
    }
}