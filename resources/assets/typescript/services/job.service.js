"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var JobService = (function () {
    function JobService(http) {
        this.http = http;
        this.allJobsListingUrl = '/jobs/all';
        this.showJobListingUrl = '/job/';
        this.applyJobUrl = '/apply_job';
        this.searchJobsUrl = '/jobs/search';
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    /**
     * Listing all jobs
     * @returns {Observable<Response>}
     */
    JobService.prototype.getAllJobs = function () {
        var __this = this;
        return this.http.request(__this.allJobsListingUrl);
    };
    /**
     * Search jobs regarding parameters
     * @param searchParameters
     * @returns {Observable<Response>}
     */
    JobService.prototype.searchJobs = function (searchParameters) {
        var __this = this;
        return this.http.request(__this.searchJobsUrl + '/' + JSON.stringify({ searchParameters: searchParameters }));
    };
    /**
     * Returns specific job
     * @param jobId
     * @returns {Observable<Response>}
     */
    JobService.prototype.getJob = function (jobId) {
        var __this = this;
        return this.http.request(__this.showJobListingUrl + jobId);
    };
    /**
     * Apply to a specific job
     * @param application
     * @returns {Observable<Response>}
     */
    JobService.prototype.apply = function (application) {
        var __this = this;
        var body = JSON.stringify({ application: application });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(__this.applyJobUrl, body, options);
    };
    JobService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobService);
    return JobService;
}());
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map