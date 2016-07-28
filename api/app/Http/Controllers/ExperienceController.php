<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Log;
use Illuminate\Support\Facades\Request;
use Auth;
use App\Models\Experience;

class ExperienceController extends Controller
{
    /**
     * Create new work experience
     * @param Request $request
     * @return Experience
     */
    public function createExperience(Request $request) {
        $user_id = Auth::user()->id;

        $experience = new Experience;
        $experience->user_id = $user_id;

        $experienceData = $request::input('experience');

        foreach ($experienceData as $key => $value) {
            $experience[$key] = $value;
        }

        $experience->save();

        return $experience;
    }

    /**
     * Update existing work experience
     * @param Request $request
     * @return Experience
     */
    public function updateExperience(Request $request) {
        $experienceData = $request::input('experience');

        $experience = Experience::find($experienceData['id']);

        foreach ($experienceData as $key => $value) {
            $experience[$key] = $value;
        }

        $experience->save();

        return $experience;
    }

    /**
     * Delete specific experiences regarding a list of ids
     * @param $listExperienceId
     * @return mixed
     */
    public function deleteExperiences($listExperienceId) {
        $listExperienceId = explode(',', $listExperienceId);

        $experiences = Experience::whereIn('id', $listExperienceId)->delete();

        return $experiences;
    }
}