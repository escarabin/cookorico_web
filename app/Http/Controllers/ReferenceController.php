<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\AlertFrequency;
use App\Models\BusinessType;
use App\Models\ContractType;
use App\Models\Diploma;
use App\Models\JobNaming;
use App\Models\JobNamingGroup;
use App\Models\JobType;
use App\Models\JobXpLevel;
use App\Models\StudyLevel;
use App\Models\Place;

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

    public function getAllJobNamingGroups() {
        $jobNamingGroups = JobNamingGroup::all();

        // Necesseray Laravel's workaround to return relationship values inside JSON
        foreach ($jobNamingGroups as $jobNamingGroup) {
            $jobNamingGroup->jobNamings = $jobNamingGroup->jobNamings;
        }

        return $jobNamingGroups;
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

    public function getAllJobXpLevels() {
        $jobXpLevels = JobXpLevel::all();

        return $jobXpLevels;
    }

    public function getAllStates() {
        $places = Place::all();
        $states = array();

        foreach ($places as $place) {
            $placeTypes = $place->types;

            foreach ($placeTypes as $placeType) {
                if ($placeType->title == "political") {
                    $states[] = $place;
                }
            }
        }

        return $states;
    }
}