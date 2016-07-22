import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class JobService {
    allJobsListingUrl = '/jobs/all';
    showJobListingUrl = '/job/';
    applyJobUrl = '/apply_job';
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
     * Returns specific job
     * @param id
     * @returns {Observable<Response>}
     */
    getJob(jobId) {
        let __this = this;

        return this.http.request(__this.showJobListingUrl + jobId);
    }

    /**
     * Apply to a specific job
     * @param jobId
     * @param comment
     * @returns {Observable<Response>}
     */
    apply(jobId, comment) {
        let __this = this;

        let body = JSON.stringify({ jobId, comment });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(__this.applyJobUrl, body, options);
    }
}