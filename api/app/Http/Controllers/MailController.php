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

use App\Models\Job;
use App\Models\StudyLevel;
use App\Models\Application;

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

    public function sendNewJobAlerts() {
        $alreadySentEmails = Email::where('created_at', '<', date('YYYY'));

        Mail::send('emails.new-email', [], function ($m) {
            $m->from(env('COMPANY_EMAIL'), 'Your Application');

            $m->to('scarabin-emmanuel@gmail.com', 'Emmanuel SCARABIN')->subject('Your Reminder!');
        });
    }
}