<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Business;
use App\Models\Experience;
use App\Models\Place;
use App\Models\Plan;
use App\Models\Study;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Request;
use Auth;
use Log;
use DB;
use Mail;
use Hash;

use App\Models\Job;
use App\Models\MailTemplate;
use App\Models\Application;
use App\Models\User;

class ImportController extends Controller
{
    public function importDB() {
        /**
         * Set no timeout for execution of this script
         */
        ini_set('max_execution_time', 30000);
        set_time_limit(0);

        /*  $this->importRecruiters();
        $this->importBusinesses();
        $this->importCandidates();
        $this->importJobPosts();
        $this->setPassword();*/
        $this->importApplications();
        // return $oldCandidates;
    }

    public function setPassword() {
        $users = User::all();

        foreach ($users as $user) {
            $user->password = Hash::make('1234');

            $user->save();
        }
    }

    public function importCandidates() {
        $oldCandidates = DB::table('candidats')->get();

        foreach ($oldCandidates as $oldCandidate) {
            $newCandidate = new User();

            $newCandidate->user_type_id = 3;
            $newCandidate->is_active = 1;
            $newCandidate->is_verified = 1;
            $newCandidate->id = $oldCandidate->id_candidat;
            $newCandidate->firstName = $oldCandidate->prenom;
            $newCandidate->lastName = $oldCandidate->nom;
            $newCandidate->civility_id = $oldCandidate->id_civilite;
            $newCandidate->user_status_id = $oldCandidate->id_statut;
            $newCandidate->phone = $oldCandidate->telephone;
            $newCandidate->email = $oldCandidate->email;
            $newCandidate->description = $oldCandidate->description;
            $newCandidate->birthDate = $oldCandidate->date_naissance;
            if ($oldCandidate->id_experience > 0 && $oldCandidate->id_experience < 7) {
                $newCandidate->job_xp_level_id = $oldCandidate->id_experience;
            }
            if ($oldCandidate->id_formation > 0 && $oldCandidate->id_formation < 9) {
                $newCandidate->study_level_id = $oldCandidate->id_formation;
            }
            $newCandidate->alert_frequency_id = $oldCandidate->id_alerte;

            /**
             * Profile picture
             */
            if ($oldCandidate->photo) {
                $newCandidate->profilePictureUrl = "https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/".$oldCandidate->photo;
            }
            else {
                $newCandidate->profilePictureUrl = "https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/_ph_default_detail.png";
            }

            /**
             * Resume
             */
            if ($oldCandidate->cv) {
                $newCandidate->resumeUrl = "https://s3-eu-west-1.amazonaws.com/oechr-resume/".$oldCandidate->cv;
            }

            /**
             * GET place details
             */
            if ($oldCandidate->ville) {
                $placeData = $this->getDetailsFromAddress($oldCandidate->code_postal.','.$oldCandidate->ville);

                /**
                 * We found a corresonding place on Google
                 */
                if ($placeData && array_key_exists('place_id', $placeData)) {

                    $place = app('App\Http\Controllers\PlaceController')
                        ->savePlaceData($placeData);
                    $newCandidate->place_id = $place->id;
                }
            }

            $newCandidate->save();

            /**
             * Job seeking data (everybody is looking for jobs in Bretagne)
             */
            if ($oldCandidate->id_metier) {
                DB::table('job_naming_user')->insert(
                    ['job_naming_id' => $oldCandidate->id_metier,
                        'user_id' => $newCandidate->id,
                        'place_id' => 6]
                );
            }
            if ($oldCandidate->id_metier_bis) {
                DB::table('job_naming_user')->insert(
                    ['job_naming_id' => $oldCandidate->id_metier_bis,
                        'user_id' => $newCandidate->id,
                        'place_id' => 6]
                );
            }
            if ($oldCandidate->id_metier_ter) {
                DB::table('job_naming_user')->insert(
                    ['job_naming_id' => $oldCandidate->id_metier_ter,
                        'user_id' => $newCandidate->id,
                        'place_id' => 6]
                );
            }

            /**
             * Languages data
             */
            if ($oldCandidate->id_langue_1 && $oldCandidate->id_langue_niv_1 != 0) {
                DB::table('language_user')->insert(
                    ['language_id' => $oldCandidate->id_langue_1,
                        'user_id' => $newCandidate->id,
                        'language_level_id' => $oldCandidate->id_langue_niv_1]
                );
            }
            if ($oldCandidate->id_langue_2 && $oldCandidate->id_langue_niv_2 != 0) {
                DB::table('language_user')->insert(
                    ['language_id' => $oldCandidate->id_langue_2,
                        'user_id' => $newCandidate->id,
                        'language_level_id' => $oldCandidate->id_langue_niv_2]
                );
            }
            if ($oldCandidate->id_langue_3 && $oldCandidate->id_langue_niv_3 != 0) {
                DB::table('language_user')->insert(
                    ['language_id' => $oldCandidate->id_langue_3,
                        'user_id' => $newCandidate->id,
                        'language_level_id' => $oldCandidate->id_langue_niv_3]
                );
            }

            /**
             * Experiences
             */
            $oldExperiences = DB::table('candidats_exp')->where('id_candidat', '=', $newCandidate->id)->get();

            foreach ($oldExperiences as $oldExperience) {
                $experience = new Experience();
                $experience->start_date = $oldExperience->date_debut;
                $experience->end_date = $oldExperience->date_fin;
                $experience->description = $oldExperience->description;
                $experience->job_naming_id = $oldExperience->id_metier;
                $experience->user_id = $newCandidate->id;

                /**
                 * Create a place for this experience
                 */
                $expPlace = new Place();
                $expPlace->city = $oldExperience->lieu;
                $expPlace->adress = $oldExperience->etablissement;
                $expPlace->save();

                /**
                 * Create a business for this experience
                 */
                $expBusiness = new Business();
                $expBusiness->title = $oldExperience->etablissement;
                $expBusiness->place_id = $expPlace->id;
                $expBusiness->save();

                $experience->business_id = $expBusiness->id;
                $experience->save();
            }

            /**
             * Formations
             */
            $oldFormations = DB::table('candidats_for')->where('id_candidat', '=', $newCandidate->id)->get();

            foreach ($oldFormations as $oldFormation) {
                $study = new Study();
                $study->start_date = $oldFormation->date_debut;
                $study->end_date = $oldFormation->date_fin;
                $study->description = $oldFormation->description;
                $study->diploma_id = $oldFormation->id_diplome;
                $study->user_id = $newCandidate->id;

                /**
                 * Create a place for this formation
                 */
                $forPlace = new Place();
                $forPlace->city = $oldFormation->lieu;
                $forPlace->adress = $oldFormation->etablissement;
                $forPlace->save();

                /**
                 * Create a business for this formation
                 */
                $forBusiness = new Business();
                $forBusiness->title = $oldFormation->etablissement;
                $forBusiness->place_id = $forPlace->id;
                $forBusiness->save();

                $study->business_id = $forBusiness->id;
                $study->save();
            }
        }
    }

