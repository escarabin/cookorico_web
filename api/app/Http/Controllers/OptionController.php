<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

use App\Models\Option;

class OptionController extends Controller
{
    /**
     * Save an option value from its slug
     * @param Request $request
     */
    public function save(Request $request) {
        $optionData = $request::get('option');

        $option = Option::where('slug', $optionData['slug']);

        $option->value = $optionData['value'];

        $option->save();
    }
}