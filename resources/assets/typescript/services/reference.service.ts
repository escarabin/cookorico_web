import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import appGlobals = require('./../globals'); //<==== this one

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

    constructor(private http: Http) {

    }

    /**
     * Listing all states (régions in fr)
     * @returns {Observable<Response>}
     */
    getAllStates() {
        let __this = this;

        return this.http.request(__this.allStatesListingUrl);
    }

    /**
     * Listing all contract types
     * @returns {Observable<Response>}
     */
    getAllContractTypes() {
        let __this = this;

        return this.http.request(__this.allContractTypesListingUrl);
    }

    /**
     * Listing all job types
     * @returns {Observable<Response>}
     */
    getAllJobTypes() {
        let __this = this;

        return this.http.request(__this.allJobTypesListingUrl);
    }

    /**
     * Listing all job namings
     * @returns {Observable<Response>}
     */
    getAllJobNamings() {
        let __this = this;

        return this.http.request(__this.allJobNamingsListingUrl);
    }


    /**
     * Listing all job naming groups
     * @returns {Observable<Response>}
     */
    getAllJobNamingGroups() {
        let __this = this;

        return this.http.request(__this.allJobNamingGroupsUrl);
    }

    /**
     * Listing all study levels
     * @returns {Observable<Response>}
     */
    getAllStudyLevels() {
        let __this = this;

        return this.http.request(__this.allStudyLevelsListingUrl);
    }

    /**
     * Listing all diplomas
     * @returns {Observable<Response>}
     */
    getAllDiplomas() {
        let __this = this;

        return this.http.request(__this.allDiplomasListingUrl);
    }

    /**
     * Listing all possible alert frequencies
     * @returns {Observable<Response>}
     */
    getAllAlertFrequencies() {
        let __this = this;

        return this.http.request(__this.getAlertFrequenciesListingUrl);
    }

    /**
     * Listing all possible business types
     * @returns {Observable<Response>}
     */
    getAllBusinessTypes() {
        let __this = this;

        return this.http.request(__this.getAllBusinessTypesListingUrl);
    }

    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    getAllJobXpLevels() {
        let __this = this;

        return this.http.request(__this.getAllJobXpLevelsUrl);
    }

    /**
     * Listing all possible job xp levels
     * @returns {Observable<Response>}
     */
    getAllCivilities() {
        let __this = this;

        return this.http.request(__this.getAllCivilitiesUrl);
    }
}