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
var ReferenceService = (function () {
    function ReferenceService(http) {
        this.http = http;
        this.allStatesListingUrl = appGlobals.apiUrl + '/states/all';
        this.allContractTypesListingUrl = appGlobals.apiUrl + '/contract_types/all';
        this.allJobTypesListingUrl = appGlobals.apiUrl + '/job_types/all';
        this.allJobNamingsListingUrl = appGlobals.apiUrl + '/job_namings/all';
        this.allStudyLevelsListingUrl = appGlobals.apiUrl + '/study_levels/all';
        this.allDiplomasListingUrl = appGlobals.apiUrl + '/diplomas/all';
        this.allJobNamingGroupsUrl = appGlobals.apiUrl + '/job_naming_groups/all';
        this.getAlertFrequenciesListingUrl = appGlobals.apiUrl + '/alert_frequencies/all';
        this.getAllBusinessTypesListingUrl = appGlobals.apiUrl + '/business_types/all';
        this.getAllJobXpLevelsUrl = appGlobals.apiUrl + '/job_xp_levels/all';
        this.getAllCivilitiesUrl = appGlobals.apiUrl + '/civilities/all';
    }
    /**
     * Listing all states (régions in fr)
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllStates = function () {
        var __this = this;
        return this.http.request(__this.allStatesListingUrl);
    };
    /**
     * Listing all contract types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllContractTypes = function () {
        var __this = this;
        return this.http.request(__this.allContractTypesListingUrl);
    };
    /**
     * Listing all job types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobTypes = function () {
        var __this = this;
        return this.http.request(__this.allJobTypesListingUrl);
    };
    /**
     * Listing all job namings
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobNamings = function () {
        var __this = this;
        return this.http.request(__this.allJobNamingsListingUrl);
    };
    /**
     * Listing all job naming groups
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobNamingGroups = function () {
        var __this = this;
        return this.http.request(__this.allJobNamingGroupsUrl);
    };
    /**
     * Listing all study levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllStudyLevels = function () {
        var __this = this;
        return this.http.request(__this.allStudyLevelsListingUrl);
    };
    /**
     * Listing all diplomas
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllDiplomas = function () {
        var __this = this;
        return this.http.request(__this.allDiplomasListingUrl);
    };
    /**
     * Listing all possible alert frequencies
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllAlertFrequencies = function () {
        var __this = this;
        return this.http.request(__this.getAlertFrequenciesListingUrl);
    };
    /**
     * Listing all possible business types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllBusinessTypes = function () {
        var __this = this;
        return this.http.request(__this.getAllBusinessTypesListingUrl);
    };
    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobXpLevels = function () {
        var __this = this;
        return this.http.request(__this.getAllJobXpLevelsUrl);
    };
    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllCivilities = function () {
        var __this = this;
        return this.http.request(__this.getAllCivilitiesUrl);
    };
    ReferenceService = __decorate([
        //<==== this one
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReferenceService);
    return ReferenceService;
}());
exports.ReferenceService = ReferenceService;
//# sourceMappingURL=reference.service.js.map