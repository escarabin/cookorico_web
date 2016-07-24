<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Models\Job;
use Auth;
use Log;
use Hash;

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
                               'lookingForJobNaming');

            return $user;
        }
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
     * Get user's specific job alerts
     * @return mixed
     */
    public function getBusiness($businessId) {
        $business = Business::find($businessId);

        return $business;
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
     * Upload a new profile picture
     * @param Request $request
     * @return string
     */
    public function uploadProfilePicture(Request $request) {
        $base64String = $request::input('base64');

        $newFilePath = 'uploads/user/pp/'.time().'.jpg';

        $ifp = fopen($newFilePath, "wb");

        $data = explode(',', $base64String);

        fwrite($ifp, base64_decode($data[1]));
        fclose($ifp);

        app('App\Http\Controllers\FileController')
            ->upload('oechr-business-picture', '19.jpg', $newFilePath);

        return $newFilePath;
    }
}