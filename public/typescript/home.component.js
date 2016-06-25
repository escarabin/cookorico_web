System.register(['@angular/core', '@angular/router-deprecated', './job.service', './post.service', './club.service', './reference.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_service_1, post_service_1, club_service_1, reference_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (club_service_1_1) {
                club_service_1 = club_service_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(jobService, postService, clubService, referenceService) {
                    this.jobService = jobService;
                    this.postService = postService;
                    this.clubService = clubService;
                    this.referenceService = referenceService;
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
                    referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                }
                HomeComponent.prototype.logVars = function () {
                    console.log(this.contractTypeId, this.jobNamingId, this.stateId);
                };
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
                            club_service_1.ClubService,
                            reference_service_1.ReferenceService],
                        directives: [router_deprecated_1.RouterLink],
                        selector: 'home',
                        templateUrl: '../templates/home.component.html',
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService, post_service_1.PostService, club_service_1.ClubService, reference_service_1.ReferenceService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
