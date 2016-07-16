<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Study;
use Auth;

class EducationController extends Controller
{
    /**
     * Create new study
     * @param $diplomaId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $place
     * @param $description
     */
    public function createStudy($diplomaId, $businessId, $startDate, $endDate, $adress, $description) {
        $user_id = Auth::user()->id;

        $study = new Study;

        $study->user_id = $user_id;
        $study->diploma_id = $diplomaId;
        $study->business_id = $businessId;
        $study->start_date = $startDate;
        $study->end_date = $endDate;
        $study->adress = $adress;
        $study->description = $description;

        $study->save();

        return $study;
    }

    public function deleteEducation($listStudyId) {
        $listStudyId = explode(',', $listStudyId);

        $education = Study::whereIn('id', $listStudyId)->delete();

        return $education;
    }
}