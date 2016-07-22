<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Auth;

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
                        'state',
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
                'state',
                'studyLevel',
                'contractType',
                'jobXpLevel',
                'languages');

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

    /**
     * Apply to a specific job, as a candidate
     * @param $jobId
     * @param $comment
     * @return Application
     */
    public function apply($jobId, $comment) {
        $newApplication = new Application;

        $newApplication->user_id = Auth::user()->id;
        $newApplication->job_id = $jobId;
        $newApplication->comment = $comment;

        $newApplication->save();

        return $newApplication;
    }

    /**
     * Create a new job post
     * @param $title
     * @param $description
     * @param $is_hosting_employee
     * @param $is_urgent
     * @param $is_asap
     * @param $week_work_hours
     * @param $business_id
     * @param $job_type_id
     * @param $job_naming_id
     * @param $contract_type_id
     * @param $study_level_id
     * @param $job_xp_level_id
     * @param $alert_frequency_id
     * @param $diploma_id
     * @param $start_date
     * @param $end_date
     */
    public function create($title,
                            $description,
                            $is_hosting_employee,
                            $is_urgent,
                            $is_asap,
                            $week_work_hours,
                            $business_id,
                            $job_type_id,
                            $job_naming_id,
                            $contract_type_id,
                            $study_level_id,
                            $job_xp_level_id,
                            $alert_frequency_id,
                            $diploma_id,
                            $start_date,
                            $end_date) {
        $jobPost = new Job();

        $jobPost->title = $title;
        $jobPost->description = $description;
        $jobPost->user_id = Auth::user()->id;
        $jobPost->is_hosting_employee = $is_hosting_employee;
        $jobPost->is_urgent = $is_urgent;
        $jobPost->is_asap = $is_asap;
        $jobPost->week_work_hours = $week_work_hours;
        $jobPost->business_id = $business_id;
        $jobPost->job_type_id = $job_type_id;
        $jobPost->job_naming_id = $job_naming_id;
        $jobPost->contract_type_id = $contract_type_id;
        $jobPost->study_level_id = $study_level_id;
        $jobPost->job_xp_level_id = $job_xp_level_id;
        $jobPost->alert_frequency_id = $alert_frequency_id;
        $jobPost->diploma_id = $diploma_id;
        $jobPost->start_date = $start_date;
        $jobPost->end_date = $end_date;

        $jobPost->save();

        return $jobPost;
    }
}