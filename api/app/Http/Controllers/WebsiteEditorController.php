<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

class WebsiteEditorController extends Controller
{
    public function saveHomePartners(Request $request) {
        Log::info($request::all());
    }

    public function saveHomeBanner(Request $request) {
        Log::info($request::all());
    }
}