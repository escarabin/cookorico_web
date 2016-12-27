<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Log;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        // Commands\Inspire::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        Log::info('Kernel schedule called');

        $schedule->call('App\Http\Controllers\MailController@sendNewJobAlerts')
                 ->dailyAt('18:00');

        $schedule->call('App\Http\Controllers\MailController@sendCandidateProfileNotCompleteMail')
                 ->monthly();

        $schedule->call('App\Http\Controllers\MailController@lookForInactiveUsers')
                 ->daily();

        $schedule->call('App\Http\Controllers\JobController@generateXmlFile')
                 ->daily();

        $schedule->call('App\Http\Controllers\WebsiteEditorController@generateSiteMap')
                 ->daily();

        $schedule->call('App\Http\Controllers\UserController@resetRecruiterAccessCount')
                ->daily();
    }
}
