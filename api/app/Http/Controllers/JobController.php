<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;
use DB;
use Mail;

use App\Models\Job;
use App\Models\User;
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
                        'applications',
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
     * @param $includeExpiredJobs
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll($includeExpiredJobs) {
        /* if ($includeExpiredJobs != "true") {
            $jobs = Job::where('created_at', '>', date("Y-m-d", strtotime("-1 month")))
                ->where('is_active', 1)
                ->orderBy('created_at', 'DESC')
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
            $jobs = Job::orderBy('created_at', 'DESC')
                ->get()
                ->load('business',
                    'user',
                    'jobNaming',
                    'type',
                    'studyLevel',
                    'contractType',
                    'jobXpLevel',
                    'languages');
        }*/

        $jobs = Job::where('created_at', '>', date("Y-m-d", strtotime("-1 month")))
            ->where('is_active', 1)
            ->orderBy('created_at', 'DESC')
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
        $xpLevelList = array();

        if (array_key_exists('contractTypeList', $parameters)) {
            $contractTypeList = $parameters['contractTypeList'];
        }
        if (array_key_exists('jobNamingList', $parameters)) {
            $jobNamingList = $parameters['jobNamingList'];
        }
        if (array_key_exists('xpLevelList', $parameters)) {
            $xpLevelList = $parameters['xpLevelList'];
        }

        $jobNamingIdList = array();
        $contractTypeIdList = array();
        $xpLevelIdList = array();

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
        foreach ($xpLevelList as $xpLevelId => $xpLevelTitle) {
            if ($xpLevelTitle) {
                $xpLevelIdList[] = $xpLevelId;
            }
        }

        /**
         * Create a query to filter job results by params
         */
        $jobsQuery = Job::query();
        $jobsQuery = Job::where('created_at', '>', date("Y-m-d", strtotime("-1 month")));
        $jobsQuery->where('is_active', 1);
        $jobsQuery->where('is_accepted', 1);

        if (count($jobNamingIdList)) {
            $jobsQuery->whereIn('job_naming_id', $jobNamingIdList);
        }
        if (count($contractTypeIdList)) {
            $jobsQuery->whereIn('contract_type_id', $contractTypeIdList);
        }
        if (count($xpLevelIdList)) {
            $jobsQuery->whereIn('job_xp_level_id', $xpLevelIdList);
        }

        $jobsQuery->orderBy('created_at', 'DESC');

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

        return $jobs;
    }

    /**
     * Apply to a specific job, as a candidate
     * @param Request $request
     * @param $userId
     * @return Application
     */
    public function apply(Request $request, $userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        $newApplication = new Application;
        $applicationData = $request::input('application');

        $newApplication->user_id = $user->id;
        $newApplication->job_id = $applicationData['job_id'];
        $newApplication->status_id = 2;
        $newApplication->comment = $applicationData['comment'];

        $applicationJob = Job::find($newApplication->job_id)->load('business', 'business.users');

        /**
         * Send a mail to every recruiters of business
         */
        foreach ($applicationJob->business->users as $recruiterUser) {
            $templateName = 'new-applicant';

            $mailTemplate = MailTemplate::where('slug', $templateName)->first();

            Mail::send('emails.'.$templateName,
                [
                    'user' => $recruiterUser,
                    'job' => $applicationJob,
                    'candidate' => $user
                ],
                function ($message) use ($recruiterUser, $mailTemplate) {
                    $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                    $message->to($recruiterUser->email, 'Test')
                        ->subject($mailTemplate->subject);
                }
            );
        }

        /**
         * Send confirmation email to candidate
         */
        $templateName = 'job-applied';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        Log::info('');

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
     * @param $userId
     * @return Job
     */
    public function create(Request $request, $userId = null) {
        $jobPostData = $request::input('jobPost');

        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        /**
         * If job-post id is already defined, just update job-post, else create it
         */
        $jobPost = new Job();
        if (array_key_exists('id', $jobPostData)) {
            $jobPost = Job::find($jobPostData['id']);
        }

        // Substract one credit from user's subscription
        $userPlans = $user->plans;

        foreach ($userPlans as $plan) {
            if ($plan->credits > 0) {
                $plan->credits = $plan->credits - 1;
                $plan->save();
            }
        }

        foreach ($jobPostData as $key => $value) {
            if ($key == "study_level") {
                $key = "study_level_id";
            }

            if ($key != 'user_id' && $key != 'type' && !is_array($value)) {
                $jobPost[$key] = $value;
            }
        }

        /**
         * Send confirmation email to recruiter
         */
        $templateName = 'reviewing-job-post';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();


        /**
         * Necessary workaround to append civility data to user object
         */
        $user->civility = $user->civility;

        if (!array_key_exists('id', $jobPostData)) {
            $jobPost->user_id = $user->id;

            Mail::send('emails.' . $templateName,
                [
                    'user' => $user,
                ],
                function ($message) use ($user, $mailTemplate) {
                    $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                    $message->to($user->email, 'Test')
                        ->subject($mailTemplate->subject);
                }
            );
        }


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

        $user = $jobPost->user->load('civility');

        /**
         * Send confirmation email to recruiter
         */
        $templateName = 'job-post-online';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        Mail::send('emails.'.$templateName,
            [
                'user' => $user,
                'job' => $jobPost
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );

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


    /**
     * Daily generate an XML file with all offers for indeed, lbc etc...
     */
    public function generateXmlFile() {
        $allJobs = $this->getAll();

        $xmlFileContent = '<?xml version="1.0" encoding="UTF-8"?>
                                <source>
                                    <publisher>cookorico.com</publisher>
                                    <publisherurl>http://cookorico.com/</publisherurl>
                                    <lastBuildDate>'.date("D M j G:i:s T Y").'</lastBuildDate>';

        foreach ($allJobs as $job) {
            $xmlFileContent .= '<job>
                                    <title><![CDATA['.$job->title.']]></title>
                                    <date><![CDATA['.$job->created_at.']]></date>
                                    <referencenumber><![CDATA['.$job->id.']]></referencenumber>
                                    <url><![CDATA[http://cookorico.com/#/recherche/annonce/'.$job->id.']]></url>
                                    <company><![CDATA['.$job->business->title.']]></company>
                                    <city><![CDATA['.$job->business->place->city.']]></city>
                                    <postalcode><![CDATA['.$job->business->place->postalCode.']]></postalcode>
                                    <country><![CDATA[FRANCE]]></country>
                                    <description><![CDATA['.$job->description.']]></description>
                                    <category><![CDATA['.$job->jobNaming->title.']]></category>';

            if ($job->studyLevel) {
                $xmlFileContent .= "<education><![CDATA['.$job->studyLevel->title.']]></education>";
            }
            if ($job->jobXpLevel) {
                $xmlFileContent .= "<experience><![CDATA['.$job->jobXpLevel->title.']]></experience>";
            }
            if ($job->contractType) {
                $xmlFileContent .= "<jobtype><![CDATA['.$job->contractType->title.']]></jobtype>";
            }
            $xmlFileContent .= '</job>';
        }

        $xmlFileContent .= '    </source>
                            </xml>';

        return $xmlFileContent;
    }

    /**
     * Pull up JobPost on top of list
     * @param $jobPostId
     */
    public function pullUp($jobPostId) {
        $job = Job::find($jobPostId);
        $job->updated_at = date("Y-m-d H:i:s");
        $job->created_at = date("Y-m-d H:i:s");
        $job->on_top_of_listing = true;
        $job->save();

        return $job;
    }

    /**
     * Deactivate specific job post
     * @param $jobPostId
     * @return Job
     */
    public function deactivate($jobPostId) {
        $jobPost = Job::find($jobPostId);
        $jobPost->is_active = false;
        $jobPost->save();

        return $jobPost;
    }

    /**
     * Activate specific job post
     * @param $jobPostId
     * @return Job
     */
    public function activate($jobPostId) {
        $jobPost = Job::find($jobPostId);
        $jobPost->is_active = true;
        $jobPost->save();

        return $jobPost;
    }
}