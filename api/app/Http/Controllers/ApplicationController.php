<?php

namespace App\Http\Controllers;

use App\Models\Application;

class ApplicationController extends Controller
{
    /**
     * Accepts specific application
     * @param $applicationId
     * @return Application
     */
    public function accept($applicationId) {
        $application = Application::find($applicationId);

        $application->is_interested = true;

        $application->save();

        return $application;
    }

    /**
     * Rejectes specific application
     * @param $applicationId
     * @return Application
     */
    public function reject($applicationId) {
        $application = Application::find($applicationId);

        $application->is_rejected = true;

        $application->save();

        return $application;
    }
}