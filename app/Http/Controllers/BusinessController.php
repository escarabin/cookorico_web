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
        $business->city = $city;
        $business->email = $email;
        $business->phone = $phone;
        $business->postalCode = $postalCode;
        $business->website = $website;
        $business->description = $description;
        $business->business_type_id = $typeId;

        $business->save();

        return $business;
    }
}