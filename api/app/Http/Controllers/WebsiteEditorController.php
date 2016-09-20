<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
     */
    public function saveTrafficDrivenCats() {

    }
}