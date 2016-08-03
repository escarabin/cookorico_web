<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
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
                               'lookingForJobNaming');

            return $user;
        }
    }

    /**
     * Sign out currently logged user
     */
    public function signOut() {
        Auth::logout();
    }

    /**
     * Get logged user related infos
     * @return mixed
     */
    public function getInfos() {
        $user = Auth::user()
             ->load('plans',
                    'status',
                    'type',
                    'civility',
                    'place',
                    'lookingForJobNaming');

        return $user;
    }

    /**
     * Create new user
     * @param $email
     * @param $password
     * @param $firstName
     * @param $lastName
     * @param $phone
     * @param $birth_date
     * @param $user_type_id
     * @param $civility_id
     * @param $user_status_id
     * @return User
     */
    public function createUser($email,
                               $password,
                               $firstName,
                               $lastName,
                               $phone,
                               $birthDate,
                               $user_type_id,
                               $civility_id) {
        $user = new User();

        $user->email = $email;
        $user->password = Hash::make($password);
        $user->firstName = $firstName;
        $user->lastName = $lastName;
        $user->phone = $phone;
        $user->birthDate = $birthDate;
        $user->user_type_id = $user_type_id;
        $user->civility_id = $civility_id;

        $user->save();

        return $user;
    }

    /**
     * Get user's applications
     * @return mixed
     */
    public function getApplications() {
        $applications = Auth::user()->applications
                            ->load('job', 'job.business', 'user');

        return $applications;
    }


    /**
     * Get user's work experiences
     * @return mixed
     */
    public function getExperiences() {
        $experiences = Auth::user()->experiences
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
    public function getEducation() {
        $education = Auth::user()->education
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
    public function getTestimonials() {
        $testimonials = Auth::user()->testimonials
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
                    ->load('jobNaming', 'business');

        return $jobPosts;
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
            $mailTemplate = MailTemplate::where('slug', 'new_email')->first();
            Mail::send('emails.new-email',
                [
                    'content' => $mailTemplate->content,
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
}