import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { Application } from '../models/application';

@Injectable()
export class JobService {
    allJobsListingUrl = appGlobals.apiUrl + '/jobs/all';
    showJobListingUrl = appGlobals.apiUrl + '/job/';
    applyJobUrl = appGlobals.apiUrl + '/apply_job';
    searchJobsUrl = appGlobals.apiUrl + '/jobs/search';
    jobId: number;
    user: any;

    constructor(private http: Http) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * Listing all jobs
     * @returns {Observable<Response>}
     */
    getAllJobs() {
        let __this = this;

        return this.http.request(__this.allJobsListingUrl);
    }

    /**
     * Search jobs regarding parameters
     * @param searchParameters
     * @returns {Observable<Response>}
     */
    searchJobs(searchParameters: any) {
        let __this = this;

        console.log('searching for jobs', searchParameters);

        let body = JSON.stringify({ searchParameters });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(__this.searchJobsUrl, body, options);
    }

    /**
     * Returns specific job
     * @param jobId
     * @returns {Observable<Response>}
     */
    getJob(jobId) {
        let __this = this;

        return this.http.request(__this.showJobListingUrl + jobId);
    }

    /**
     * Apply to a specific job
     * @param application
     * @returns {Observable<Response>}
     */
    apply(application: Application) {
        let __this = this;

        let body = JSON.stringify({ application });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(__this.applyJobUrl, body, options);
    }
}