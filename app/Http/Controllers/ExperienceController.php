<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use App\Models\Experience;

class ExperienceController extends Controller
{
    /**
     * Create new work experience
     * @param $jobNamingId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $description
     */
    public function createExperience($jobNamingId, $businessId, $startDate, $endDate, $description) {
        $user_id = Auth::user()->id;

        $experience = new Experience;

        $experience->user_id = $user_id;
        $experience->job_naming_id = $jobNamingId;
        $experience->business_id = $businessId;
        $experience->start_date = $startDate;
        $experience->end_date = $endDate;
        $experience->description = $description;

        $experience->save();

        return $experience;
    }

    /**
     * Update existing work experience
     * @param $experienceId
     * @param $jobNamingId
     * @param $businessId
     * @param $startDate
     * @param $endDate
     * @param $description
     */
    public function updateExperience($experienceId,
                                     $jobNamingId,
                                     $businessId,
                                     $startDate,
                                     $endDate,
                                     $description = null) {
        $user_id = Auth::user()->id;

        $experience = Experience::find($experienceId);

        $experience->user_id = $user_id;
        $experience->job_naming_id = $jobNamingId;
        $experience->business_id = $businessId;
        $experience->start_date = $startDate;
        $experience->end_date = $endDate;
        $experience->description = $description;

        $experience->save();

        return $experience;
    }

    public function deleteExperiences($listExperienceId) {
        $listExperienceId = explode(',', $listExperienceId);

        $experiences = Experience::whereIn('id', $listExperienceId)->delete();

        return $experiences;
    }
}