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
    public function show($id)
    {
        $job = Job::find($id);

        return view('job', [
            'job' => $job
        ]);
    }
}