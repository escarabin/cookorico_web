<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\ContractType;
use App\Models\JobNaming;
use App\Models\JobType;
use App\Models\StudyLevel;

class ReferenceController extends Controller
{
    public function getAllContractTypes() {
        $contractTypes = ContractType::all();

        return $contractTypes;
    }

    public function getAllJobTypes() {
        $jobTypes = JobType::all();

        return $jobTypes;
    }


    public function getAllJobNamings() {
        $jobNamings = JobNaming::all();

        return $jobNamings;
    }

    public function getAllStudyLevels() {
        $studyLevels = StudyLevel::all();

        return $studyLevels;
    }
}