<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Models\Plan;
use App\Models\Business;
use Log;

class PlanController extends Controller
{
    /**
     * GET all existing plans
     * @return mixed
     */
    public function getAll() {
        $plans = Plan::all()->load('pricingPlan', 'user', 'business');

        return $plans;
    }

    /**
     * GET all existing from businesses by email
     * @param $searchId
     * @param $searchName
     * @param $searchEmail
     * @return mixed
     */
    public function search($searchId = null, $searchName = null, $searchEmail = null) {
        $plans = array();

        if ($searchId != "undefined") {
            $business = Business::find($searchId);

            $plans = $business->plans->load('business');
        }
        if ($searchName != "undefined") {
            $businesses = Business::where('name', 'LIKE', '%'.$searchName.'%')->get()->load('plans');

            foreach ($businesses as $business) {
                if ($business->plans) {
                    $plans[] = $business->plans->load('business');
                }
            }
        }
        if ($searchEmail != "undefined") {
            $businesses = Business::where('email', 'LIKE', '%'.$searchEmail.'%')->get()->load('plans');

            foreach ($businesses as $business) {
                if ($business->plans) {
                    $plans[] = $business->plans->load('business');
                }
            }
        }

        return $plans;
    }

    /**
     * Create new plan
     * @param Request $request
     * @return Plan
     */
    public function create(Request $request) {
        $planData = $request::all();

        $business = Business::where('email', $planData['planEmail'])->first();

        $plan = new Plan();
        $plan->credits = $planData['planCredits'];
        $plan->daily_contacts = $planData['planContacts'];
        $plan->daily_remaining_contacts = $planData['planContacts'];
        $plan->business_id = $business->id;
        $plan->spaces = $planData['planPullUpPost'];
        $plan->pull_up_credits = $planData['planPullUpPost'];
        $plan->is_unlimited = $planData['planIsUnlimited'];
        $plan->ends_at = $planData['planEndsAt'];
        if ($planData['planIsUnlimited']) {
            $plan->duration = 12;
        }

        $plan->save();

        return $plan;
    }

    /**
     * Update exisiting plan
     * @param Request $request
     * @param $planId
     */
    public function update(Request $request, $planId) {
        $plan = Plan::find($planId);
        $newPlanData = $request::all();
        Log::info($newPlanData);

        $plan->credits = $newPlanData['planCredits'];
        $plan->daily_contacts = $newPlanData['planContacts'];
        $plan->daily_remaining_contacts = $newPlanData['planContacts'];
        $plan->spaces = $newPlanData['planSpaces'];
        $plan->pull_up_credits = $newPlanData['planPullUpPost'];
        $plan->is_unlimited = $newPlanData['planIsUnlimited'];
        $plan->ends_at = $newPlanData['planEndsAt'];

        $plan->save();

        return $plan;
    }

    /**
     * Delete specific plan
     * @param $planId
     */
    public function delete($planId) {
        $plan = Plan::find($planId);

        $plan->delete();

        return $plan;
    }
}