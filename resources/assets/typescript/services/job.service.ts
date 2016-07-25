import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

// Models
import { Application } from './../models/application';

@Injectable()
export class JobService {
    allJobsListingUrl = '/jobs/all';
    showJobListingUrl = '/job/';
    applyJobUrl = '/apply_job';
    searchJobsUrl = '/jobs/search';
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

        return this.http.request(__this.searchJobsUrl + '/' + JSON.stringify({ searchParameters }));
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