<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Business;

class BusinessController extends Controller
{
    /**
     * Create a new business
     * @param $name
     * @param $adress
     * @param $postalCode
     * @param $city
     * @param $website
     * @param $type
     * @param $phone
     * @param $email
     * @param $description
     */
    public function create($name,
                           $lat,
                           $lon,
                           $adress,
                           $postalCode,
                           $city,
                           $website,
                           $typeId,
                           $phone,
                           $email,
                           $description) {
        $business = new Business;

        $business->title = $name;
        $business->adress = $adress;
        $business->lat = $lat;
        $business->lon = $lon;
        $business->city = $city;
        $business->email = $email;
        $business->phone = $phone;
        $business->postalCode = $postalCode;
        $business->website = str_replace('--', '/', $website);
        $business->description = $description;
        $business->business_type_id = $typeId;

        $business->save();

        return $business;
    }

    /**
     * Get all businesses
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        $businesses = Business::all()
                        ->load('type')
                        ->load('clubs')
                        ->load('place');

        return $businesses;
    }
}