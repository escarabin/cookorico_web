<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Alert;
use Illuminate\Support\Facades\Request;
use Auth;

class AlertController extends Controller
{
    /**
     * Create a new job alert
     * @param Request $request
     * @return Alert
     */
    public function createAlert(Request $request) {
        $user_id = Auth::user()->id;

        $alert = new Alert();
        $alert->user_id = $user_id;

        $alertData = $request::input('alert');

        foreach ($alertData as $key => $value) {
            $alert[$key] = $value;
        }

        $alert->save();

        return $alert;
    }

    /**
     * Update existing job alert
     * @param Request $request
     * @return Alert
     */
    public function updateAlert(Request $request) {
        $alertData = $request::input('alert');

        $alert = Alert::find($alertData['id']);

        foreach ($alertData as $key => $value) {
            $alert[$key] = $value;
        }

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