<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\User;
use DB;
use Log;

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
        $club = User::find($id)->load('businesses');

        return $club;
    }

    /**
     * Get all clubs
     *
     * @return mixed
     */
    public function getAll() {
        $clubs = User::where('user_type_id', 4)->get()->load('businesses');

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
}