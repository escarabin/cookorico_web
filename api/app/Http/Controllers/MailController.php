<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
use Illuminate\Support\Facades\App;
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
}