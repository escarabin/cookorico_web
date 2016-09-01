<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;

use App\Models\Job;
use App\Models\StudyLevel;
use App\Models\Application;

class JobController extends Controller
{
    /**
     * Get one specific job
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $job = Job::find($id)
                 ->load('business',
                        'user',
                        'jobNaming',
                        'type',
                        'studyLevel',
                        'contractType',
                        'jobXpLevel',
                        'languages');

        /**
         * Necessary ugly workaround
         */
        $job->business->place = $job->business->place;

        return $job;
    }

    /**
     * Get all job
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        $jobs = Job::all()
            ->load('business',
                    'user',
                    'jobNaming',
                    'type',
                    'studyLevel',
                    'contractType',
                    'jobXpLevel',
                    'languages');

        /**
         * Necessary ugly workaround
         */
        foreach ($jobs as $job) {
            $job->business->place = $job->business->place;
        }

        return $jobs;
    }

    /**
     * Search for jobs
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function search(Request $request) {
        $parameters = $request::input('searchParameters');

        Log::info($parameters);

        $contractTypeIdList = $parameters['contractTypeIdList'];
        $jobNamingIdList = $parameters['jobNamingIdList'];
        $studyLevelIdList = $parameters['studyLevelIdList'];

        /**
         * First, filter results by jobNamingId
         */
        if (count($jobNamingIdList) > 1) {
            $jobs = Job::whereIn('job_naming_id', $jobNamingIdList)
                ->get()
                ->load('business',
                    'user',
                    'jobNaming',
                    'type',
                    'studyLevel',
                    'contractType',
                    'jobXpLevel',
                    'languages');
        }
        else {
            $jobs = Job::all()
                ->load('business',
                    'user',
                    'jobNaming',
                    'type',
                    'studyLevel',
                    'contractType',
                    'jobXpLevel',
                    'languages');
        }



        /**
         * Check if job's business is inside the
         * search area
         */
        foreach ($jobs as $key => $job) {
            $job->business->place = $job->business->place;
            $jobPlace = $job->business->place;

            if ($parameters['place']) {
                $viewport_north = $parameters['place']['geometry']['viewport']['north'];
                $viewport_south = $parameters['place']['geometry']['viewport']['south'];
                $viewport_west = $parameters['place']['geometry']['viewport']['west'];
                $viewport_east = $parameters['place']['geometry']['viewport']['east'];

                if ($jobPlace->lat > $viewport_south &&
                    $jobPlace->lat < $viewport_north &&
                    $jobPlace->lon > $viewport_west &&
                    $jobPlace->lon < $viewport_east) {

                }
                else {
                    unset($jobs[$key]);
                }
            }
        }

        return $jobs;
    }

    /**
     * Apply to a specific job, as a candidate
     * @param Request $request
     * @return Application
     */
    public function apply(Request $request) {
        $newApplication = new Application;

        $applicationData = $request::input('application');

        $newApplication->user_id = Auth::user()->id;
        $newApplication->job_id = $applicationData['job_id'];
        $newApplication->comment = $applicationData['comment'];

        $newApplication->save();

        return $newApplication;
    }

    /**
     * Create a new job post
     * @param Request $request
     * @return Job
     */
    public function create(Request $request) {
        $jobPost = new Job();
        $jobPost->user_id = Auth::user()->id;

        // Substract one credit from user's subscription
        $userPlans = Auth::user()->plans;

        foreach ($userPlans as $plan) {
            if ($plan->credits > 0) {
                $plan->credits = $plan->credits - 1;
                $plan->save();
            }
        }

        $jobPostData = $request::input('jobPost');
        foreach ($jobPostData as $key => $value) {
            $jobPost[$key] = $value;
        }

        $jobPost->save();

        return $jobPost;
    }
}