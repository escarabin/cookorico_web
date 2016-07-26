<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Models\Business;
use App\Models\PlaceType;
use DB;

use App\Models\Place;
use Illuminate\Support\Facades\Log;

class PlaceController extends Controller
{
    /**
     * Save a new place
     * @param Request $request
     * @return Place
     */
   public function save(Request $request) {
       $placeData = $request::input('place');

       // Check if place already exists in db
       $place = Place::where('googlePlaceId', $placeData['place_id'])->first();
       $business = new Business();

       if (!$place) {
           // Parse place types into array (initially separated by commas)
           $types = $placeData['types'];

           $place = new Place();

           $adr_adress = $placeData['adr_address'];

           $place->googlePlaceId = $placeData['place_id'];

           $place->adress = $placeData['formatted_address'];
           $place->city = $this->getStringBetween($adr_adress, '<span class="locality">', '</span>');
           $place->postalCode = $this->getStringBetween($adr_adress, '<span class="postal-code">', '</span>');
           $place->lat = $placeData['geometry']['location']['lat'];
           $place->lon = $placeData['geometry']['location']['lng'];
           $place->viewport_b_lat = $placeData['geometry']['viewport']['south'];
           $place->viewport_b_lon = $placeData['geometry']['viewport']['west'];
           $place->viewport_f_lat = $placeData['geometry']['viewport']['north'];
           $place->viewport_f_lon = $placeData['geometry']['viewport']['east'];

           $place->save();

           // If place is an establishment, create business
           if (in_array('establishment', $types)) {
               $business = new Business();

               $business->place_id = $place->id;
               $business->title = $placeData['name'];
               if ($placeData['formatted_phone_number']) {
                   $business->phone = $placeData['formatted_phone_number'];
               }
               if ($placeData['website']) {
                   $business->website = $placeData['website'];
               }

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

    /**
     * Function used to retrieve the text between two specific characters
     * @param $str
     * @param $from
     * @param $to
     * @return string
     */
   private function getStringBetween($str,$from,$to)
   {
       $sub = substr($str, strpos($str,$from)+strlen($from),strlen($str));
       return substr($sub,0,strpos($sub,$to));
   }
}