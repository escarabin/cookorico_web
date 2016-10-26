<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;
use DB;

use App\Models\Job;
use App\Models\MailTemplate;
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

        /**
         * Count job click
         */
        $job->click_count = $job->click_count + 1;
        $job->save();

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

            /**
             * Count job print
             */
            $job->print_count = $job->print_count + 1;
            $job->save();
        }

        return $jobs;
    }

    /**
     * Search for jobs
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function search(Request $request) {
        $parameters = $request::get('searchParameters');

        $contractTypeList = array();
        $jobNamingList = array();
        $studyLevelList = array();

        if (array_key_exists('contractTypeList', $parameters)) {
            $contractTypeList = $parameters['contractTypeList'];
        }
        if (array_key_exists('jobNamingList', $parameters)) {
            $jobNamingList = $parameters['jobNamingList'];
        }
        if (array_key_exists('studyLevelList', $parameters)) {
            $studyLevelList = $parameters['studyLevelList'];
        }

        $jobNamingIdList = array();
        $contractTypeIdList = array();
        $studyLevelIdList = array();

        /**
         * Populate params id arrays to perform "WhereIn" search
         */
        foreach ($jobNamingList as $jobNamingId => $jobNamingTitle) {
            if ($jobNamingTitle) {
                $jobNamingIdList[] = $jobNamingId;
            }
        }
        foreach ($contractTypeList as $contractTypeId => $contractTypeTitle) {
            if ($contractTypeTitle) {
                $contractTypeIdList[] = $contractTypeId;
            }
        }
        foreach ($studyLevelList as $studyLevelId => $studyLevelTitle) {
            if ($studyLevelTitle) {
                $studyLevelIdList[] = $studyLevelId;
            }
        }

        /**
         * Create a query to filter job results by params
         */
        $jobsQuery = Job::query();

        if (count($jobNamingIdList)) {
            $jobsQuery->whereIn('job_naming_id', $jobNamingIdList);
        }
        if (count($contractTypeIdList)) {
            $jobsQuery->whereIn('contract_type_id', $contractTypeIdList);
        }
        if (count($studyLevelIdList)) {
            $jobsQuery->whereIn('study_level_id', $studyLevelIdList);
        }

        $jobs = $jobsQuery->get()->load('business',
                                        'user',
                                        'jobNaming',
                                        'type',
                                        'studyLevel',
                                        'contractType',
                                        'jobXpLevel',
                                        'languages');

        /**
         * Check if job's business is inside the
         * search area
         */
        foreach ($jobs as $key => $job) {
            $job->business->place = $job->business->place;
            $jobPlace = $job->business->place;

            /**
             * Count job print
             */
            $job->print_count = $job->print_count + 1;
            $job->save();

            if (array_key_exists('place', $parameters)) {
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

        /**
         * If no jobs found, try to find close businesses
         * TODO

        if (count($jobs)) {
            $locationOrderedBusinesses = Business::select(DB::raw("*, " .
                "( " .
                "6371 * " .
                "acos( " .
                "cos( radians(?) ) * " .
                "cos( radians( lat ) ) * " .
                "cos( " .
                "radians( lon ) - radians(?)" .
                ") + " .
                "sin( radians(?) ) * " .
                "sin( radians( lat ) ) " .
                ")" .
                ") AS distance"))->having("distance", "<", 100)
                                 ->orderBy("distance")
                                 ->get();

            Log::info('getting businesses');
            Log::info(print_r($locationOrderedBusinesses));
        }
         */

        return $jobs;
    }

    /**
     * Apply to a specific job, as a candidate
     * @param Request $request
     * @return Application
     */
    public function apply(Request $request) {
        $user = Auth::user();

        $newApplication = new Application;
        $applicationData = $request::input('application');

        $newApplication->user_id = $user->id;
        $newApplication->job_id = $applicationData['job_id'];
        $newApplication->comment = $applicationData['comment'];

        /**
         * Send confirmation email to candidate
         */
        $templateName = 'job-applied';

        $mailTemplate = MailTemplate::where($templateName)->first();

        Mail::send('emails.'.$templateName,
            [
                'user' => $user,
                'job' => Job::find($newApplication->job_id)->load('business')
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );

        $newApplication->save();

        return $newApplication;
    }

    /**
     * Create a new job post
     * @param Request $request
     * @return Job
     */
    public function create(Request $request) {
        $jobPostData = $request::input('jobPost');

        /**
         * If job-post id is already defined, just update job-post, else create it
         */
        $jobPost = new Job();
        if (array_key_exists('id', $jobPostData)) {
            $jobPost = Job::find($jobPostData['id']);
        }

        // Substract one credit from user's subscription
        $userPlans = Auth::user()->plans;

        foreach ($userPlans as $plan) {
            if ($plan->credits > 0) {
                $plan->credits = $plan->credits - 1;
                $plan->save();
            }
        }

        foreach ($jobPostData as $key => $value) {
            if ($key != 'user_id' && $key != 'type' && !is_array($value)) {
                $jobPost[$key] = $value;
            }
        }

        $jobPost->user_id = Auth::user()->id;

        $jobPost->save();

        return $jobPost;
    }

    /**
     * Accept specific jobPost as an admin user
     * @param $jobPostId
     */
    public function accept($jobPostId) {
        $jobPost = Job::find($jobPostId);

        $jobPost->is_accepted = true;

        $jobPost->save();

        return $jobPost;
    }

    /**
     * Reject specific jobPost as an admin user
     * @param $jobPostId
     */
    public function reject($jobPostId) {
        $jobPost = Job::find($jobPostId);

        $jobPost->is_rejected = true;

        $jobPost->save();

        return $jobPost;
    }
}