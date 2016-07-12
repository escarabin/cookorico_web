<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Place;

class PlaceController extends Controller
{
   public function save($googlePlaceId, $adress, $city, $postalCode, $lat, $lon) {
       $place = new Place();

       $place->googlePlaceId = $googlePlaceId;
       $place->adress = $adress;
       $place->city = $city;
       $place->postalCode = $postalCode;
       $place->lat = $lat;
       $place->lon = $lon;

       return $place;
   }
}