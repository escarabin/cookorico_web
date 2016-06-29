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
}