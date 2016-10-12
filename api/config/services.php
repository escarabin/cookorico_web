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
        'client_id' => env('LINKEDIN_ID'),
        'client_secret' => env('LINKEDIN_SECRET'),
        'redirect' => 'http://localhost:8888/api/public/auth/linkedin/callback',
    ],

    'google' => [
        'client_id' => env('GOOGLE_ID'),
        'client_secret' => env('GOOGLE_SECRET'),
        'redirect' => 'http://localhost:8888/api/public/auth/google/callback',
    ],

    'facebook' => [
        'client_id' => env('FACEBOOK_ID'),
        'client_secret' => env('FACEBOOK_SECRET'),
        'redirect' => 'http://localhost:8888/api/public/auth/facebook/callback',
    ],

    'paypal' => [
        'client_id' => 'ATyvQa44HQEqtVSi1KPaX5FcyDxy9vVAVjxZkRmjwdRuWGdXvG1rkFo1jzWQvF0K4XhIO05L8f846gnb',
        'secret' => 'EJVyXbdDD17OnmMIRu3PVT4MIct-mz9zecTH9t3ampcLMn260RWdLFOzSadKvHTKCbLLujoRuhRMtR-o'
    ],
];