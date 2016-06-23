<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Job;

class JobController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function get($id)
    {
        $job = Job::find($id);

        return $job;
    }

    public function getAll() {
        $jobs = Job::all();

        return $jobs;
    }
}