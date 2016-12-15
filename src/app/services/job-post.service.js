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
var JobPostService = (function () {
    function JobPostService(http) {
        this.http = http;
        this.createJobPostUrl = globals_1.apiUrl + "/job-post/create";
        this.getJobPostUrl = globals_1.apiUrl + "/job";
        this.pullUpJobPostUrl = globals_1.apiUrl + "/job-post/pull-up";
        this.deactivateJobPostUrl = globals_1.apiUrl + "/job-post/deactivate";
        this.activateJobPostUrl = globals_1.apiUrl + "/job-post/activate";
    }
    /**
     * Create a new job post / Update existing
     * @param jobPost
     * @param userId
     * @returns {any}
     */
    JobPostService.prototype.save = function (jobPost, userId) {
        var body = JSON.stringify({ jobPost: jobPost });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.createJobPostUrl + '/' + userId, body, options);
    };
    /**
     * Get specific job post
     * @param jobPostId
     * @returns {any}
     */
    JobPostService.prototype.get = function (jobPostId) {
        return this.http.request(this.getJobPostUrl + '/' + jobPostId);
    };
    /**
     * Pull up JobPost on top of list
     * @param jobPostId
     */
    JobPostService.prototype.pullUpJobPost = function (jobPostId) {
        return this.http.request(this.pullUpJobPostUrl + '/' + jobPostId);
    };
    /**
     * Deactivate specific job post
     * @param jobPostId
     */
    JobPostService.prototype.deactivate = function (jobPostId) {
        return this.http.request(this.deactivateJobPostUrl + '/' + jobPostId);
    };
    /**
     * Activate specific job post
     * @param jobPostId
     */
    JobPostService.prototype.activate = function (jobPostId) {
        return this.http.request(this.activateJobPostUrl + '/' + jobPostId);
    };
    JobPostService = __decorate([
        core_1.Injectable()
    ], JobPostService);
    return JobPostService;
}());
exports.JobPostService = JobPostService;
