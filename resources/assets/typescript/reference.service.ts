import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class ReferenceService {
    allStatesListingUrl = '/states/all';
    allContractTypesListingUrl = '/contract_types/all';
    allJobTypesListingUrl = '/job_types/all';

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
}