<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
     * Create new work experience
     * @param $jobNamingId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $adress
     * @param $lat
     * @param $lon
     * @param $description
     */
    public function createExperience($jobNamingId, $businessId, $startDate, $endDate, $adress, $lat, $lon, $description) {
        $user_id = Auth::user()->id;

        $experience = new Experience;

        $experience->user_id = $user_id;
        $experience->job_naming_id = $jobNamingId;
        $experience->business_id = $businessId;
        $experience->start_date = $startDate;
        $experience->end_date = $endDate;
        $experience->adress = $adress;
        $experience->lat = $adress;
        $experience->lon = $adress;
        $experience->description = $description;

        $experience->save();

        return $experience;
    }

    /**
     * Create new study
     * @param $diplomaId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function createStudy($diplomaId, $businessId, $startDate, $endDate, $adress, $description) {
        $user_id = Auth::user()->id;

        $study = new Study;

        $study->user_id = $user_id;
        $study->diploma_id = $diplomaId;
        $study->business_id = $businessId;
        $study->start_date = $startDate;
        $study->end_date = $endDate;
        $study->adress = $adress;
        $study->description = $description;

        $study->save();

        return $study;
    }

    /**
     * Create new job alert
     * @param $diplomaId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function createAlert($alertFrequencyId, $title, $jobNamingId, $place) {
        $user_id = Auth::user()->id;

        $alert = new Alert;

        $alert->user_id = $user_id;
        $alert->alert_frequency_id = $alertFrequencyId;
        $alert->title = $title;
        $alert->job_naming_id = $jobNamingId;
        $alert->place = $place;

        $alert->save();

        return $alert;
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
}