<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use App\Models\BusinessPhoto;
use Illuminate\Support\Facades\Request;
use App\Models\Business;
use App\Models\Place;
use Log;
use Auth;
use DB;

class BusinessController extends Controller
{
    /**
     * Create a new business
     * @param Request $request
     * @return Business
     */
    public function create(Request $request) {
        $businessData = $request::input('business');
        $business = new Business;

        if (array_key_exists('id', $businessData)) {
            $business = Business::find($businessData['id']);
        }

        foreach ($businessData as $key => $value) {
            if ($key != "photos" &&
                $key != "place" &&
                $key != "id" &&
                $key != "created_at" &&
                $key != "updated_at") {
                if (!is_array($value)) {
                    $business[$key] = $value;
                }
            }
        }

        $business->save();

        /**
         * Loop through business photos
         */
        $i = 1;
        foreach ($businessData['photos'] as $photo) {
            // Create photo only if it is not yet stored in db
            //if (!BusinessPhoto::where('url', $photo['url'])->first()) {
                $businessPhoto = new BusinessPhoto();

                /**
                 * If image url is base64 code, upload it to AWS
                 */
                if (strpos($photo['url'], 'base') !== false) {
                    $newFilePath = 'uploads/business/photo/'.time().'.jpg';
                    $dirName = dirname($newFilePath);

                    /**
                     * If directory is not yet created, do it
                     */
                    if (!is_dir(dirname($newFilePath))) {
                        mkdir($dirName, 0755, true);
                    }

                    $ifp = fopen($newFilePath, "wb");
                    $data = explode(',', $photo['url']);

                    fwrite($ifp, base64_decode($data[1]));
                    fclose($ifp);

                    app('App\Http\Controllers\FileController')
                        ->upload('oechr-business-picture', $business->id.'/'.$i.'.jpg', $newFilePath);

                    $businessPhoto->url = 'https://s3-eu-west-1.amazonaws.com/oechr-business-picture/'.$business->id.'/'.$i.'.jpg';
                }
                else {
                    $businessPhoto->url = $photo['url'];
                }
                $businessPhoto->business_id = $business->id;
                $businessPhoto->save();
            //}
            $i += 1;
        }

        if (!array_key_exists('id', $businessData)) {
            $user_id = Auth::user()->id;
            $business->users()->attach($user_id);
            $business->save();
            /**
             * Check if place has already been created.
             * If so, attach it to the business we just created
             * If not, create it and attach it the business
             */
            $placeData = $request::input('place');
            $place = Place::where('googlePlaceId', $placeData['googlePlaceId'])->first();
            if ($place) {
                $business->place_id = $place->id;
                $business->save();
            }
            else {
                $place = new Place();
                foreach ($placeData as $key => $value) {
                    $place[$key] = $value;
                }

                $place->save();
                $business->place_id = $place->id;
                $business->save();
            }

            /**
             *  Create Sellsy Prospect related to current user / Contact
             */
            App::make('SellsyClient')
                ->getService('Prospects')
                ->call('create',
                    ['third' =>
                        ['cookorico_id' => $business->id,
                            'name' => $business->title,
                            'tel' => $business->phone,
                            'email' => $business->email],
                        'contact' =>
                            ['cookorico_id' => Auth::user()->id,
                                'name' => Auth::user()->email,
                                'tel' => $business->phone,
                                'forename' => Auth::user()->firstName],
                        'address' =>
                            ['name' => $place->adress,
                                'part1' => $place->adress,
                                'town' => $place->city,
                                'zip' => $place->postalCode]
                    ]
                );
        }


        return $business;
    }

    /**
     * Get specific business
     * @return mixed
     */
    public function get($businessId) {
        $business = Business::find($businessId)
            ->load('photos')
            ->load('users')
            ->load('place');

        return $business;
    }

    /**
     * get jobs from business specific id
     * @param $businessId
     */
    public function getJobs($businessId) {
        $business = Business::find($businessId);

        $jobs = $business->jobs->load('business', 'contractType');

        foreach ($jobs as $job) {
            $job->business->place = $job->business->place;
        }

        return $jobs;
    }

    /**
     * Get all businesses
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        $businesses = Business::all()
                        ->load('type')
                        ->load('place');

        return $businesses;
    }

    /**
     * Attach user to specific business
     * @param $userId
     * @param $businessId
     */
    public function attachUser($userId, $businessId) {
        DB::table('business_user')->insert([
            ['user_id' => $userId, 'business_id' => $businessId],
        ]);
    }

    /**
     * Detach user to specific business
     * @param $userId
     * @param $businessId
     */
    public function detachUser($userId, $businessId) {
        DB::table('business_user')
            ->where('user_id', $userId)
            ->where('business_id', $businessId)
            ->delete();
    }
}