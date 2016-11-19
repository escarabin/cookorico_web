import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class ReferenceService {
    allStatesListingUrl = appGlobals.apiUrl + '/states/all';
    allContractTypesListingUrl = appGlobals.apiUrl + '/contract_types/all';
    allJobTypesListingUrl = appGlobals.apiUrl + '/job_types/all';
    allJobNamingsListingUrl = appGlobals.apiUrl + '/job_namings/all';
    allStudyLevelsListingUrl = appGlobals.apiUrl + '/study_levels/all';
    allDiplomasListingUrl = appGlobals.apiUrl + '/diplomas/all';
    allJobNamingGroupsUrl = appGlobals.apiUrl + '/job_naming_groups/all';
    getAlertFrequenciesListingUrl = appGlobals.apiUrl + '/alert_frequencies/all';
    getAllBusinessTypesListingUrl = appGlobals.apiUrl + '/business_types/all';
    getAllJobXpLevelsUrl = appGlobals.apiUrl + '/job_xp_levels/all';
    getAllCivilitiesUrl = appGlobals.apiUrl + '/civilities/all';
    getAllCandidateStatusesURL = appGlobals.apiUrl + '/candidate-statuses/all';
    getAllLanguagesUrl = appGlobals.apiUrl + '/languages/all';
    getAllLanguageLevelsUrl = appGlobals.apiUrl + '/language-levels/all';

    constructor(private http: Http) {

    }

    /**
     * Listing all different candidate possible statuses
     * @returns {Observable<Response>}
     */
    getAllCandidateStatuses() {
        return this.http.request(this.getAllCandidateStatusesURL);
    }

    /**
     * Listing all states (régions in fr)
     * @returns {Observable<Response>}
     */
    getAllStates() {
        return this.http.request(this.allStatesListingUrl);
    }

    /**
     * Listing all contract types
     * @returns {Observable<Response>}
     */
    getAllContractTypes() {
        return this.http.request(this.allContractTypesListingUrl);
    }

    /**
     * Listing all job types
     * @returns {Observable<Response>}
     */
    getAllJobTypes() {
        return this.http.request(this.allJobTypesListingUrl);
    }

    /**
     * Listing all job namings
     * @returns {Observable<Response>}
     */
    getAllJobNamings() {
        return this.http.request(this.allJobNamingsListingUrl);
    }


    /**
     * Listing all job naming groups
     * @returns {Observable<Response>}
     */
    getAllJobNamingGroups() {
        return this.http.request(this.allJobNamingGroupsUrl);
    }

    /**
     * Listing all study levels
     * @returns {Observable<Response>}
     */
    getAllStudyLevels() {
        return this.http.request(this.allStudyLevelsListingUrl);
    }

    /**
     * Listing all diplomas
     * @returns {Observable<Response>}
     */
    getAllDiplomas() {
        return this.http.request(this.allDiplomasListingUrl);
    }

    /**
     * Listing all possible alert frequencies
     * @returns {Observable<Response>}
     */
    getAllAlertFrequencies() {
        return this.http.request(this.getAlertFrequenciesListingUrl);
    }

    /**
     * Listing all possible business types
     * @returns {Observable<Response>}
     */
    getAllBusinessTypes() {
        return this.http.request(this.getAllBusinessTypesListingUrl);
    }

    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    getAllJobXpLevels() {
        return this.http.request(this.getAllJobXpLevelsUrl);
    }

    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    getAllCivilities() {
        return this.http.request(this.getAllCivilitiesUrl);
    }

    /**
     * Listing all possible languages
     * @returns {Observable<Response>}
     */
    getAllLanguages() {
        return this.http.request(this.getAllLanguagesUrl);
    }

    /**
     * Listing all possible languages
     * @returns {Observable<Response>}
     */
    getAllLanguageLevels() {
        return this.http.request(this.getAllLanguageLevelsUrl);
    }
}