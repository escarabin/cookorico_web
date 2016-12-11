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
var ClubService = (function () {
    function ClubService(http) {
        this.http = http;
        this.allClubsListingUrl = globals_1.apiUrl + '/clubs/all';
        this.allGroupsListingUrl = globals_1.apiUrl + '/groups/all';
        this.showClubListingUrl = globals_1.apiUrl + '/club';
        this.createClubUrl = globals_1.apiUrl + '/club/create';
        this.detachBusinessFromClubUrl = globals_1.apiUrl + '/club/detach-business';
        this.deleteClubUrl = globals_1.apiUrl + '/club/delete';
        this.attachBusinessToClubUrl = globals_1.apiUrl + '/club/attach-business';
        this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
    }
    /**
     * Listing all clubs
     * @returns {Observable<Response>}
     */
    ClubService.prototype.getAllClubs = function () {
        return this.http.request(this.allClubsListingUrl);
    };
    /**
     * Listing all groups
     * @returns {Observable<Response>}
     */
    ClubService.prototype.getAllGroups = function () {
        return this.http.request(this.allGroupsListingUrl);
    };
    /**
     * Returns specific club
     * @param id
     * @returns {Observable<Response>}
     */
    ClubService.prototype.getClub = function (id) {
        return this.http.request(this.showClubListingUrl + '/' + id);
    };
    /**
     * Create a new club
     * @param club
     * @param isGroup
     * @param groupSpacesAmount
     * @returns {Observable<Response>}
     */
    ClubService.prototype.create = function (club, isGroup, groupSpacesAmount) {
        if (isGroup === void 0) { isGroup = false; }
        if (groupSpacesAmount === void 0) { groupSpacesAmount = 0; }
        var requestBody = JSON.stringify({ club: club, isGroup: isGroup, groupSpacesAmount: groupSpacesAmount });
        return this.http.post(this.createClubUrl, requestBody, this.postRequestOptions);
    };
    /**
     * Detach business from specific club
     * @param clubId
     * @param businessId
     * @returns {Observable<Response>}
     */
    ClubService.prototype.detachBusiness = function (clubId, businessId) {
        return this.http.request(this.detachBusinessFromClubUrl + '/' + clubId + '/' + businessId);
    };
    /**
     * Attach business from specific club
     * @param clubId
     * @param businessId
     * @returns {Observable<Response>}
     */
    ClubService.prototype.attachBusiness = function (clubId, businessId) {
        return this.http.request(this.attachBusinessToClubUrl + '/' + clubId + '/' + businessId);
    };
    /**
     * Delete specific club
     * @param clubId
     * @returns {Observable<Response>}
     */
    ClubService.prototype.deleteClub = function (clubId) {
        return this.http.request(this.deleteClubUrl + '/' + clubId);
    };
    ClubService = __decorate([
        core_1.Injectable()
    ], ClubService);
    return ClubService;
}());
exports.ClubService = ClubService;
