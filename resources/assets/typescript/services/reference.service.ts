import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class ReferenceService {
    allStatesListingUrl = '/states/all';
    allContractTypesListingUrl = '/contract_types/all';
    allJobTypesListingUrl = '/job_types/all';
    allJobNamingsListingUrl = '/job_namings/all';
    allStudyLevelsListingUrl = '/study_levels/all';
    allDiplomasListingUrl = '/diplomas/all';
    getAlertFrequenciesListingUrl = '/alert_frequencies/all';

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
    getAlertFrequencies() {
        let __this = this;

        return this.http.request(__this.getAlertFrequenciesListingUrl);
    }
}