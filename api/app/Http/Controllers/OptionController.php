<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

use App\Models\Option;

class OptionController extends Controller
{
    public function saveOption(Request $request) {
        $optionData = $request::get('option');

        $option = new Option();

        $option->slug = $optionData['slug'];
        $option->value = $optionData['value'];

        $option->save();
    }
}