import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

// Models
import { JobPost } from './../models/job-post';

@Injectable()
export class JobPostService {
    createJobPostUrl = "/job-post/create";
    getJobPostUrl = "/job";

    constructor(private http: Http) {

    }

    /**
     * Create a new job post
     * @param jobPost
     * @returns {any}
     */
    create(jobPost: JobPost) {
        let __this = this;

        return this.http.request(__this.createJobPostUrl + '/' +
                                jobPost.title + '/' +
                                jobPost.description + '/' +
                                jobPost.is_hosting_employee + '/' +
                                jobPost.is_urgent + '/' +
                                jobPost.is_asap + '/' +
                                jobPost.week_work_hours + '/' +
                                jobPost.business_id + '/' +
                                jobPost.job_type_id + '/' +
                                jobPost.job_naming_id + '/' +
                                jobPost.contract_type_id + '/' +
                                jobPost.study_level_id + '/' +
                                jobPost.job_xp_level_id + '/' +
                                jobPost.alert_frequency_id + '/' +
                                jobPost.diploma_id + '/' +
                                jobPost.start_date + '/' +
                                jobPost.end_date);
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