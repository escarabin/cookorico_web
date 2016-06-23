<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\JobType;

class HomeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show()
    {
        $jobTypeList = JobType::all();

        return view('home', [
            'jobTypeList' => $jobTypeList
        ]);
    }
}