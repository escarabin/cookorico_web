<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

class OptionController extends Controller
{
    public function saveOption(Request $request) {
        Log::info($request::all());
    }
}