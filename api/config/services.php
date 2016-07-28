<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'mandrill' => array(
        'secret' => '4wWHTZT1JCvYcDXCn6YJcQ',
    ),

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'linkedin' => [
        'client_id' => '77pzdtz69axly4',
        'client_secret' => 'G2aEA7CNlFJVttCD',
        'redirect' => 'http://localhost:8888/auth/linkedin/callback',
    ],

    'google' => [
        'client_id' => 'oechr-1380',
        'client_secret' => 'AIzaSyDHar3rTVpUcvpFDj88PttAPy85Bk17R18',
        'redirect' => 'http://localhost:8888/auth/google/callback',
    ],

];