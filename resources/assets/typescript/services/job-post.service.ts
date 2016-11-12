import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals');

// Models
import { JobPost } from '../models/job-post';

@Injectable()
export class JobPostService {
    createJobPostUrl = appGlobals.apiUrl + "/job-post/create";
    getJobPostUrl = appGlobals.apiUrl + "/job";
    pullUpJobPostUrl = appGlobals.apiUrl + "/job-post/pull-up";

    constructor(private http: Http) {

    }

    /**
     * Create a new job post / Update existing
     * @param jobPost
     * @returns {any}
     */
    save(jobPost: JobPost) {
        let body = JSON.stringify({ jobPost });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.createJobPostUrl, body, options);
    }

    /**
     * Get specific job post
     * @param jobPostId
     * @returns {any}
     */
    get(jobPostId: number) {
        return this.http.request(this.getJobPostUrl + '/' + jobPostId);
    }

    /**
     * Pull up JobPost on top of list
     * @param jobPostId
     */
    pullUpJobPost(jobPostId: number) {
        return this.http.request(this.pullUpJobPostUrl + '/' + jobPostId);
    }
}