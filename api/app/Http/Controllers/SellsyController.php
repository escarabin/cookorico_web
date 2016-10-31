<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Log;

class SellsyController extends Controller
{
    /**
     * Get complete list of services from Sellsy
     * @return mixed
     */
    public function getServices() {
        $client = App::make('SellsyClient');
        $service = $client->getService('Catalogue');
        $response = $service->call('getList',
            ['order' =>
                ['direction' => 'ASC',
                 'order' => 'fullName'],
             'type' => 'service'
            ]);
    }
}