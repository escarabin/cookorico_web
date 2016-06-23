<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
            // Authentication passed...
            return $user;
        }
    }
}