<?php

namespace App\Http\Controllers;

use Mail;

use App\Models\Application;
use App\Models\MailTemplate;

class ApplicationController extends Controller
{
    /**
     * Accepts specific application
     * @param $applicationId
     * @return Application
     */
    public function accept($applicationId) {
        $application = Application::find($applicationId);

        $application->is_interested = true;

        $application->save();

        /**
         * Send an email to the candidate
         */
        $templateName = 'application-accepted';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        $user = $application->user;

        Mail::send('emails.'.$templateName,
            [
                'user' => $application->user,
                'job' => $application->job,
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );

        return $application;
    }

    /**
     * Rejects specific application
     * @param $applicationId
     * @return Application
     */
    public function reject($applicationId) {
        $application = Application::find($applicationId);

        $application->is_rejected = true;

        $application->save();

        /**
         * Send an email to the candidate
         */
        $templateName = 'application-rejected';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        $user = $application->user;

        Mail::send('emails.'.$templateName,
            [
                'user' => $application->user,
                'job' => $application->job,
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );

        return $application;
    }
}