    public function importRecruiters() {
        $oldRecruiters = DB::table('responsables')->get();

        foreach ($oldRecruiters as $oldRecruiter) {
            if (!User::find($oldRecruiter->id_responsable + 100000)) {
                $recruiter = new User();
                $recruiter->is_active = 1;
                $recruiter->is_verified = 1;
                $recruiter->id = $oldRecruiter->id_responsable + 100000;
                $recruiter->user_type_id = 2;
                $recruiter->firstName = $oldRecruiter->prenom;
                $recruiter->lastName = $oldRecruiter->nom;
                $recruiter->email = $oldRecruiter->email;
                $recruiter->civility_id = $oldRecruiter->id_civilite;
                $recruiter->save();
            }
        }
    }

    public function importJobPosts() {
        $oldJobPosts = DB::table('offres')->get();

        foreach ($oldJobPosts as $oldJobPost) {
            if (Business::find($oldJobPost->id_etablissement)
                && User::find($oldJobPost->id_responsable + 100000)) {
                $jobPost = new Job();
                $jobPost->business_id = $oldJobPost->id_etablissement;
                $jobPost->user_id = $oldJobPost->id_responsable + 100000;
                $jobPost->job_naming_id = $oldJobPost->id_metier;
                if ($oldJobPost->id_alerte > 0 && $oldJobPost->id_alerte < 10) {
                    $jobPost->alert_frequency_id = $oldJobPost->id_alerte;
                }
                $jobPost->job_type_id = $oldJobPost->id_type_offre;
                $jobPost->contract_type_id = $oldJobPost->id_contrat;
                if ($oldJobPost->id_niveau > 0 && $oldJobPost->id_niveau < 9) {
                    $jobPost->study_level_id = $oldJobPost->id_niveau;
                }
                if ($oldJobPost->id_formation > 0) {
                    $jobPost->diploma_id = $oldJobPost->id_formation;
                }
                if ($oldJobPost->id_experience > 0 && $oldJobPost->id_experience < 7) {
                    $jobPost->job_xp_level_id = $oldJobPost->id_experience;
                }
                $jobPost->created_at = $oldJobPost->date_creation;
                $jobPost->start_date = $oldJobPost->date_debut;
                $jobPost->end_date = $oldJobPost->date_au;
                $jobPost->week_work_hours = $oldJobPost->temps_travail;
                $jobPost->title = $oldJobPost->titre;
                $jobPost->description = $oldJobPost->description.'<br /><br />'.$oldJobPost->info_comp;
                $jobPost->is_hosting_employee = $oldJobPost->is_loge;
                $jobPost->is_asap = $oldJobPost->is_asap;

                $jobPost->save();

                /**
                 * Languages data
                 */
                if ($oldJobPost->id_langue_1) {
                    DB::table('job_language')->insert(
                        ['language_id' => $oldJobPost->id_langue_1,
                            'job_id' => $jobPost->id]
                    );
                }
                if ($oldJobPost->id_langue_2) {
                    DB::table('job_language')->insert(
                        ['language_id' => $oldJobPost->id_langue_2,
                            'job_id' => $jobPost->id]
                    );
                }
                if ($oldJobPost->id_langue_3) {
                    DB::table('job_language')->insert(
                        ['language_id' => $oldJobPost->id_langue_3,
                            'job_id' => $jobPost->id]
                    );
                }
            }
        }
    }

