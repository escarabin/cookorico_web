"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var globals_1 = require('../globals');
var ReferenceService = (function () {
    function ReferenceService(http) {
        this.http = http;
        this.allStatesListingUrl = globals_1.apiUrl + '/states/all';
        this.allContractTypesListingUrl = globals_1.apiUrl + '/contract_types/all';
        this.allJobTypesListingUrl = globals_1.apiUrl + '/job_types/all';
        this.allJobNamingsListingUrl = globals_1.apiUrl + '/job_namings/all';
        this.allStudyLevelsListingUrl = globals_1.apiUrl + '/study_levels/all';
        this.allDiplomasListingUrl = globals_1.apiUrl + '/diplomas/all';
        this.allJobNamingGroupsUrl = globals_1.apiUrl + '/job_naming_groups/all';
        this.getAlertFrequenciesListingUrl = globals_1.apiUrl + '/alert_frequencies/all';
        this.getAllBusinessTypesListingUrl = globals_1.apiUrl + '/business_types/all';
        this.getAllJobXpLevelsUrl = globals_1.apiUrl + '/job_xp_levels/all';
        this.getAllCivilitiesUrl = globals_1.apiUrl + '/civilities/all';
        this.getAllCandidateStatusesURL = globals_1.apiUrl + '/candidate-statuses/all';
        this.getAllLanguagesUrl = globals_1.apiUrl + '/languages/all';
        this.getAllLanguageLevelsUrl = globals_1.apiUrl + '/language-levels/all';
    }
    /**
     * Listing all different candidate possible statuses
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllCandidateStatuses = function () {
        return this.http.request(this.getAllCandidateStatusesURL);
    };
    /**
     * Listing all states (régions in fr)
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllStates = function () {
        return this.http.request(this.allStatesListingUrl);
    };
    /**
     * Listing all contract types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllContractTypes = function () {
        return this.http.request(this.allContractTypesListingUrl);
    };
    /**
     * Listing all job types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobTypes = function () {
        return this.http.request(this.allJobTypesListingUrl);
    };
    /**
     * Listing all job namings
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobNamings = function () {
        return this.http.request(this.allJobNamingsListingUrl);
    };
    /**
     * Listing all job naming groups
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobNamingGroups = function () {
        return this.http.request(this.allJobNamingGroupsUrl);
    };
    /**
     * Listing all study levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllStudyLevels = function () {
        return this.http.request(this.allStudyLevelsListingUrl);
    };
    /**
     * Listing all diplomas
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllDiplomas = function () {
        return this.http.request(this.allDiplomasListingUrl);
    };
    /**
     * Listing all possible alert frequencies
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllAlertFrequencies = function () {
        return this.http.request(this.getAlertFrequenciesListingUrl);
    };
    /**
     * Listing all possible business types
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllBusinessTypes = function () {
        return this.http.request(this.getAllBusinessTypesListingUrl);
    };
    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllJobXpLevels = function () {
        return this.http.request(this.getAllJobXpLevelsUrl);
    };
    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllCivilities = function () {
        return this.http.request(this.getAllCivilitiesUrl);
    };
    /**
     * Listing all possible languages
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllLanguages = function () {
        return this.http.request(this.getAllLanguagesUrl);
    };
    /**
     * Listing all possible languages
     * @returns {Observable<Response>}
     */
    ReferenceService.prototype.getAllLanguageLevels = function () {
        return this.http.request(this.getAllLanguageLevelsUrl);
    };
    ReferenceService = __decorate([
        core_1.Injectable()
    ], ReferenceService);
    return ReferenceService;
}());
exports.ReferenceService = ReferenceService;
