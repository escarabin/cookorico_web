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
}