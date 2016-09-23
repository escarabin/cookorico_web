<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use App\Models\Job;
use Auth;
use Log;
use Hash;
use Mail;

use App\Models\User;
use App\Models\Application;
use App\Models\Experience;
use App\Models\Study;
use App\Models\Alert;
use App\Models\Business;

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
     */
    public function getProfilePercentage() {
        $user = Auth::user();

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
     */
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
         */
        foreach ($lookingForJobsNamingIdList as $jobNamingId) {
            $user->lookingForJobNamings()->attach($jobNamingId);
        }

        $user->is_active = 1;

        $user->save();

        return $user;
    }

    /**
     * Login using specific id
     * @param $userId
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
                    'lookingForJobNamings');
        }

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

        Log::info(count($jobPostList));

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
                        ->where('user_status_id', 1)
                        ->get()
                        ->load('lookingForJobNamings', 'xpLevel');

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

        /**
         * Check if a user exists with same email address
         */
        if (User::where('email', $request::get('email'))->first()) {
            return "Cet e-mail est déjà pris";
        }
        else {
            $user->email = $request::get('email');
            $user->user_type_id = $request::get('user_type_id');
            $user->password = Hash::make($request::get('password'));
            $user->save();

            /**
             * Send confirmation email
             */
            $mailTemplate = MailTemplate::where('slug', 'confirm-account')->first();

            Mail::send('emails.confirm-account',
                [
                    'content' => $mailTemplate->message,
                    'user' => $user
                ],
                function ($message) use ($user, $mailTemplate) {
                    $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                    $message->to($user->email, 'Test')
                            ->subject($mailTemplate->subject);
                }
            );

            Log::info('sending email');

            Mail::send('emails.confirm-account', ['title' => 'test', 'content' => 'test'], function ($message)
            {

                $message->from('me@gmail.com', 'Christian Nwamba');

                $message->to('scarabin.emmanuel@gmail.com');

            });

            return $user;
        }
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
                           ->load('jobNaming', 'user', 'business');

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

        return $testimonials;
    }

    /**
     * Get user's businesses
     * @return mixed
     */
    public function getBusinesses() {
        $businesses = Auth::user()->businesses
                        ->load('type', 'clubs', 'place');

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

        /**
         * Necessary workaround to return business place
         */
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
                                    ->get()
                                    ->load('user')
                                    ->load('job');

        /**
         * Necessary workaround to return business data
         */
        foreach ($applications as $application) {
            $application->job->business = $application->job->business;
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
        $user_id = Auth::user()->id;

        $base64String = $request::input('base64');

        $newFilePath = 'uploads/user/pp/'.time().'.jpg';
        $dirName = dirname($newFilePath);

        /**
         * If directory is not yet created, do it
         */
        if (!is_dir(dirname($newFilePath))) {
            mkdir($dirName, 0755, true);
        }

        $ifp = fopen($newFilePath, "wb");
        $data = explode(',', $base64String);

        fwrite($ifp, base64_decode($data[1]));
        fclose($ifp);

        app('App\Http\Controllers\FileController')
            ->upload('oechr-profile-picture', $user_id.'.jpg', $newFilePath);

        return $newFilePath;
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
     * Disable currently logged user account
     */
    public function disableAccount() {
        $user = Auth::user();
        $user->is_active = 0;
        $user->save();

        return $user;
    }
}