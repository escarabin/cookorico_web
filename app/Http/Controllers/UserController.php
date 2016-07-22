<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
            $user = User::where('email', $email)
                        ->load('plans')
                        ->load('type');

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
                            ->load('job')
                            ->load('user')
                            ->load('business');

        return $applications;
    }


    /**
     * Get user's work experiences
     * @return mixed
     */
    public function getExperiences() {
        $experiences = Auth::user()->experiences
                        ->load('jobNaming')
                        ->load('user')
                        ->load('business');

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
                        ->load('diploma')
                        ->load('business');

        return $education;
    }

    /**
     * Get user's job alerts
     * @return mixed
     */
    public function getAlerts() {
        $alerts = Auth::user()->alerts
                        ->load('alertFrequency')
                        ->load('jobNaming');

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
                        ->load('jobNaming')
                        ->load('employee')
                        ->load('business')
                        ->load('recruiter');

        return $testimonials;
    }

    /**
     * Get user's businesses
     * @return mixed
     */
    public function getBusinesses() {
        $businesses = Auth::user()->businesses
                        ->load('type')
                        ->load('club')
                        ->load('place');

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
            ->load('jobNaming')
            ->load('employee')
            ->load('business')
            ->load('recruiter');

        return $testimonials;
    }

    /**
     * Save alert changes
     * @param $alertId
     * @param $diplomaId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function saveAlertChanges($alertId, $alertFrequencyId, $title, $jobNamingId, $place) {
        $alert = Alert::find($alertId);

        $alert->alert_frequency_id = $alertFrequencyId;
        $alert->title = $title;
        $alert->job_naming_id = $jobNamingId;
        $alert->place = $place;

        $alert->save();

        return $alert;
    }

    /**
     * Get user's job posts
     */
    public function getJobPosts() {
        $jobPosts = Auth::user()->jobPosts
                    ->load('jobNaming')
                    ->load('business');

        return $jobPosts;
    }
}