import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { apiUrl } from '../globals';

@Injectable()
export class PlanService {
    savePaymentUrl = apiUrl + '/plan/payment/save';
    getAllPlansUrl = apiUrl + '/plans/all';
    createPlanUrl = apiUrl + '/plan/create';
    searchByEmailUrl = apiUrl + '/plans/search';
    deletePlanUrl = apiUrl + '/plan/delete';
    updatePlanUrl = apiUrl + '/plan/update';
    postId: number;
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Save specific payment after validation
     * @returns {Observable<Response>}
     */
    savePayment(service: Object) {
        let requestBody = JSON.stringify({ service });

        return this.http.post(this.savePaymentUrl, requestBody, this.postRequestOptions);
    }

    /**
     * GET a listing of all exisiting plans
     * @returns {Observable<Response>}
     */
    getAll() {
        return this.http.get(this.getAllPlansUrl);
    }


    /**
     * Search for plans with params
     * @param searchId
     * @param searchName
     * @param searchEmail
     * @returns {Observable<Response>}
     */
    search(searchId: string, searchName: string, searchEmail: string) {
        return this.http.get(this.searchByEmailUrl + '/' + searchId + '/' + searchName + '/' + searchEmail);
    }

    /**
     * Create new Plan
     * @param planEmail
     * @param planCredits
     * @param planContacts
     * @param planSpaces
     * @param planPullUpPost
     * @param planIsUnlimited
     * @param planEndsAt
     * @returns {Observable<Response>}
     */
    create(planEmail: string,
           planCredits: number,
           planContacts: number,
           planSpaces: number,
           planPullUpPost: number,
           planIsUnlimited: boolean,
           planEndsAt: boolean) {
        let requestBody = JSON.stringify({  planEmail,
                                            planCredits,
                                            planContacts,
                                            planSpaces,
                                            planPullUpPost,
                                            planIsUnlimited,
                                            planEndsAt });
        return this.http.post(this.createPlanUrl, requestBody, this.postRequestOptions);
    }


    /**
     * Create new Plan
     * @param planId
     * @param planCredits
     * @param planContacts
     * @param planSpaces
     * @param planPullUpPost
     * @param planDuration
     * @param planIsUnlimited
     * @param planEndsAt
     * @returns {Observable<Response>}
     */
    update(planId: number,
           planCredits: number,
           planContacts: number,
           planSpaces: number,
           planPullUpPost: number,
           planDuration: number,
           planIsUnlimited: boolean,
           planEndsAt: string) {

        if (planIsUnlimited) {
            planCredits = -1;
        }
        console.log('plan ends at ' + planEndsAt);

        let requestBody = JSON.stringify({ planCredits,
            planContacts,
            planSpaces,
            planPullUpPost,
            planDuration,
            planIsUnlimited,
            planEndsAt });
        return this.http.post(this.updatePlanUrl + '/' + planId, requestBody, this.postRequestOptions);
    }

    /**
     * Delete specific plan from it's id
     * @param planId
     */
    deletePlan(planId: number) {
        return this.http.get(this.deletePlanUrl + '/' + planId);
    }
}