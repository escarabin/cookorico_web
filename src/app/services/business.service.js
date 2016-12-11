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
var BusinessService = (function () {
    function BusinessService(http) {
        this.http = http;
        this.createBusinessUrl = globals_1.apiUrl + "/business/create";
        this.getBusinessUrl = globals_1.apiUrl + "/business";
        this.getAllBusinessesUrl = globals_1.apiUrl + "/businesses/all";
        this.detachUserUrl = globals_1.apiUrl + "/business/detach-user";
        this.searchBusinessUrl = globals_1.apiUrl + "/business/search";
        this.attachUserUrl = globals_1.apiUrl + "/business/attach-user";
        this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
    }
    /**
     * Create a new business with its related place
     * @param business
     * @param place
     * @param userId
     * @returns {Observable<Response>}
     */
    BusinessService.prototype.create = function (business, place, userId) {
        var requestBody = JSON.stringify({ business: business, place: place });
        return this.http.post(this.createBusinessUrl + '/' + userId, requestBody, this.postRequestOptions);
    };
    /**
     * List all businesses
     * @returns {Observable<Response>}
     */
    BusinessService.prototype.getAll = function () {
        return this.http.request(this.getAllBusinessesUrl);
    };
    /**
     * Get specific business data from its id
     * @param businessId
     * @returns {Observable<Response>}
     */
    BusinessService.prototype.get = function (businessId) {
        return this.http.get(this.getBusinessUrl + '/' + businessId);
    };
    /**
     * Search for businesses by title
     * @param searchText
     */
    BusinessService.prototype.search = function (searchText) {
        return this.http.get(this.searchBusinessUrl + '/' + searchText);
    };
    /**
     * Attach user to specific business
     * @param userId
     * @param businessId
     */
    BusinessService.prototype.attachUser = function (userId, businessId) {
        return this.http.get(this.attachUserUrl + '/' + userId + '/' + businessId);
    };
    /**
     * Detach user to specific business
     * @param userId
     * @param businessId
     */
    BusinessService.prototype.detachUser = function (userId, businessId) {
        return this.http.get(this.detachUserUrl + '/' + userId + '/' + businessId);
    };
    BusinessService = __decorate([
        core_1.Injectable()
    ], BusinessService);
    return BusinessService;
}());
exports.BusinessService = BusinessService;
