import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { Application } from '../models/application';

@Injectable()
export class JobService {
    allJobsListingUrl = appGlobals.apiUrl + '/jobs/all';
    showJobListingUrl = appGlobals.apiUrl + '/job/';
    jobsFromBusinessUrl = appGlobals.apiUrl + '/business/jobs/';
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
        return this.http.request(this.allJobsListingUrl);
    }

    /**
     * Search jobs regarding parameters
     * @param searchParameters
     * @returns {Observable<Response>}
     */
    searchJobs(searchParameters: any) {
        let body = JSON.stringify({ searchParameters });

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.searchJobsUrl, body, options);
    }

    /**
     * Returns specific job
     * @param jobId
     * @returns {Observable<Response>}
     */
    getJob(jobId: number) {
        return this.http.request(this.showJobListingUrl + jobId);
    }

    /**
     * List jobs from businessId
     * @param businessId
     * @returns {Observable<Response>}
     */
    getJobsFromBusiness(businessId: number) {
        return this.http.get(this.jobsFromBusinessUrl + businessId);
    }

    /**
     * Apply to a specific job
     * @param application
     * @returns {Observable<Response>}
     */
    apply(application: Application) {
        let body = JSON.stringify({ application });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.applyJobUrl, body, options);
    }
}