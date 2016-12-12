<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Email;
use App\Models\MailTemplate;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;
use DateTime;

use App\Models\Job;
use App\Models\StudyLevel;
use App\Models\Application;
use App\Models\User;

class MailController extends Controller
{
    /**
     * Get specific mail template data
     * @return mixed
     */
    public function getTemplate($id)
    {
        $template = MailTemplate::find($id);

        return $template;
    }

    /**
     * Get mail templates listing
     * @return mixed
     */
    public function getTemplates()
    {
        $templates = MailTemplate::all();

        return $templates;
    }

    /**
     * Edit existing Template
     * @param Request $request
     * @return MailTemplate
     */
    public function editTemplate(Request $request) {
        $mailTemplateData = $request::input('mailTemplate');

        $template = MailTemplate::find($mailTemplateData['id']);
        $template->subject = $mailTemplateData['subject'];

        $parsedMessage = str_replace('&gt;', '>', $mailTemplateData['message']);
        $template->message = $parsedMessage;

        /**
         * Save message in related Blade view
         */
        $messageViewFile = env('LARAVEL_INSTALL_DIR').'/resources/views/emails/'.$template->slug.'.blade.php';
        file_put_contents($messageViewFile, $parsedMessage);

        $template->save();

        return $template;
    }

    /**
     * Send monthly a reminder to fill candidate profile 100%
     */
    public function sendCandidateProfileNotCompleteMail() {
        // List all candidates users
        $users = User::where('user_type_id', 3)->get();

        foreach ($users as $user) {
            /**
             * Check profile percentage
             */
            $profilePercentage = app('App\Http\Controllers\UserController')
                ->getProfilePercentage($user->id);

            $templateName = 'candidate-fill-profile';

            $mailTemplate = MailTemplate::where($templateName)->first();

            if ($profilePercentage < 100) {
                Mail::send('emails.'.$templateName,
                    [
                        'user' => $user
                    ],
                    function ($message) use ($user, $mailTemplate) {
                        $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                        $message->to($user->email, 'Test')
                            ->subject($mailTemplate->subject);
                    }
                );
            }
        }
    }

    /**
     * Change status and send email to inactive users
     */
    public function lookForInactiveUsers() {
        // TODO
    }

    /**
     * Send new job alerts every day to candidates
     */
    public function sendNewJobAlerts() {
        Log::info('sendNewJobAlerts');

        $candidateUsers = User::where('user_type_id', 3)
                                ->where('alert_frequency_id', '>', 0)
                                ->get();

        $templateName = "jobs-alert";
        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        foreach ($candidateUsers as $user) {
            $lastSentAlert = Email::where('user_id', $user->id)
                                    ->where('is_job_alert', true)
                                    ->orderBy('created_at', 'desc')
                                    ->first();

            $sendAlert = false;
            $lastSentAlertDate = "1970-01-01 00:00:00";

            /**
             * User has already received mail alerts
             */
            if ($lastSentAlert) {
                $today = new DateTime(); // This object represents current date/time
                $today->setTime( 0, 0, 0 ); // reset time part, to prevent partial comparison

                $lastSentAlertDate = $lastSentAlert->created_at;
                $diff = $today->diff( $lastSentAlertDate );
                $diffDays = (integer)$diff->format( "%R%a" );

                switch( $diffDays ) {
                    case 0:
                        $sendAlert = false; // mail already sent today
                        break;
                    case -1:
                        // immediately
                        if ($user->alert_frequency_id == 1) {
                            $sendAlert = true;
                        }
                        break;
                    case -2:
                        // every 48 hours
                        if ($user->alert_frequency_id == 2) {
                            $sendAlert = true;
                        }
                        break;
                    case -7:
                        // every week
                        if ($user->alert_frequency_id == 3) {
                            $sendAlert = true;
                        }
                        break;
                    case -14:
                        // every 14 days
                        if ($user->alert_frequency_id == 4) {
                            $sendAlert = true;
                        }
                        break;
                    default:
                        // never
                        $sendAlert = false;
                }
            }
            /**
             * User is receiving his first mail alert
             */
            else {
                $sendAlert = true;
            }


            if ($sendAlert) {
                /**
                 * Get which jobs & places user is looking for
                 */
                $userLookingForJobNamingList = $user->lookingForJobNamings;
                $userLookingForPlaceList = $user->lookingForJobNamingPlaces;
                $interestingJobList = array();

                $i = 0;
                foreach ($userLookingForJobNamingList as $lookingForJobNaming) {
                    $jobList = Job::where('created_at', '>', $lastSentAlertDate)
                                    ->where('job_naming_id', $lookingForJobNaming['id'])
                                    ->get();


                    foreach ($jobList as $job) {
                        $jobPlace = $job->business->place;
                        $userPlace = $userLookingForPlaceList[$i];

                        /**
                         * Let's see if $jobPlace coordinates are inside
                         * $userPlace's viewport
                         */
                        if ($jobPlace->lat < $userPlace->viewport_north &&
                            $jobPlace->lat > $userPlace->viewport_south &&
                            $jobPlace->lon > $userPlace->viewport_west &&
                            $jobPlace->lon < $userPlace->viewport_east) {
                            $interestingJobList[] = $job;
                        }
                    }

                    if (count($interestingJobList) > 0) {
                        Mail::send('emails.'.$templateName,
                            [
                                'user' => $user,
                                'jobs' => $interestingJobList
                            ],
                            function ($message) use ($user, $mailTemplate) {
                                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                                $message->to($user->email, 'Test')
                                    ->subject($mailTemplate->subject);
                            }
                        );

                        /**
                         * Save mail in DB
                         */
                        $mail = new Email();
                        $mail->subject = $mailTemplate->subject;
                        $mail->user_id = $user->id;
                        $mail->is_job_alert = true;
                        $mail->save();
                    }
                    $i += 1;
                }
            }
        }
    }
}