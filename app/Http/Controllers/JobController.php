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
     * @param $parameters
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function search($parameters) {
        $parametersJson = json_decode($parameters)->{'searchParameters'};

        $contractTypeIdList = $parametersJson->{'contractTypeIdList'};
        $jobNamingIdList = $parametersJson->{'jobNamingIdList'};
        $studyLevelIdList = $parametersJson->{'studyLevelIdList'};

        $jobs = Job::whereIn('contract_type_id', $contractTypeIdList)
                    ->whereIn('job_naming_id', $jobNamingIdList)
                    ->whereIn('study_level_id', $studyLevelIdList)
                    ->get()
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
     * Apply to a specific job, as a candidate
     * @param $jobId
     * @param $comment
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

        $jobPostData = $request::input('jobPost');
        foreach ($jobPostData as $key => $value) {
            $jobPost[$key] = $value;
        }

        $jobPost->save();

        return $jobPost;
    }
}