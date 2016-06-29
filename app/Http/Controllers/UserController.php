<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Auth;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Sign in user
     * @param $email
     * @param $password
     * @return mixed
     */
    public function signIn($email, $password)
    {
        $user = User::where('email', $email)->first();

        if ($user) {
            Auth::loginUsingId($user->id);

            // Authentication passed...
            return $user;
        }
    }

    public function getApplications() {
        $user = Auth::user();

        $applications = Application::where('user_id', $user->id);

        return $applications;
    }
}