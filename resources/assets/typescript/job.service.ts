import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class JobService {
    allJobsListingUrl = '/jobs/all';
    showJobListingUrl = '/job/';
    applyJobUrl = '/job/apply/';
    jobId: number;

    constructor(private http: Http) {

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
     * @returns {Observable<Response>}
     */
    apply(jobId) {
        let __this = this;

        return this.http.request(__this.applyJobUrl + jobId);
    }
}