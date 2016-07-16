<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Alert;
use Auth;

class AlertController extends Controller
{
    /**
     * Create new job alert
     * @param $diplomaId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function createAlert($alertFrequencyId, $title, $jobNamingId, $place) {
        $user_id = Auth::user()->id;

        $alert = new Alert;

        $alert->user_id = $user_id;
        $alert->alert_frequency_id = $alertFrequencyId;
        $alert->title = $title;
        $alert->job_naming_id = $jobNamingId;
        $alert->place = $place;

        $alert->save();

        return $alert;
    }

    /**
     * Delete alerts regarding array of ids
     * @param $listAlertId
     * @return mixed
     */
    public function deleteAlerts($listAlertId) {
        $listAlertId = explode(',', $listAlertId);

        $alerts = Alert::whereIn('id', $listAlertId)->delete();

        return $alerts;
    }
}