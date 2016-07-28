import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions } from '@angular/http';
import appGlobals = require('./../globals'); //<==== this one

// Models
import { JobPost } from './../models/job-post';

@Injectable()
export class JobPostService {
    createJobPostUrl = appGlobals.apiUrl + "/job-post/create";
    getJobPostUrl = appGlobals.apiUrl + "/job";

    constructor(private http: Http) {

    }

    /**
     * Create a new job post
     * @param jobPost
     * @returns {any}
     */
    create(jobPost: JobPost) {
        let __this = this;

        let body = JSON.stringify({ jobPost });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(__this.createJobPostUrl, body, options);
    }

    /**
     * Get specific job post
     * @param jobPostId
     * @returns {any}
     */
    get(jobPostId) {
        let __this = this;

        return this.http.request(__this.getJobPostUrl + '/' + jobPostId);
    }
}