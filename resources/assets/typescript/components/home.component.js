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
// Components
var job_search_bar_component_1 = require('./job-search-bar.component');
var job_preview_component_1 = require('./job-preview.component');
var post_preview_component_1 = require('./post-preview.component');
var HomeComponent = (function () {
    function HomeComponent(jobService, postService, clubService) {
        this.jobService = jobService;
        this.postService = postService;
        this.clubService = clubService;
        var __this = this;
        jobService.getAllJobs().subscribe(function (res) {
            __this.jobs = res.json();
        });
        postService.getAllPosts().subscribe(function (res) {
            __this.posts = res.json();
        });
        clubService.getAllClubs().subscribe(function (res) {
            __this.clubs = res.json();
        });
    }
    HomeComponent.prototype.ngOnInit = function (event) {
        this.fitMainDivToWindow();
    };
    HomeComponent.prototype.fitMainDivToWindow = function () {
        if (window.innerHeight > 400) {
            this.innerHeight = window.innerHeight;
        }
        else {
            this.innerHeight = 300;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            providers: [job_service_1.JobService,
                post_service_1.PostService,
                club_service_1.ClubService],
            directives: [router_deprecated_1.RouterLink,
                job_search_bar_component_1.JobSearchBarComponent,
                job_preview_component_1.JobPreviewComponent,
                post_preview_component_1.PostPreviewComponent],
            selector: 'home',
            templateUrl: '../templates/home.component.html',
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService, post_service_1.PostService, club_service_1.ClubService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map