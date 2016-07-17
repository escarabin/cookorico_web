<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Auth;
use Log;

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
        $user = User::where('email', $email)->first();

        if ($user) {
            Auth::loginUsingId($user->id);

            // Necesseray Laravel's workaround to return relationship values inside JSON
            $user->plans = $user->plans;
            $user->type = $user->type;

            // Authentication passed...
            return $user;
        }
    }

    /**
     * Get user's applications
     * @return mixed
     */
    public function getApplications() {
        $applications = Auth::user()->applications;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($applications as $application) {
            $application->job = $application->job;
            $application->user = $application->user;
            $application->job->business = $application->job->business;
        }

        return $applications;
    }


    /**
     * Get user's work experiences
     * @return mixed
     */
    public function getExperiences() {
        $experiences = Auth::user()->experiences;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($experiences as $experience) {
            $experience->jobNaming = $experience->jobNaming;
            $experience->user = $experience->user;
            $experience->business = $experience->business;
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
    public function getEducation() {
        $education = Auth::user()->education;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($education as $study) {
            $study->diploma = $study->diploma;
            $study->business = $study->business;
        }

        return $education;
    }

    /**
     * Get user's job alerts
     * @return mixed
     */
    public function getAlerts() {
        $alerts = Auth::user()->alerts;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($alerts as $alert) {
            $alert->jobNaming = $alert->jobNaming;
            $alert->alertFrequency = $alert->alertFrequency;
        }

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
        $testimonials = Auth::user()->testimonials;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($testimonials as $testimonial) {
            $testimonial->jobNaming = $testimonial->jobNaming;
            $testimonial->recruiter = $testimonial->recruiter;
            $testimonial->employee = $testimonial->employee;
            $testimonial->business = $testimonial->business;
        }

        return $testimonials;
    }

    /**
     * Get user's businesses
     * @return mixed
     */
    public function getBusinesses() {
        $businesses = Auth::user()->businesses;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($businesses as $business) {
            $business->type = $business->type;
            $business->clubs = $business->clubs;
            $business->place = $business->place;
        }

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
        $plans = Auth::user()->plans;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($plans as $plan) {
            $plan->pricingPlan = $plan->pricingPlan;
        }

        return $plans;
    }

    /**
     * Get user's created testimonials
     * @return mixed
     */
    public function getCreatedTestimonials() {
        $testimonials = Auth::user()->createdTestimonials;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($testimonials as $testimonial) {
            $testimonial->jobNaming = $testimonial->jobNaming;
            $testimonial->recruiter = $testimonial->recruiter;
            $testimonial->employee = $testimonial->employee;
        }

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
        $jobPosts = Auth::user()->jobPosts;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($jobPosts as $jobPost) {
            $jobPost->jobNaming = $jobPost->jobNaming;
            $jobPost->business = $jobPost->business;
        }

        return $jobPosts;
    }
}