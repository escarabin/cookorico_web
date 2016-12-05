<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Support\Facades\Request;

use App\Models\User;
use App\Models\Club;
use DB;
use Log;
use Hash;

class ClubController extends Controller
{
    /**
     * GET specific club
     *
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $club = User::find($id)->load('businesses', 'plans');

        return $club;
    }

    /**
     * Get all clubs
     *
     * @return mixed
     */
    public function getAll() {
        $clubs = User::where('user_type_id', 4)->orderBy('username', 'ASC')->get()->load('businesses');

        foreach ($clubs as $club) {
            $i = 0;
            foreach ($club->businesses as $business) {
                $club->businesses[$i]['place'] = $club->businesses[$i]['place'];
                $i += 1;
            }
        }

        return $clubs;
    }

    /**
     * Get all groups
     *
     * @return mixed
     */
    public function getAllGroups() {
        $groups = User::where('user_type_id', 5)
                    ->orderBy('username', 'ASC')
                    ->get()
                    ->load('businesses', 'plans');

        foreach ($groups as $group) {
            $i = 0;
            foreach ($group->businesses as $business) {
                $group->businesses[$i]['place'] = $group->businesses[$i]['place'];
                $i += 1;
            }
        }

        return $groups;
    }

    /**
     * Detach business from specific club
     * @param $businessId
     * @param $clubId
     * @return mixed
     */
    public function detachBusiness($clubId, $businessId) {
        DB::table('business_user')
                ->where('business_id', $businessId)
                ->where('user_id', $clubId)
                ->delete();
    }

    /**
     * Attach business to specific club
     * @param $businessId
     * @param $clubId
     * @return mixed
     */
    public function attachBusiness($clubId, $businessId) {
        DB::table('business_user')->insert(
            ['business_id' => $businessId, 'user_id' => $clubId]
        );
    }

    /**
     * Create a new club
     * @param Request $request
     * @return User
     */
    public function create(Request $request) {
        $clubData = $request::get('club');

        if (array_key_exists('id', $clubData)) {
            $club = new User();
        }
        else {
            $club = Club::find($clubData['id']);
        }
        $club->user_type_id = 4;
        $club->is_active = 1;
        $club->is_verified = 1;

        if ($request::get('isGroup') == 'true') {
            $club->user_type_id = 5;
        }

        foreach ($clubData as $key => $value) {
            if ($key != 'profilePictureUrl' && $key != "place" && $key != "password") {
                $club[$key] = $value;
            }
            else if ($key == 'password') {
                $club['password'] = Hash::make($value);
            }
        }

        $club->save();

        if ($request::get('isGroup') == 'true') {
            /**
             * Create a group plan with required spaces
             */
            if (array_key_exists('id', $clubData)) {
                $plan = new Plan();
            }
            else {
                $plan = Plan::where('user_id', $club->id)->first();
            }
            $plan->spaces = $request::get('plans')[0]->spaces;
            $plan->daily_contacts = $request::get('plans')[0]->daily_contacts;
            $plan->daily_remaining_contacts = $request::get('plans')[0]->daily_contacts;
            $plan->user_id = $club->id;
            $plan->save();
        }

        /**
         * Upload profile picture data
         */
        if (array_key_exists('profilePictureUrl', $clubData)) {
            app('App\Http\Controllers\UserController')
                ->uploadProfilePictureBase64($clubData['profilePictureUrl'], $club->id);
        }

        /**
         * Save club place data
         */
        if (array_key_exists('profilePictureUrl', $clubData)) {
            $place = app('App\Http\Controllers\PlaceController')
                     ->savePlaceData($clubData['place']);
            $club->place_id = $place->id;
        }

        return $club;
    }

    /**
     * Get jobs listing from clubId
     * @param $clubId
     * @return array()
     */
    public function getJobs($clubId) {
        $jobs = array();

        $club = User::find($clubId);

        $businesses = $club->businesses;

        $i = 0;
        foreach ($businesses as $business) {
            foreach ($business->jobs as $job) {
                $jobs[$i] = $job;
                $jobs[$i]['business'] = $job->business;
                $jobs[$i]['contract_type'] = $job->contractType;
                $jobs[$i]['business']['place'] = $job->business->place;
            }
            $i += 1;
        }

        return $jobs;
    }

    /**
     * Delete specific club
     * @param $clubId
     */
    public function delete($clubId) {
        /**
         * First, remove businesses attached to this club
         */
        DB::table('business_user')->where('user_id', $clubId)->delete();

        User::find($clubId)->delete();
    }
}