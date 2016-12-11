"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var globals_1 = require('../globals');
var globals_2 = require('../globals');
var PlanService = (function () {
    function PlanService(http) {
        this.http = http;
        this.savePaymentUrl = globals_1.apiUrl + '/plan/payment/save';
        this.getAllPlansUrl = globals_1.apiUrl + '/plans/all';
        this.getAllPricingPlansUrl = globals_1.apiUrl + '/pricing-plans/all';
        this.createPlanUrl = globals_1.apiUrl + '/plan/create';
        this.searchByEmailUrl = globals_1.apiUrl + '/plans/search';
        this.deletePlanUrl = globals_1.apiUrl + '/plan/delete';
        this.updatePlanUrl = globals_1.apiUrl + '/plan/update';
        this.doWebPaymentUrl = globals_2.paymentUrl;
        this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
    }
    /**
     * Save specific payment after validation
     * @returns {Observable<Response>}
     */
    PlanService.prototype.savePayment = function (service) {
        var requestBody = JSON.stringify({ service: service });
        return this.http.post(this.savePaymentUrl, requestBody, this.postRequestOptions);
    };
    /**
     * GET a listing of all exisiting plans
     * @returns {Observable<Response>}
     */
    PlanService.prototype.getAll = function () {
        return this.http.get(this.getAllPlansUrl);
    };
    /**
     * GET a listing of all possible pricing plans
     * @returns {Observable<Response>}
     */
    PlanService.prototype.getAllPricingPlans = function () {
        return this.http.get(this.getAllPricingPlansUrl);
    };
    /**
     * Search for plans with params
     * @param searchId
     * @param searchName
     * @param searchEmail
     * @returns {Observable<Response>}
     */
    PlanService.prototype.search = function (searchId, searchName, searchEmail) {
        if (searchId == '') {
            searchId = 'undefined';
        }
        if (searchName == '') {
            searchName = 'undefined';
        }
        if (searchEmail == '') {
            searchEmail = 'undefined';
        }
        return this.http.get(this.searchByEmailUrl + '/' + searchId + '/' + searchName + '/' + searchEmail);
    };
    /**
     * Create new Plan
     * @param planEmail
     * @param planCredits
     * @param planContacts
     * @param planSpaces
     * @param planPullUpPost
     * @param planIsUnlimited
     * @param planEndsAt
     * @param planPricingId
     * @returns {Observable<Response>}
     */
    PlanService.prototype.create = function (planEmail, planCredits, planContacts, planSpaces, planPullUpPost, planIsUnlimited, planEndsAt, planPricingId) {
        var requestBody = JSON.stringify({ planEmail: planEmail,
            planCredits: planCredits,
            planContacts: planContacts,
            planSpaces: planSpaces,
            planPullUpPost: planPullUpPost,
            planIsUnlimited: planIsUnlimited,
            planEndsAt: planEndsAt,
            planPricingId: planPricingId });
        return this.http.post(this.createPlanUrl, requestBody, this.postRequestOptions);
    };
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
     * @param planPricingId
     * @returns {Observable<Response>}
     */
    PlanService.prototype.update = function (planId, planCredits, planContacts, planSpaces, planPullUpPost, planDuration, planIsUnlimited, planEndsAt, planPricingId) {
        if (planIsUnlimited) {
            planCredits = -1;
        }
        var requestBody = JSON.stringify({ planCredits: planCredits,
            planContacts: planContacts,
            planSpaces: planSpaces,
            planPullUpPost: planPullUpPost,
            planDuration: planDuration,
            planIsUnlimited: planIsUnlimited,
            planEndsAt: planEndsAt,
            planPricingId: planPricingId });
        return this.http.post(this.updatePlanUrl + '/' + planId, requestBody, this.postRequestOptions);
    };
    /**
     * Delete specific plan from it's id
     * @param planId
     */
    PlanService.prototype.deletePlan = function (planId) {
        return this.http.get(this.deletePlanUrl + '/' + planId);
    };
    PlanService = __decorate([
        core_1.Injectable()
    ], PlanService);
    return PlanService;
}());
exports.PlanService = PlanService;
