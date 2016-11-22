<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Study;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;

class EducationController extends Controller
{
    /**
     * Create new study
     * @param Request $request
     * @param $userId
     * @return Study
     */
    public function createStudy(Request $request, $userId = null) {
        $user = null;

        if ($userId == "undefined" || !$userId) {
            $user = Auth::user();
        }
        else {
            $user = User::find($userId);
        }

        $study = new Study;

        $study->user_id = $user->id;

        $studyData = $request::input('study');

        foreach ($studyData as $key => $value) {
            $study[$key] = $value;
        }

        $study->save();

        return $study;
    }

    /**
     * Update existing study
     * @param Request $request
     * @return Study
     */
    public function updateStudy(Request $request) {
        $studyData = $request::input('study');

        $study = Study::find($studyData['id']);

        foreach ($studyData as $key => $value) {
            $study[$key] = $value;
        }

        $study->save();

        return $study;
    }

    /**
     * Get user's specific study regarding id
     * @param $studyId
     * @return mixed
     */
    public function getStudy($studyId) {
        $study = Study::find($studyId);

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