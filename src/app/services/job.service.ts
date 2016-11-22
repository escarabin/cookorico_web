import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import { apiUrl } from '../globals';

// Models
import { Application } from '../models/application';

@Injectable()
export class JobService {
    allJobsListingUrl = apiUrl + '/jobs/all';
    showJobListingUrl = apiUrl + '/job/';
    jobsFromBusinessUrl = apiUrl + '/business/jobs/';
    jobFromClubUrl = apiUrl + '/club/jobs';
    applyJobUrl = apiUrl + '/apply_job';
    searchJobsUrl = apiUrl + '/jobs/search';
    deactivateJobPostUrl = apiUrl + '/job-post/deactivate';
    jobId: number;
    user: any;

    constructor(private http: Http) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * Listing all jobs
     * @param includeExpiredJobs
     * @returns {Observable<Response>}
     */
    getAllJobs(includeExpiredJobs?: boolean) {
        return this.http.request(this.allJobsListingUrl + '/' + includeExpiredJobs);
    }

    /**
     * Search jobs regarding parameters
     * @param searchParameters
     * @returns {Observable<Response>}
     */
    searchJobs(searchParameters: any) {
        let body = JSON.stringify({ searchParameters });

        console.log('[job.service] searching for jobs', searchParameters);

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
     * List jobs from clubId
     * @param clubId
     * @returns {Observable<Response>}
     */
    getJobsFromClub(clubId: number) {
        return this.http.get(this.jobFromClubUrl + '/' + clubId);
    }

    /**
     * Apply to a specific job
     * @param application
     * @param userId
     * @returns {Observable<Response>}
     */
    apply(application: Application, userId?: number) {
        let body = JSON.stringify({ application });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.applyJobUrl + '/' + userId, body, options);
    }

    /**
     * Flag job post as inactive
     * @param jobId
     * @returns {Observable<Response>}
     */
    deactivateJobPost(jobId: number) {
        return this.http.get(this.deactivateJobPostUrl + '/' + jobId);
    }
}