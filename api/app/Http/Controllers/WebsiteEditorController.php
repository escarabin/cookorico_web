<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use Log;

class WebsiteEditorController extends Controller
{
    /**
     * Get traffic driven categories listing
     */
    public function getTrafficDrivenCats() {
        $seoRoutes = file_get_contents('../../.htaccess');
        $seoRoutes = explode("#SEOREDIRECTIONS", $seoRoutes)[1];
        $seoRoutes = explode("Redirect permanent", $seoRoutes);

        /**
         * Remove first line which is blank
         */
        unset($seoRoutes[0]);

        return $seoRoutes;
    }

    /**
     * Write new traffic driven categories to .htaccess
     * @param $request
     */
    public function saveTrafficDrivenCats(Request $request) {
        $trafficDrivenCats = $request::get('trafficDrivenCats');

        $htaccessCompleteText = 'RewriteEngine on'.PHP_EOL.
                                'RewriteCond %{REQUEST_FILENAME} !-d'.PHP_EOL.
                                'RewriteCond %{REQUEST_FILENAME} !-f'.PHP_EOL.
                                'RewriteRule . index.html [L]'.PHP_EOL.
                                '#SEOREDIRECTIONS';

        /**
            Create .htaccess redirection line for each traffic driven cats
        */
        foreach ($trafficDrivenCats as $trafficDrivenCat) {
            $title = $trafficDrivenCat['title'];
            $description = $trafficDrivenCat['description'];
            $path = $trafficDrivenCat['path'];
            $jobNamingId = $trafficDrivenCat['jobNamingId'];
            $placeId = $trafficDrivenCat['place']['place_id'];

            $htaccessLine = PHP_EOL.'Redirect permanent '.$path.' /recherche/'.$placeId.'/'.$jobNamingId.'/0/0'.PHP_EOL;
            $htaccessLine .= '#'.$title.PHP_EOL;
            $htaccessLine .= '#'.$description;

            $htaccessCompleteText .= $htaccessLine;
        }

        $file = '../../.htaccess';
        file_put_contents($file, $htaccessCompleteText);
    }
}