<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Study;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;

class EducationController extends Controller
{
    /**
     * Create new study
     * @param Request $request
     * @return Study
     */
    public function createStudy(Request $request) {
        $user_id = Auth::user()->id;

        $study = new Study;

        $study->user_id = $user_id;

        $studyData = $request::input('study');

        Log::info($studyData);

        foreach ($studyData as $key => $value) {
            $study[$key] = $value;
        }

        $study->save();

        return $study;
    }

    /**
     * Delete specific studies regarding a list of ids
     * @param $listStudyId
     * @return mixed
     */
    public function deleteEducation($listStudyId) {
        $listStudyId = explode(',', $listStudyId);

        $education = Study::whereIn('id', $listStudyId)->delete();

        return $education;
    }
}