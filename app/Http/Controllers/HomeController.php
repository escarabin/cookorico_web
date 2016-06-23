<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\JobNaming;

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
        $jobTypeList = JobNaming::all();

        return view('home', [
            'jobTypeList' => $jobTypeList
        ]);
    }
}