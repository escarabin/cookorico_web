<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Models\Testimonial;
use Log;

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
        $testimonial = Testimonial::find($id);
        $testimonialData = $request::all();

        foreach ($testimonialData as $key => $data) {
            $testimonial[$key] = $data;
        }

        $testimonial->save();

        return $testimonial;
    }
}