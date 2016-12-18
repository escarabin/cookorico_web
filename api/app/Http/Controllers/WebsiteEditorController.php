<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SeoRoute;
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
            $metaDescription = $trafficDrivenCat['metaDescription'];
            $path = $trafficDrivenCat['path'];
            $jobNamingId = $trafficDrivenCat['jobNamingId'];
            $placeId = $trafficDrivenCat['place']['place_id'];

            $newUrl = '/recherche/'.$placeId.'/'.$jobNamingId.'/0/0';

            $seoRoute = new SeoRoute();
            $seoRoute->title = $title;
            $seoRoute->job_naming_id = $jobNamingId;
            $seoRoute->description = $description;
            $seoRoute->path = $path;
            $seoRoute->redirection_url = $newUrl;
            $seoRoute->meta_description = $metaDescription;
            $seoRoute->save();

            $htaccessLine = PHP_EOL.'Redirect permanent '.$path.' '.$newUrl.''.PHP_EOL;
            $htaccessLine .= '#'.$title.PHP_EOL;
            $htaccessLine .= '#'.preg_replace( "/\r|\n/", "", $description );

            $htaccessCompleteText .= $htaccessLine;
        }

        $file = '../../.htaccess';
        file_put_contents($file, $htaccessCompleteText);
    }

    /**
     * GET seo route infos from redirection url
     */
    public function getSeoRoute(Request $request) {
        $seoRoute = SeoRoute::where('redirection_url', '/#'.$request::get('redirectionUrl'))
                            ->first();

        return $seoRoute;
    }

    public function generateSiteMap() {
        $siteMapXml = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        $staticRoutes = ['profil',
            'recherche',
            'club',
            'conditions-utilisations',
            'conditions-vente',
            'qui-sommes-nous',
            'inscription-candidat',
            'accueil-recruteur',
            'accueil-candidat',
            'accueil',
            'tous-les-emplois',
            'recherche'];

        foreach ($staticRoutes as $staticRoute) {
            $siteMapXml .= "<url>
                                <loc>https://cookorico.com/".$staticRoute."</loc>
                            </url>";
        }

        $jobs = app('App\Http\Controllers\JobController')
            ->getAll(false);

        foreach ($jobs as $job) {
            $siteMapXml .= "<url>
                                <loc>https://cookorico.com/recherche/annonce/".$job->id."</loc>
                            </url>";
        }

        $businesses = app('App\Http\Controllers\BusinessController')
            ->getAll();

        foreach ($businesses as $business) {
            $siteMapXml .= "<url>
                                <loc>https://cookorico.com/etablissement/".$business->id."</loc>
                            </url>";
        }

        $siteMapXml .= '</urlset>';

        /**
         * Save sitemap.xml
         */
        $siteMapFile = env('APP_INSTALL_DIR').'/sitemap.xml';
        file_put_contents($siteMapFile, $siteMapXml);

        return $siteMapXml;
    }
}