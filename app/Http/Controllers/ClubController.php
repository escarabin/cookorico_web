<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Club;

class ClubController extends Controller
{
    /**
     * Show specific club
     *
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $club = Club::find($id);

        return $club;
    }

    /**
     * Get all clubs
     *
     * @return mixed
     */
    public function getAll() {
        $clubs = Club::all();

        return $clubs;
    }
}