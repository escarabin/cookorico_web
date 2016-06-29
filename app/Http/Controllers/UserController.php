<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Experience;
use Auth;

use App\Models\User;

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
     * Get user's education
     * @return mixed
     */
    public function getEducation() {
        $education = Auth::user()->education;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($education as $study) {
            $study->diploma = $study->diploma;
        }

        return $education;
    }

    /**
     * Get user's new job alerts
     * @return mixed
     */
    public function getAlerts() {
        $alerts = Auth::user()->alerts;

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($alerts as $alert) {
            $alert->jobNaming = $alert->jobNaming;
        }

        return $alerts;
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
        }

        return $testimonials;
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
     * @param $jobId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function createExperience($jobNamingId, $businessId, $startDate, $endDate, $adress, $description) {
        $user_id = Auth::user()->id;

        $experience = new Experience;

        $experience->user_id = $user_id;
        $experience->job_naming_id = $jobNamingId;
        $experience->business_id = $businessId;
        $experience->start_date = $startDate;
        $experience->end_date = $endDate;
        $experience->adress = $adress;
        $experience->description = $description;

        $experience->save();
    }
}