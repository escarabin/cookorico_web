<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PlaceType;
use DB;

use App\Models\Place;
use Illuminate\Support\Facades\Log;

class PlaceController extends Controller
{
   public function save($googlePlaceId, $adress, $city, $postalCode, $lat, $lon, $types) {
       // Check if place already exists in db
       $place = Place::where('googlePlaceId', $googlePlaceId)->first();

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

           foreach($types as $type) {
               if ($type != "") {
                   $placeTypeId = PlaceType::where('title', $type)->first()->id;
                   $place->types()->attach($placeTypeId);
               }
           }
       }

       return $place;
   }
}