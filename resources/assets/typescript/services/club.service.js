"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var appGlobals = require('./../globals'); //<==== this one
var ClubService = (function () {
    function ClubService(http) {
        this.http = http;
        this.allClubsListingUrl = appGlobals.apiUrl + '/clubs/all';
        this.showClubListingUrl = appGlobals.apiUrl + '/club/';
    }
    /**
     * Listing all clubs
     * @returns {Observable<Response>}
     */
    ClubService.prototype.getAllClubs = function () {
        var __this = this;
        return this.http.request(__this.allClubsListingUrl);
    };
    /**
     * Returns specific club
     * @param id
     */
    ClubService.prototype.getClub = function (clubId) {
        var __this = this;
        return this.http.request(__this.showClubListingUrl + clubId);
    };
    ClubService = __decorate([
        //<==== this one
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClubService);
    return ClubService;
}());
exports.ClubService = ClubService;
//# sourceMappingURL=club.service.js.map