System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var JobPostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JobPostService = (function () {
                function JobPostService(http) {
                    this.http = http;
                    this.createJobPostUrl = "/job-post/create";
                    this.getJobPostUrl = "/job";
                }
                /**
                 * Create a new job post
                 * @param jobPost
                 * @returns {any}
                 */
                JobPostService.prototype.create = function (jobPost) {
                    var __this = this;
                    var body = JSON.stringify({ jobPost: jobPost });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(__this.createJobPostUrl, body, options);
                };
                /**
                 * Get specific job post
                 * @param jobPostId
                 * @returns {any}
                 */
                JobPostService.prototype.get = function (jobPostId) {
                    var __this = this;
                    return this.http.request(__this.getJobPostUrl + '/' + jobPostId);
                };
                JobPostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JobPostService);
                return JobPostService;
            }());
            exports_1("JobPostService", JobPostService);
        }
    }
});
