<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Business;
use App\Models\PlaceType;
use DB;

use App\Models\Place;
use Illuminate\Support\Facades\Log;

class PlaceController extends Controller
{
    /**
     * Save a new place
     * @param $googlePlaceId
     * @param $adress
     * @param $city
     * @param $postalCode
     * @param $lat
     * @param $lon
     * @param $types
     * @param $title
     * @param $phone
     * @param $website
     * @return Place
     */
   public function save($googlePlaceId,
                        $adress,
                        $lat,
                        $lon,
                        $types,
                        $title,
                        $phone = "",
                        $website = "",
                        $city = "",
                        $postalCode = "") {
       // Check if place already exists in db
       $place = Place::where('googlePlaceId', $googlePlaceId)->first();
       $business = new Business();

       if (!$place) {
           // Parse place types into array (initially separated by commas)
           $types = explode(",", $types);

           $place = new Place();

           $place->googlePlaceId = $googlePlaceId;
           $place->adress = $adress;
           $place->city = $city;
           $place->postalCode = $postalCode;
           $place->lat = $lat;
           $place->lon = $lon;

           $place->save();

           Log::info('saving place');

           // If place is an establishment, create business
           if (in_array('establishment', $types)) {
               $business = new Business();

               $business->place_id = $place->id;
               $business->title = $title;
               $business->phone = $phone;
               $business->website = $website;

               Log::info('saving business');

               $business->save();
           }

           foreach($types as $type) {
               if ($type != "") {
                   $placeType = PlaceType::where('title', $type)->first();
                   if ($placeType) {
                       $place->types()->attach($placeType->id);
                   }
               }
           }
       }

       return json_encode(array_merge(json_decode($place, true),json_decode($business, true)));
   }
}