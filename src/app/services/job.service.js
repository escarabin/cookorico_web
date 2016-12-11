"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var globals_1 = require('../globals');
var JobService = (function () {
    function JobService(http) {
        this.http = http;
        this.allJobsListingUrl = globals_1.apiUrl + '/jobs/all';
        this.showJobListingUrl = globals_1.apiUrl + '/job/';
        this.jobsFromBusinessUrl = globals_1.apiUrl + '/business/jobs/';
        this.jobFromClubUrl = globals_1.apiUrl + '/club/jobs';
        this.applyJobUrl = globals_1.apiUrl + '/apply_job';
        this.searchJobsUrl = globals_1.apiUrl + '/jobs/search';
        this.deactivateJobPostUrl = globals_1.apiUrl + '/job-post/deactivate';
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    /**
     * Listing all jobs
     * @param includeExpiredJobs
     * @returns {Observable<Response>}
     */
    JobService.prototype.getAllJobs = function (includeExpiredJobs) {
        return this.http.request(this.allJobsListingUrl + '/' + includeExpiredJobs);
    };
    /**
     * Search jobs regarding parameters
     * @param searchParameters
     * @returns {Observable<Response>}
     */
    JobService.prototype.searchJobs = function (searchParameters) {
        var body = JSON.stringify({ searchParameters: searchParameters });
        console.log('[job.service] searching for jobs', searchParameters);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.searchJobsUrl, body, options);
    };
    /**
     * Returns specific job
     * @param jobId
     * @returns {Observable<Response>}
     */
    JobService.prototype.getJob = function (jobId) {
        return this.http.request(this.showJobListingUrl + jobId);
    };
    /**
     * List jobs from businessId
     * @param businessId
     * @returns {Observable<Response>}
     */
    JobService.prototype.getJobsFromBusiness = function (businessId) {
        return this.http.get(this.jobsFromBusinessUrl + businessId);
    };
    /**
     * List jobs from clubId
     * @param clubId
     * @returns {Observable<Response>}
     */
    JobService.prototype.getJobsFromClub = function (clubId) {
        return this.http.get(this.jobFromClubUrl + '/' + clubId);
    };
    /**
     * Apply to a specific job
     * @param application
     * @param userId
     * @returns {Observable<Response>}
     */
    JobService.prototype.apply = function (application, userId) {
        var body = JSON.stringify({ application: application });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.applyJobUrl + '/' + userId, body, options);
    };
    /**
     * Flag job post as inactive
     * @param jobId
     * @returns {Observable<Response>}
     */
    JobService.prototype.deactivateJobPost = function (jobId) {
        return this.http.get(this.deactivateJobPostUrl + '/' + jobId);
    };
    JobService = __decorate([
        core_1.Injectable()
    ], JobService);
    return JobService;
}());
exports.JobService = JobService;
