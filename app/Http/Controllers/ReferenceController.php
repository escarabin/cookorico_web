<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\AlertFrequency;
use App\Models\BusinessType;
use App\Models\ContractType;
use App\Models\Diploma;
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

    public function getAllDiplomas() {
        $diplomas = Diploma::all();

        return $diplomas;
    }

    public function getAllAlertFrequencies() {
        $alertFrequencies = AlertFrequency::all();

        return $alertFrequencies;
    }

    public function getAllBusinessTypes() {
        $businessTypes = BusinessType::all();

        return $businessTypes;
    }
}