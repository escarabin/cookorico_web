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
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var job_service_1 = require('./../services/job.service');
var post_service_1 = require('./../services/post.service');
var club_service_1 = require('./../services/club.service');
var reference_service_1 = require('./../services/reference.service');
var JobSearchBarComponent = (function () {
    function JobSearchBarComponent(jobService, postService, clubService, referenceService) {
        this.jobService = jobService;
        this.postService = postService;
        this.clubService = clubService;
        this.referenceService = referenceService;
        this.contractTypeId = 0;
        this.jobNamingId = 0;
        this.placeId = 0;
        var __this = this;
        referenceService.getAllStates().subscribe(function (res) {
            __this.places = res.json();
        });
        referenceService.getAllContractTypes().subscribe(function (res) {
            __this.contractTypes = res.json();
        });
        referenceService.getAllJobNamingGroups().subscribe(function (res) {
            __this.jobNamingGroups = res.json();
        });
    }
    JobSearchBarComponent = __decorate([
        core_1.Component({
            providers: [job_service_1.JobService,
                post_service_1.PostService,
                club_service_1.ClubService,
                reference_service_1.ReferenceService],
            directives: [router_deprecated_1.RouterLink],
            selector: 'job-search-bar',
            templateUrl: '../templates/job-search-bar.component.html',
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService, post_service_1.PostService, club_service_1.ClubService, reference_service_1.ReferenceService])
    ], JobSearchBarComponent);
    return JobSearchBarComponent;
}());
exports.JobSearchBarComponent = JobSearchBarComponent;
//# sourceMappingURL=job-search-bar.component.js.map