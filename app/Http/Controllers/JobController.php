<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Job;
use App\Models\StudyLevel;

use Log;

class JobController extends Controller
{
    /**
     * Get one specific job
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $job = Job::find($id);

        // Necesseray Laravel's workaround to return relationship values inside JSON
        $job->business = $job->business;
        $job->business->type = $job->business->type;
        $job->user = $job->user;
        $job->naming = $job->naming;
        $job->type = $job->type;
        $job->state = $job->state;
        $job->studyLevel = $job->studyLevel;
        $job->contractType = $job->contractType;

        return $job;
    }

    /**
     * Get all job
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        $jobs = Job::all();

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($jobs as $job) {
            $job->business = $job->business;
            $job->business->type = $job->business->type;
            $job->user = $job->user;
            $job->naming = $job->naming;
            $job->type = $job->type;
            $job->state = $job->state;
            $job->studyLevel = $job->studyLevel;
            $job->contractType = $job->contractType;
        }

        return $jobs;
    }

    /**
     * Search for jobs
     * @param $stateId
     * @param $jobNamingId
     * @param $contractTypeId
     * @param $searchText
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function search($stateId, $jobNamingId, $contractTypeId, $searchText) {
        $jobs = Job::all();

        return $jobs;
    }
}