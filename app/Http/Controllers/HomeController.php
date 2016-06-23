<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\User;

class HomeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show()
    {
        $user = User::find(1);

        return view('home', [
            'userLanguages' => $user->languages
        ]);
    }
}