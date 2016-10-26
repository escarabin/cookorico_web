<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Log;
use Auth;
use Mail;

// Models
use App\Models\Business;
use App\Models\MailTemplate;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    /**
     * GET specific testimonial
     *
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $testimonial = Testimonial::find($id)
            ->load('jobNaming', 'employee', 'business', 'recruiter');

        return $testimonial;
    }

    /**
     * Update specific testimonial data
     * @param $id
     * @param Request $request
     */
    public function update($id, Request $request) {
        $testimonial = Testimonial::find($id)->load('business', 'employee');
        $testimonialData = $request::all();

        foreach ($testimonialData as $key => $data) {
            $testimonial[$key] = $data;
        }

        $testimonial->save();

        /**
         * Send email to candidate
         */
        $templateName = 'new-testimonial';

        $mailTemplate = MailTemplate::where('slug', $templateName)->first();

        $user = $testimonial->employee;

        Mail::send('emails.'.$templateName,
            [
                'user' => $testimonial->employee,
                'testimonial' => $testimonial,
            ],
            function ($message) use ($user, $mailTemplate) {
                $message->from(env('COMPANY_EMAIL'), env('COMPANY_NAME'));

                $message->to($user->email, 'Test')
                    ->subject($mailTemplate->subject);
            }
        );


        return $testimonial;
    }

    /**
     * Reject specific testimonial request
     * @param $testimonialId
     * @return mixed
     */
    public function reject($testimonialId) {
        $testimonial = Testimonial::find($testimonialId);
        $testimonial->is_rejected = true;
        $testimonial->save();

        return $testimonial;
    }

    /**
     * Request a testimonial as a candidate
     * @param $businessId
     * @return Testimonial
     */
    public function request($businessId) {
        $testimonial = new Testimonial();
        $testimonial->employee_user_id = Auth::user()->id;

        /**
         * Send testimonial to first admin of business
         */
        $business = Business::find($businessId);
        $business_admin_users = $business->users;
        if ($business_admin_users) {
            $testimonial->recruiter_user_id = $business_admin_users[0];
            $testimonial->save();
        }

        return $testimonial;
    }
}