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
use Session;
use Response;
use Illuminate\Support\Facades\Input;

use App\Models\User;
use App\Models\Application;
use App\Models\Experience;
use App\Models\Job;
use App\Models\Alert;
use App\Models\ClubUser;

class UserController extends Controller
{
    // TODO: remove this
    public function logUserInfos() {
        return Auth::user();
    }

    /**
     * Sign in user
     * @param $email
     * @param $password
     * @return mixed
     */
    public function signIn($email, $password)
    {
        /**
         * First, verify if user is member of a club / group
         */
        $clubMember = ClubUser::where('email', $email)->where('password', $password)->first();

        if ($clubMember) {
            $user = $this->loginUsingId($clubMember->club_user_id);

            return $user;
        }

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = User::where('email', $email)->first()
                        ->load('plans',
                               'status',
                               'type',
                               'civility',
                               'place',
                               'lookingForJobNamings');

            Auth::loginUsingId($user->id);

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
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        if ($user->user_type_id == 3) {
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
        else {
            return "0";
        }
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

        $user = Auth::user()->load('plans',
            'status',
            'type',
            'civility',
            'place',
            'lookingForJobNamings',
            'lookingForJobNamingPlaces');

        return $user;
    }

    /**
     * Login using specific email
     * @param $userId
     * @return User
     */
    public function loginUsingEmail($email) {
        $user = User::where('email', $email)->first();

        Auth::loginUsingId($user->id);

        return $user;
    }

    /**
     * Sign out currently logged user
     */
    public function signOut() {
        Log::info('logging user out');

        Auth::logout();
        Session::flush();
    }

    /**
     * Get logged user related infos
     * @param $userId
     * @return mixed
     */
    public function getInfos($userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        $user->load('plans',
                    'status',
                    'type',
                    'civility',
                    'place',
                    'lookingForJobNamings',
                    'lookingForJobNamingPlaces');

        return $user;
    }

    /**
     * Save user's job seeking data
     * @param Request $request
     * @param $userId
     * @return User
     */
    public function saveJobSeekingData(Request $request, $userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

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
     * @param $userId
     */
    public function getMatchingProfiles($userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        /**
         * First, get user businesses
         */
        $businesses = User::find($userId)->businesses;
        $businessIds = array();

        foreach ($businesses as $business) {
            $businessIds[] = $business->id;
        }

        $jobPostList = Job::whereIn('business_id', $businessIds)
            ->where('created_at', '>', date("Y-m-d", strtotime("-1 month")))
            ->where('is_active', 1)
            ->where('is_rejected', 0)
            ->get()
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
                            ->load('lookingForJobNamings', 'jobXpLevel', 'place', 'experiences');

        $userThatMatchJobsList = array();

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

            /**
             * Remove user from listing if no experience, resume or not looking for jobs

            if ($user->status_id == 2 || !$user->experiences || !$user->resumeUrl) {
                unset($user, $userList);
            } */

            if (($user->user_status_id == 1 || $user->user_status_id == 3) && count($user->experiences) > 0 && $user->resumeUrl) {
                Log::info('matching with user');
                Log::info($user);
                $userThatMatchJobsList[] = $user;
            }
        }

        return $userThatMatchJobsList;
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
     * Save the fact that the current has no experience
     * @param userId
     * @return mixed
     */
    public function saveNoExperience($userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        $user->no_experience = true;
        $user->save();

        return $user;
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
        $user->is_verified = 1;
        $user->is_active = 1;
        $user->alert_frequency_id = 1;
        $user->user_status_id = 1;

        foreach ($userData as $key => $value) {
            if ($key != "profilePictureUrl" && $key != "password") {
                $user[$key] = $value;
            }
            else if ($key == "password") {
                $user['password'] = Hash::make($value);
            }
        }

        $user->save();

        if (array_key_exists('profilePictureUrl', $userData)) {
            $this->uploadProfilePictureBase64($userData['profilePictureUrl'], $user->id);
        }
        else {
            $user->profilePictureUrl = 'https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/_ph_default_detail.png';
        }

        $this->sendAccountConfirmationEmail($user);

        $user->save();

        /**
         * Populate the table containing the jobs the new candidate is looking for
         */
        $lookingForJobDataList = $request::get('lookingForJobNamingList');

        foreach ($lookingForJobDataList as $data) {
            $place = app('App\Http\Controllers\PlaceController')
                ->savePlaceData($data['place']);

            if ($data['id']) {
                DB::table('job_naming_user')->insert(
                    ['job_naming_id' => $data['id'],
                        'place_id' => $place['id'],
                        'user_id' => $user->id ]
                );
            }
        }

        $createdUser = User::find($user->id)->load('plans',
            'status',
            'type',
            'civility',
            'place',
            'lookingForJobNamings',
            'lookingForJobNamingPlaces');

        return $createdUser;
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
    public function doRecruiterHasAccessToCandidate($candidateId, $recruiterId) {
        $isCandidateAccessible = "false";

        if ($access = DB::table('recruiter_candidate_access')
            ->where('recruiter_id', $recruiterId)
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

        /**
         * If user does not have plans, create some
         */
        if ($user->plans && $user->user_type_id == 2) {
            $plan = new Plan();
            $plan->business_id = $user->businesses[0]->id;
            $plan->credits = 0;
            $plan->save();
        }

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
     * @param $userId
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
     * @param $userId
     * @return mixed
     */
    public function getEducation($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $education = User::find($userId)->education
                         ->load('diploma', 'business', 'business.place');


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
     * @param $userId
     * @return mixed
     */
    public function getBusinesses($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $businesses = User::find($userId)->businesses
                        ->load('type', 'place', 'jobs', 'jobs.jobNaming', 'jobs.business', 'jobs.applications');

        return $businesses;
    }

    /**
     * Get the plans that logged user subscribed to
     * @param $userId
     * @return mixed
     */
    public function getPlans($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $user = User::find($userId);

        $plans = $user->plans->load('pricingPlan');

        /**
         * Browse user businesses to check if they have plans
         */
        $businesses = $user->businesses;

        foreach ($businesses as $business) {
            $businessPlans = $business->plans->load('pricingPlan');

            foreach ($businessPlans as $businessPlan) {
                $plans[] = $businessPlan;
            }
        }

        return $plans;
    }

    /**
     * Get user's created testimonials
     * @param $userId
     * @return mixed
     */
    public function getCreatedTestimonials($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $testimonials = User::find($userId)->createdTestimonials
            ->load('jobNaming', 'employee', 'business', 'recruiter');

        return $testimonials;
    }

    /**
     * Get user's job posts
     * @param $userId
     */
    public function getJobPosts($userId = null, $includeDisabled = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        /**
         * First, get user businesses
         */
        $businesses = User::find($userId)->businesses;
        $businessIds = array();

        foreach ($businesses as $business) {
            $businessIds[] = $business->id;
        }

        if ($includeDisabled != "false") {
            $jobPosts = Job::whereIn('business_id', $businessIds)->get()
                ->load('jobNaming', 'business', 'contractType', 'applications');
        }
        else {
            $jobPosts = Job::whereIn('business_id', $businessIds)
                    ->where('created_at', '>', date("Y-m-d", strtotime("-1 month")))
                    ->where('is_active', 1)
                    ->where('is_rejected', 0)
                    ->get()
                    ->load('jobNaming', 'business', 'contractType', 'applications');
        }


        foreach ($jobPosts as $jobPost) {
            $jobPost->business->place = $jobPost->business->place;
        }

        return $jobPosts;
    }

    /**
     * GET a listing of all recruiters accounts
     */
    public function getAllRecruiters() {
        $users = User::where('user_type_id', 2)->get()->load('businesses', 'businesses.place');

        return $users;
    }

    /**
     * GET a listing of all recruiters accounts
     * @param $searchEmail
     */
    public function searchRecruiters($searchEmail) {
        Log::info('search with email'.$searchEmail);

        $users = User::where('user_type_id', 2)
                    ->where('email', 'LIKE', '%'.$searchEmail.'%')
                    ->get()
                    ->load('businesses', 'businesses.place');

        return $users;
    }

    /**
     * Get users that applied to logged user job offers
     * @param $userId
     */
    public function getApplicants($userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $userJobs = User::find($userId)->jobPosts;
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
            $application->user->jobXpLevel = $application->user->jobXpLevel;
        }

        return $applications;
    }

    /**
     * Save user's new info
     * @param Request $request
     * @param $userId
     * @return mixed
     */
    public function saveInfo(Request $request, $userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }
        $user = User::find($userId);
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
     * @param $userId
     * @return string
     */
    public function uploadProfilePicture(Request $request, $userId = null) {
        if ($userId == "undefined") {
            $userId = Auth::user()->id;
        }

        $user = User::find($userId);

        $base64String = $request::input('base64');

        $newFilePath = $this->uploadProfilePictureBase64($base64String, $user->id);

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
     * @param $userId
     * @return string
     */
    public function uploadResume($userId = null) {
        $input = Input::all();

        $fileExtension = Input::file('uploads')[0]->getClientOriginalExtension();

        $destinationPath = 'uploads';
        $fileName = rand(11111, 99999) . '' . $fileExtension;
        $upload_success = $input['uploads'][0]->move($destinationPath, $fileName); // uploading file to given path

        $user = null;

        if (!$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        app('App\Http\Controllers\FileController')
            ->upload('oechr-resume', $user->id.'.'.$fileExtension, $destinationPath.'/'.$fileName);

        $user->resumeUrl = "https://s3-eu-west-1.amazonaws.com/oechr-resume/".$user->id.".".$fileExtension;
        $user->save();

        if ($upload_success) {
            return Response::json($user->resumeUrl, 200);
        } else {
            return Response::json('error', 400);
        }
    }

    /**
     * Save user spoken languages and levels
     * @param Request $request
     * @param $userId
     */
    public function saveSpokenLanguages(Request $request, $userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        $spokenLanguagesData = $request::get('languages');

        /**
         * Remove existing data
         */
        DB::table('language_user')->where('user_id', $user->id)->delete();

        foreach ($spokenLanguagesData as $language) {
            DB::table('language_user')->insert(
                ['language_id' => $language['language_id'],
                 'user_id' => $user->id,
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
     *
     * @return mixed
     */
    public function getSpokenLanguages($userId = null) {
        if ($userId == "undefined" || !$userId) {
            $userId = Auth::user()->id;
        }

        $languages = DB::table('language_user')
                        ->where('user_id', $userId)
                        ->get();

        foreach ($languages as $lang) {
            $lang->language = Language::find($lang->language_id);
            $lang->languageLevel = LanguageLevel::find($lang->language_level_id);
        }

        return $languages;
    }

    /**
     * Perform payment via Payline
     */
    public function doPaylinePayment() {
        return 'test';
    }

    public function savePaylinePayment($token, $serviceId, $returnCode) {
        /**
         * Check if payment is valid
         */
        if ($returnCode == '00000') {
            $pricingPlan = PricingPlan::where('sellsy_service_id', $serviceId)->first();

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

            header('Location: https://cookorico.com/profil/confirmation-paiement/true');
        }
        else {
            header('Location: https://cookorico.com/profil/confirmation-paiement/false');
        }

        exit();
    }

    /**
     * Save user's payment after validation
     */
    public function savePayment(Request $request) {
        $serviceData = $request::get('service');

        $pricingPlanTitle = $serviceData['name'];

        $pricingPlan = PricingPlan::find($serviceData['customfields'][4]['formatted_value']);

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
     * Send user informations to reset his password by mail
     */
    public function sendResetPasswordMail($email) {
        $user = User::where('email', $email)->first();

        if (!$user) {
            return 'false';
        }
        else {
            if ($user->user_type_id == 3) {
                $templateName = "reset-password-candidate";
            }
            else {
                $templateName = "reset-password-recruiter";
            }

            $mailTemplate = MailTemplate::where('slug', $templateName)->first();

            Mail::send('emails.'.$templateName,
                [
                    'content' => $mailTemplate->message,
                    'user' => $user,
                ],
                function ($message) use ($user, $mailTemplate) {
                    $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                    $message->to($user->email, 'Test')
                        ->subject($mailTemplate->subject);
                }
            );
        }
    }

    /**
     * Know if currently logged user is part of a group
     * @param $userId
     */
    public function isPartOfAGroup($userId = null) {
        if ($userId == "undefined" || !$userId) {
            $userId = Auth::user()->id;
        }

        $user = User::find($userId);

        $businesses = $user->businesses;
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
     * @param $userId
     * @return mixed
     */
    public function skipJobCreationOnSignUp($userId = null) {
        if ($userId == "undefined" || !$userId) {
            $userId = Auth::user()->id;
        }

        $user = User::find($userId);
        $user->is_active = 1;
        $user->is_verified = 1;
        $user->save();

        $pricingPlan = PricingPlan::find(11);

        $plan = new Plan();
        $plan->business_id = $user->businesses[0]->id;
        $plan->credits = $pricingPlan->credits;
        $plan->pricing_plan_id = $pricingPlan->id;
        $plan->daily_contacts = $pricingPlan->daily_contacts;
        $plan->daily_remaining_contacts = $pricingPlan->daily_contacts;
        $plan->spaces = $pricingPlan->spaces;
        $plan->save();

        return $user;
    }

    /**
     * Update current user password
     */
    public function updatePassword($oldPassword, $newPassword, $userId) {
        if ($userId == "undefined" || !$userId) {
            $userId = Auth::user()->id;
        }

        $user = User::find($userId);

        $user->password = Hash::make($newPassword);
        $user->save();

        return $user;
    }
}