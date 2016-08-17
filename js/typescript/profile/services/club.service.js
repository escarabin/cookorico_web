System.register(['@angular/core', '@angular/http', './../../globals'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, appGlobals;
    var ClubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appGlobals_1) {
                appGlobals = appGlobals_1;
            }],
        execute: function() {
            ClubService = (function () {
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
            exports_1("ClubService", ClubService);
        }
    }
});
