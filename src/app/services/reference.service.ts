import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiUrl } from '../globals';

@Injectable()
export class ReferenceService {
    allStatesListingUrl = apiUrl + '/states/all';
    allContractTypesListingUrl = apiUrl + '/contract_types/all';
    allJobTypesListingUrl = apiUrl + '/job_types/all';
    allJobNamingsListingUrl = apiUrl + '/job_namings/all';
    allStudyLevelsListingUrl = apiUrl + '/study_levels/all';
    allDiplomasListingUrl = apiUrl + '/diplomas/all';
    allJobNamingGroupsUrl = apiUrl + '/job_naming_groups/all';
    getAlertFrequenciesListingUrl = apiUrl + '/alert_frequencies/all';
    getAllBusinessTypesListingUrl = apiUrl + '/business_types/all';
    getAllJobXpLevelsUrl = apiUrl + '/job_xp_levels/all';
    getAllCivilitiesUrl = apiUrl + '/civilities/all';
    getAllCandidateStatusesURL = apiUrl + '/candidate-statuses/all';
    getAllLanguagesUrl = apiUrl + '/languages/all';
    getAllLanguageLevelsUrl = apiUrl + '/language-levels/all';

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