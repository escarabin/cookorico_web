<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Models\Business;

class BusinessController extends Controller
{
    /**
     * Create a new business
     * @param Request $request
     * @return Business
     */
    public function create(Request $request) {
        Log::info('creating a business');
        $user_id = Auth::user()->id;

        $business = new Business;

        $business->user_id = $user_id;

        $businessData = $request::input('business');

        foreach ($businessData as $key => $value) {
            $business[$key] = $value;
        }

        $business->save();

        return $business;
    }

    /**
     * Get all businesses
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        $businesses = Business::all()
                        ->load('type')
                        ->load('clubs')
                        ->load('place');

        return $businesses;
    }
}