    public function importBusinesses() {
        $oldBusinesses = DB::table('etablissements')->get();

        foreach ($oldBusinesses as $oldBusiness) {
            $business = new Business();
            $business->id = $oldBusiness->id_etablissement;
            $business->title = $oldBusiness->nom;
            $business->email = $oldBusiness->email;
            $business->phone = $oldBusiness->telephone;
            $business->website = $oldBusiness->site_web;
            $business->description = $oldBusiness->description;

            if ($oldBusiness->id_type_etablissement == 0) {
                $business->business_type_id = 2;
            }
            else {
                $business->business_type_id = $oldBusiness->id_type_etablissement;
            }

            $placeData = $this->getDetailsFromAddress($oldBusiness->adresse1.','.$oldBusiness->ville);

            /**
             * We found a corresonding place on Google for this business
             */
            if ($placeData && array_key_exists('place_id', $placeData)) {
                $place = app('App\Http\Controllers\PlaceController')->savePlaceData($placeData);
                $business->place_id = $place->id;
            }
            else {
                $businessPlace = new Place();
                $businessPlace->city = $oldBusiness->ville;
                $businessPlace->postalCode = $oldBusiness->code_postal;
                $businessPlace->adress = $oldBusiness->adresse1.' '.$oldBusiness->adresse2;
                $businessPlace->save();
                $business->place_id = $businessPlace->id;
            }

            if ($oldBusiness->logo) {
                $business->logo = "https://s3-eu-west-1.amazonaws.com/oechr-business-logo/".$oldBusiness->logo;
            }

            $business->save();

            $businessUserLink = DB::table('groupes')->where('id_etablissement', $oldBusiness->id_etablissement)->first();

            if ($businessUserLink) {
                if (Business::find($businessUserLink->id_etablissement) && User::find($businessUserLink->id_responsable + 100000)) {
                    DB::table('business_user')->insert(
                        ['business_id' => $businessUserLink->id_etablissement,
                            'user_id' => $businessUserLink->id_responsable + 100000]
                    );
                }
            }
        }

        $this->importPlans();
    }

    public function importPlans() {
        $oldPlans = DB::table('abonnements')->get();

        foreach ($oldPlans as $oldPlan) {
            if (Business::find($oldPlan->id_etablissement)) {
                $plan = new Plan();

                if ($oldPlan->id_pack = 7) {
                    $plan->credits = 1;
                }
                else {
                    $plan->credits = $oldPlan->credits;
                }

                $plan->business_id = $oldPlan->id_etablissement;
                $plan->spaces = 5;
                $plan->daily_contacts = 10;
                $plan->daily_remaining_contacts = 10;

                if ($oldPlan->id_pack == 1 || $oldPlan->id_pack == 4) {
                    $plan->pricing_plan_id = 10;
                }
                if ($oldPlan->id_pack == 2 || $oldPlan->id_pack == 5) {
                    $plan->pricing_plan_id = 8;
                }
                if ($oldPlan->id_pack == 3 || $oldPlan->id_pack == 6) {
                    $plan->pricing_plan_id = 6;
                }

                $plan->save();
            }
        }
    }

    public function importApplications() {
        $oldApplications = DB::table('candidatures')->get();

        foreach ($oldApplications as $oldApplication) {
            if (Job::find($oldApplication->id_offre)) {
                $application = new Application();
                $application->created_at = $oldApplication->date_candidature;
                $application->updated_at = $oldApplication->date_candidature;
                $application->job_id = $oldApplication->id_offre;
                $application->status_id = $oldApplication->statut;
                $application->comment = $oldApplication->commentaire;
                $application->user_id = $oldApplication->id_candidat;

                if ($oldApplication->statut == 1) {
                    $application->is_interested = true;
                }
                else if ($oldApplication->statut == 2) {
                    $application->is_rejected = true;
                }

                $application->save();
            }
        }
    }

    public function getDetailsFromAddress($string){
        $string = str_replace (" ", "+", urlencode($string));
        $details_url = "https://maps.googleapis.com/maps/api/geocode/json?address=".$string."&sensor=false&key=AIzaSyDHar3rTVpUcvpFDj88PttAPy85Bk17R18";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $details_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = json_decode(curl_exec($ch), true);

        // If Status Code is ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED or INVALID_REQUEST
        if ($response['status'] != 'OK') {
            return null;
        }

        return $response['results'][0];
    }
}