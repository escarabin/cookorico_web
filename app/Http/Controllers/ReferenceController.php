<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\ContractType;
use App\Models\JobType;

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
}