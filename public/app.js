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
    var JobService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JobService = (function () {
                function JobService(http) {
                    this.http = http;
                    this.allJobsListingUrl = '/jobs/all';
                    this.showJobListingUrl = '/job/';
                    this.applyJobUrl = '/job/apply/';
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
                 * Returns specific job
                 * @param id
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.getJob = function (jobId) {
                    var __this = this;
                    return this.http.request(__this.showJobListingUrl + jobId);
                };
                /**
                 * Apply to a specific job
                 * @param jobId
                 * @returns {Observable<Response>}
                 */
                JobService.prototype.apply = function (jobId, comment) {
                    var __this = this;
                    return this.http.request(__this.applyJobUrl + jobId + '/' + comment);
                };
                JobService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JobService);
                return JobService;
            }());
            exports_1("JobService", JobService);
        }
    }
});

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
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(http) {
                    this.http = http;
                    this.allPostsListingUrl = '/posts/all';
                    this.showPostListingUrl = '/post/';
                }
                /**
                 * Listing all posts
                 * @returns {Observable<Response>}
                 */
                PostService.prototype.getAllPosts = function () {
                    var __this = this;
                    return this.http.request(__this.allPostsListingUrl);
                };
                /**
                 * Returns specific post
                 * @param id
                 */
                PostService.prototype.getPost = function (postId) {
                    var __this = this;
                    return this.http.request(__this.showPostListingUrl + postId);
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});

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
    var ClubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ClubService = (function () {
                function ClubService(http) {
                    this.http = http;
                    this.allClubsListingUrl = '/clubs/all';
                    this.showClubListingUrl = '/club/';
                }
                /**
                 * Listing all clubs
                 * @returns {Observable<Response>}
                 */
                ClubService.prototype.getAllClubs = function () {
                    var __this = this;
                    return this.http.request(__this.allClubsListingUrl);
                };
                /**
                 * Returns specific club
                 * @param id
                 */
                ClubService.prototype.getClub = function (clubId) {
                    var __this = this;
                    return this.http.request(__this.showClubListingUrl + clubId);
                };
                ClubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClubService);
                return ClubService;
            }());
            exports_1("ClubService", ClubService);
        }
    }
});

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
    var ReferenceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ReferenceService = (function () {
                function ReferenceService(http) {
                    this.http = http;
                    this.allStatesListingUrl = '/states/all';
                    this.allContractTypesListingUrl = '/contract_types/all';
                    this.allJobTypesListingUrl = '/job_types/all';
                    this.allJobNamingsListingUrl = '/job_namings/all';
                    this.allStudyLevelsListingUrl = '/study_levels/all';
                    this.allDiplomasListingUrl = '/diplomas/all';
                    this.allJobNamingGroupsUrl = '/job_naming_groups/all';
                    this.getAlertFrequenciesListingUrl = '/alert_frequencies/all';
                    this.getAllBusinessTypesListingUrl = '/business_types/all';
                    this.getAllJobXpLevelsUrl = '/job_xp_levels/all';
                }
                /**
                 * Listing all states (régions in fr)
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllStates = function () {
                    var __this = this;
                    return this.http.request(__this.allStatesListingUrl);
                };
                /**
                 * Listing all contract types
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllContractTypes = function () {
                    var __this = this;
                    return this.http.request(__this.allContractTypesListingUrl);
                };
                /**
                 * Listing all job types
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllJobTypes = function () {
                    var __this = this;
                    return this.http.request(__this.allJobTypesListingUrl);
                };
                /**
                 * Listing all job namings
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllJobNamings = function () {
                    var __this = this;
                    return this.http.request(__this.allJobNamingsListingUrl);
                };
                /**
                 * Listing all job naming groups
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllJobNamingGroups = function () {
                    var __this = this;
                    return this.http.request(__this.allJobNamingGroupsUrl);
                };
                /**
                 * Listing all study levels
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllStudyLevels = function () {
                    var __this = this;
                    return this.http.request(__this.allStudyLevelsListingUrl);
                };
                /**
                 * Listing all diplomas
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllDiplomas = function () {
                    var __this = this;
                    return this.http.request(__this.allDiplomasListingUrl);
                };
                /**
                 * Listing all possible alert frequencies
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllAlertFrequencies = function () {
                    var __this = this;
                    return this.http.request(__this.getAlertFrequenciesListingUrl);
                };
                /**
                 * Listing all possible business types
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllBusinessTypes = function () {
                    var __this = this;
                    return this.http.request(__this.getAllBusinessTypesListingUrl);
                };
                /**
                 * Listing all possible job xp levels
                 * @returns {Observable<Response>}
                 */
                ReferenceService.prototype.getAllJobXpLevels = function () {
                    var __this = this;
                    return this.http.request(__this.getAllJobXpLevelsUrl);
                };
                ReferenceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReferenceService);
                return ReferenceService;
            }());
            exports_1("ReferenceService", ReferenceService);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/job.service', './../services/post.service', './../services/club.service', './../services/reference.service'], function(exports_1, context_1) {
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
    var JobSearchBarComponent;
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
            JobSearchBarComponent = (function () {
                function JobSearchBarComponent(jobService, postService, clubService, referenceService) {
                    this.jobService = jobService;
                    this.postService = postService;
                    this.clubService = clubService;
                    this.referenceService = referenceService;
                    var __this = this;
                    referenceService.getAllStates().subscribe(function (res) {
                        __this.states = res.json();
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
            exports_1("JobSearchBarComponent", JobSearchBarComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var JobPreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            JobPreviewComponent = (function () {
                function JobPreviewComponent() {
                }
                __decorate([
                    core_1.Input('job'), 
                    __metadata('design:type', Object)
                ], JobPreviewComponent.prototype, "job", void 0);
                JobPreviewComponent = __decorate([
                    core_1.Component({
                        selector: 'job-preview',
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/job-preview.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], JobPreviewComponent);
                return JobPreviewComponent;
            }());
            exports_1("JobPreviewComponent", JobPreviewComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var PostPreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            PostPreviewComponent = (function () {
                function PostPreviewComponent() {
                }
                __decorate([
                    core_1.Input('post'), 
                    __metadata('design:type', Object)
                ], PostPreviewComponent.prototype, "post", void 0);
                PostPreviewComponent = __decorate([
                    core_1.Component({
                        selector: 'post-preview',
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/post-preview.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostPreviewComponent);
                return PostPreviewComponent;
            }());
            exports_1("PostPreviewComponent", PostPreviewComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/job.service', './../services/post.service', './../services/club.service', './job-search-bar.component', './job-preview.component', './post-preview.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_service_1, post_service_1, club_service_1, job_search_bar_component_1, job_preview_component_1, post_preview_component_1;
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
            function (job_search_bar_component_1_1) {
                job_search_bar_component_1 = job_search_bar_component_1_1;
            },
            function (job_preview_component_1_1) {
                job_preview_component_1 = job_preview_component_1_1;
            },
            function (post_preview_component_1_1) {
                post_preview_component_1 = post_preview_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
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
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', 'ng2-bootstrap', './../services/reference.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, ng2_bootstrap_1, reference_service_1;
    var JobSearchSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            }],
        execute: function() {
            JobSearchSidebarComponent = (function () {
                function JobSearchSidebarComponent(referenceService) {
                    this.referenceService = referenceService;
                    this.isStudyLevelCollapsed = true;
                    this.isContractTypeCollapsed = true;
                    this.isJobNamingCollapsed = true;
                    var __this = this;
                    referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    referenceService.getAllStudyLevels().subscribe(function (res) {
                        __this.studyLevels = res.json();
                    });
                }
                JobSearchSidebarComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.RouterLink, ng2_bootstrap_1.CollapseDirective],
                        providers: [reference_service_1.ReferenceService],
                        selector: 'job-search-sidebar',
                        templateUrl: '../templates/job-search-sidebar.component.html',
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService])
                ], JobSearchSidebarComponent);
                return JobSearchSidebarComponent;
            }());
            exports_1("JobSearchSidebarComponent", JobSearchSidebarComponent);
        }
    }
});

System.register(['@angular/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var UNITYTinyMCE;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UNITYTinyMCE = (function () {
                function UNITYTinyMCE(elementRef) {
                    this.newContentInput = new core_1.EventEmitter();
                    this.elementRef = elementRef;
                    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    var uniqid = randLetter + Date.now();
                    this.elementID = 'tinymce' + uniqid;
                    // this.contentChanged = new EventEmitter();
                }
                UNITYTinyMCE.prototype.ngAfterViewInit = function () {
                    //Clone base textarea
                    var baseTextArea = this.elementRef.nativeElement.querySelector("#baseTextArea");
                    var clonedTextArea = baseTextArea.cloneNode(true);
                    clonedTextArea.id = this.elementID;
                    var formGroup = this.elementRef.nativeElement.querySelector("#tinyFormGroup");
                    formGroup.appendChild(clonedTextArea);
                    //Attach tinyMCE to cloned textarea
                    tinymce.init({
                        language: 'fr_FR',
                        mode: 'exact',
                        height: 500,
                        theme: 'modern',
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table contextmenu paste code'
                        ],
                        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        elements: this.elementID,
                        setup: this.tinyMCESetup.bind(this)
                    });
                };
                UNITYTinyMCE.prototype.ngOnDestroy = function () {
                    //destroy cloned elements
                    tinymce.get(this.elementID).remove();
                    /* var elem = document.getElementById(this.elementID);
                    elem.parentElement.removeChild(elem); */
                };
                UNITYTinyMCE.prototype.tinyMCESetup = function (ed) {
                    ed.on('keyup', this.tinyMCEOnKeyup.bind(this));
                };
                UNITYTinyMCE.prototype.tinyMCEOnKeyup = function (e) {
                    this.newContentInput.emit(tinymce.get(this.elementID).getContent());
                };
                Object.defineProperty(UNITYTinyMCE.prototype, "mceContent", {
                    set: function (content) {
                        this.htmlContent = content;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UNITYTinyMCE.prototype, "newContentInput", void 0);
                UNITYTinyMCE = __decorate([
                    core_1.Component({
                        selector: 'unity-tinymce',
                        template: '<div id="tinyFormGroup" class="form-group">' +
                            '<div class="hidden"> ' +
                            '<textarea id="baseTextArea">{{htmlContent}}</textarea> ' +
                            '</div> ' +
                            '</div>',
                        inputs: ['mceContent'],
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], UNITYTinyMCE);
                return UNITYTinyMCE;
            }());
            exports_1("UNITYTinyMCE", UNITYTinyMCE);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/job.service', './tiny-mce.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_service_1, tiny_mce_component_1;
    var NewApplicationFormComponent;
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
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            }],
        execute: function() {
            NewApplicationFormComponent = (function () {
                function NewApplicationFormComponent(routeParams, jobService, router) {
                    this.routeParams = routeParams;
                    this.jobService = jobService;
                    this.router = router;
                    this.jobId = routeParams.get("jobId");
                }
                NewApplicationFormComponent.prototype.submitApplication = function () {
                    var _this = this;
                    var __this = this;
                    this.jobService.apply(__this.jobId, __this.comment).subscribe(function (res) {
                        _this.router.navigate(['/Profile/Applications']);
                    });
                };
                NewApplicationFormComponent.prototype.commentChanged = function (newComment) {
                    this.comment = newComment;
                };
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', String)
                ], NewApplicationFormComponent.prototype, "jobId", void 0);
                NewApplicationFormComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.RouterLink, tiny_mce_component_1.UNITYTinyMCE],
                        providers: [job_service_1.JobService],
                        selector: 'new-application-form',
                        templateUrl: '../templates/new-application-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, job_service_1.JobService, router_deprecated_1.Router])
                ], NewApplicationFormComponent);
                return NewApplicationFormComponent;
            }());
            exports_1("NewApplicationFormComponent", NewApplicationFormComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/job.service', './job-search-sidebar.component', './new-application-form.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_service_1, job_search_sidebar_component_1, new_application_form_component_1;
    var JobComponent;
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
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            }],
        execute: function() {
            JobComponent = (function () {
                function JobComponent(routeParams, jobService) {
                    this.routeParams = routeParams;
                    this.jobService = jobService;
                    var __this = this;
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.jobId = routeParams.get("jobId");
                    jobService.getJob(__this.jobId).subscribe(function (res) {
                        __this.job = res.json();
                        console.log(__this.job);
                    });
                }
                JobComponent = __decorate([
                    core_1.Component({
                        providers: [job_service_1.JobService],
                        directives: [router_deprecated_1.RouterLink,
                            job_search_sidebar_component_1.JobSearchSidebarComponent,
                            new_application_form_component_1.NewApplicationFormComponent],
                        inputs: ['jobId'],
                        selector: 'job',
                        templateUrl: '../templates/job.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, job_service_1.JobService])
                ], JobComponent);
                return JobComponent;
            }());
            exports_1("JobComponent", JobComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/post.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, post_service_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(routeParams, postService) {
                    this.routeParams = routeParams;
                    this.postService = postService;
                    var __this = this;
                    this.postId = routeParams.get("postId");
                    postService.getPost(__this.postId).subscribe(function (res) {
                        __this.post = res.json();
                    });
                }
                PostComponent = __decorate([
                    core_1.Component({
                        providers: [post_service_1.PostService],
                        inputs: ['postId'],
                        selector: 'post',
                        templateUrl: '../templates/post.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters:[],
        execute: function() {
            Notification = (function () {
                function Notification(type, message, linkTitle, linkRoute) {
                    if (type === void 0) { type = ''; }
                    if (message === void 0) { message = ''; }
                    if (linkTitle === void 0) { linkTitle = ''; }
                    if (linkRoute === void 0) { linkRoute = ''; }
                    this.type = type;
                    this.message = message;
                    this.linkTitle = linkTitle;
                    this.linkRoute = linkRoute;
                }
                return Notification;
            }());
            exports_1("Notification", Notification);
        }
    }
});

System.register(['@angular/core', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var NotificationsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            NotificationsService = (function () {
                function NotificationsService() {
                    this._notifications = new Subject_1.Subject();
                    this.noteAdded = this._notifications.asObservable();
                }
                NotificationsService.prototype.show = function (notification) {
                    this._notifications.next(notification);
                };
                NotificationsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NotificationsService);
                return NotificationsService;
            }());
            exports_1("NotificationsService", NotificationsService);
        }
    }
});

System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/catch', './notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, http_1, notification_service_1, notification_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http, notificationService) {
                    this.http = http;
                    this.notificationService = notificationService;
                    this.signInUrl = '/sign-in/';
                    this.getApplicationsUrl = '/applications/all';
                    this.getPlansUrl = '/user/plans/all';
                    this.getExperiencesUrl = '/experiences/all';
                    this.getExperienceUrl = '/experience';
                    this.deleteExperiencesUrl = '/experience/delete';
                    this.deleteEducationUrl = '/education/delete';
                    this.deleteAlertUrl = '/alert/delete';
                    this.getEducationUrl = '/education/all';
                    this.getAlertsUrl = '/alerts/all';
                    this.getBusinessesUrl = '/user/businesses';
                    this.getJobPostsUrl = '/user/job-posts/all';
                    this.deleteJobPostsUrl = '/job-posts/delete';
                    this.getBusinessUrl = '/business';
                    this.getTestimonialsUrl = '/testimonials/all';
                    this.getCreatedTestimonialsUrl = '/created_testimonials/all';
                    this.createExperienceUrl = '/experience/create';
                    this.updateExperienceUrl = '/experience/update';
                    this.createStudyUrl = '/study/create';
                    this.createAlertUrl = '/alert/create';
                    this.getAlertUrl = '/alert';
                    this.saveAlertChangesUrl = '/alert/save_changes/';
                }
                /**
                 * Sign user in
                 * @param email
                 * @param password
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.login = function (email, password) {
                    var __this = this;
                    return this.http.get(__this.signInUrl + email + '/' + password);
                };
                /**
                 * Get user's job applications
                 */
                UserService.prototype.getApplications = function () {
                    var __this = this;
                    return this.http.get(__this.getApplicationsUrl);
                };
                /**
                 * Get user's work experiences
                 */
                UserService.prototype.getExperiences = function () {
                    var __this = this;
                    return this.http.get(__this.getExperiencesUrl);
                };
                /**
                 * Get user's specific experience
                 * @param experienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getExperience = function (experienceId) {
                    var __this = this;
                    return this.http.get(__this.getExperienceUrl + '/' + experienceId);
                };
                /**
                 * Delete experiences based on a comma separated list of ids
                 * @param listExperienceId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.deleteExperiences = function (listExperienceId) {
                    var __this = this;
                    return this.http.get(__this.deleteExperiencesUrl + '/' + listExperienceId);
                };
                /**
                 * Get user's education
                 */
                UserService.prototype.getEducation = function () {
                    var __this = this;
                    return this.http.get(__this.getEducationUrl);
                };
                /**
                 * Delete specific user's education studies
                 * @param listStudyId
                 */
                UserService.prototype.deleteEducation = function (listStudyId) {
                    var __this = this;
                    return this.http.get(__this.deleteEducationUrl + '/' + listStudyId);
                };
                /**
                 * Get user's new job alerts
                 */
                UserService.prototype.getAlerts = function () {
                    var __this = this;
                    return this.http.get(__this.getAlertsUrl);
                };
                /**
                 * Get user's job posts
                 */
                UserService.prototype.getJobPosts = function () {
                    var __this = this;
                    return this.http.get(__this.getJobPostsUrl);
                };
                /**
                 * Delete specific user's job posts
                 * @param listJobPostId
                 */
                UserService.prototype.deleteJobPosts = function (listJobPostId) {
                    var __this = this;
                    return this.http.get(__this.deleteJobPostsUrl + '/' + listJobPostId);
                };
                /**
                 * Delete specific user's alerts
                 * @param studyId
                 */
                UserService.prototype.deleteAlerts = function (listAlertId) {
                    var __this = this;
                    return this.http.get(__this.deleteAlertUrl + '/' + listAlertId);
                };
                /**
                 * Get user specific job alert
                 * @param alertId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getAlert = function (alertId) {
                    var __this = this;
                    return this.http.get(__this.getAlertUrl + '/' + alertId);
                };
                /**
                 * Get user's testimonials
                 */
                UserService.prototype.getTestimonials = function () {
                    var __this = this;
                    return this.http.get(__this.getTestimonialsUrl);
                };
                /**
                 * Get user's created testimonials
                 */
                UserService.prototype.getCreatedTestimonials = function () {
                    var __this = this;
                    return this.http.get(__this.getCreatedTestimonialsUrl);
                };
                /**
                 * Get user's businesses
                 */
                UserService.prototype.getBusinesses = function () {
                    var __this = this;
                    return this.http.get(__this.getBusinessesUrl);
                };
                /**
                 * Get user specific business
                 * @param businessId
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.getBusiness = function (businessId) {
                    var __this = this;
                    return this.http.get(__this.getBusinessUrl + '/' + businessId);
                };
                /**
                 * Get the plans that current user subscribed to
                 * @returns {any}
                 */
                UserService.prototype.getPlans = function () {
                    var __this = this;
                    return this.http.get(__this.getPlansUrl);
                };
                /**
                 * Create new work experience
                 * @param jobNamingId
                 * @param businessId
                 * @param startDate
                 * @param endDate
                 * @param adress
                 * @param lat
                 * @param lon
                 * @param description
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createExperience = function (jobNamingId, businessId, startDate, endDate, description) {
                    var __this = this;
                    return this.http.get(__this.createExperienceUrl + '/' +
                        jobNamingId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        description).catch(this.handleError("", __this.notificationService));
                };
                /**
                 * Update existing work experience
                 * @param experienceId
                 * @param jobNamingId
                 * @param businessId
                 * @param startDate
                 * @param endDate
                 * @param adress
                 * @param lat
                 * @param lon
                 * @param description
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateExperience = function (experienceId, jobNamingId, businessId, startDate, endDate, description) {
                    var __this = this;
                    return this.http.get(__this.updateExperienceUrl + '/' +
                        experienceId + '/' +
                        jobNamingId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        description);
                };
                /**
                 * Create new study
                 * @param diplomaId
                 * @param businessId
                 * @param startDate
                 * @param endDate
                 * @param place
                 * @param description
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createStudy = function (diplomaId, businessId, startDate, endDate, place, description) {
                    var __this = this;
                    return this.http.get(__this.createStudyUrl + '/' +
                        diplomaId + '/' +
                        businessId + '/' +
                        startDate + '/' +
                        endDate + '/' +
                        place + '/' +
                        description);
                };
                /**
                 * Create new job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.createAlert = function (alert) {
                    var __this = this;
                    return this.http.get(__this.createAlertUrl + '/' +
                        alert.alert_frequency_id + '/' +
                        alert.title + '/' +
                        alert.job_naming_id + '/' +
                        alert.place + '/');
                };
                /**
                 * Save changes to an exisiting job alert
                 * @param alert
                 * @returns {Observable<Response>}
                 */
                UserService.prototype.updateAlert = function (alert) {
                    var __this = this;
                    return this.http.get(__this.saveAlertChangesUrl + '/' +
                        alert.id + '/' +
                        alert.alert_frequency_id + '/' +
                        alert.title + '/' +
                        alert.job_naming_id + '/' +
                        alert.place + '/');
                };
                /**
                 * Error handling
                 * @param error
                 */
                UserService.prototype.handleError = function (error, notificationService) {
                    var __this = this;
                    console.log(__this, __this.notificationService);
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue s\'est produite, veuillez rééssayer'));
                    console.error(errMsg); // log to console instead
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, notification_service_1.NotificationsService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', 'ng2-bootstrap', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, ng2_bootstrap_1, user_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.forgotPassword = false;
                    this.loading = false;
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                HeaderComponent.prototype.login = function () {
                    var _this = this;
                    var __this = this;
                    this.userService.login(__this.email, __this.password).subscribe(function (res) {
                        var user = res.json();
                        if (res.json()) {
                            // Logged in
                            localStorage.setItem('user', JSON.stringify(user));
                        }
                        else {
                            // Failed signing in, clear user object in localStorage
                            localStorage.removeItem('user');
                        }
                        _this.user = JSON.parse(localStorage.getItem('user'));
                    });
                };
                HeaderComponent.prototype.logout = function () {
                    localStorage.removeItem('user');
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.router.navigate(['Home']);
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/header.component.html',
                        selector: 'header',
                        providers: [user_service_1.UserService],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        directives: [router_deprecated_1.RouterLink,
                            ng2_bootstrap_1.MODAL_DIRECTVES,
                            common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/footer.component.html',
                        selector: 'footer',
                        directives: [router_deprecated_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1;
    var UserSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserSidebarComponent = (function () {
                function UserSidebarComponent(userService) {
                    this.userService = userService;
                    this.plans = [];
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.userProfilePicturePath = 'url(/uploads/user/pp/' + this.user.id + '.jpg)';
                    var __this = this;
                    this.userService.getPlans().subscribe(function (res) {
                        __this.plans = res.json();
                    });
                }
                UserSidebarComponent = __decorate([
                    core_1.Component({
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        selector: 'user-sidebar',
                        templateUrl: '../templates/user-sidebar.component.html',
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserSidebarComponent);
                return UserSidebarComponent;
            }());
            exports_1("UserSidebarComponent", UserSidebarComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1;
    var ApplicationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ApplicationsComponent = (function () {
                function ApplicationsComponent(userService) {
                    this.userService = userService;
                    this.applications = [];
                    var __this = this;
                    this.userService.getApplications().subscribe(function (res) {
                        __this.applications = res.json();
                    });
                }
                ApplicationsComponent = __decorate([
                    core_1.Component({
                        selector: 'applications',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/applications.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ApplicationsComponent);
                return ApplicationsComponent;
            }());
            exports_1("ApplicationsComponent", ApplicationsComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var ExperiencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            ExperiencesComponent = (function () {
                function ExperiencesComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getExperiences().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                ExperiencesComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                ExperiencesComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                ExperiencesComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteExperiences(parsedListItemId).subscribe(function (res) {
                        __this.userService.getExperiences().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces expériences ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                ExperiencesComponent = __decorate([
                    core_1.Component({
                        selector: 'experiences',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/experiences.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], ExperiencesComponent);
                return ExperiencesComponent;
            }());
            exports_1("ExperiencesComponent", ExperiencesComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var EducationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            EducationComponent = (function () {
                function EducationComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getEducation().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                EducationComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                EducationComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                EducationComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteEducation(parsedListItemId).subscribe(function (res) {
                        __this.userService.getEducation().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces formations ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                EducationComponent = __decorate([
                    core_1.Component({
                        selector: 'education',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/education.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var AlertsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            AlertsComponent = (function () {
                function AlertsComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getAlerts().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                AlertsComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                AlertsComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                AlertsComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteAlerts(parsedListItemId).subscribe(function (res) {
                        __this.userService.getAlerts().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces alertes ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                AlertsComponent = __decorate([
                    core_1.Component({
                        selector: 'alerts',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/alerts.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], AlertsComponent);
                return AlertsComponent;
            }());
            exports_1("AlertsComponent", AlertsComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1;
    var TestimonialsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            TestimonialsComponent = (function () {
                function TestimonialsComponent(userService) {
                    this.userService = userService;
                    this.testimonials = [];
                    var __this = this;
                    this.userService.getTestimonials().subscribe(function (res) {
                        __this.testimonials = res.json();
                    });
                }
                TestimonialsComponent = __decorate([
                    core_1.Component({
                        selector: 'testimonials',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/testimonials.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], TestimonialsComponent);
                return TestimonialsComponent;
            }());
            exports_1("TestimonialsComponent", TestimonialsComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Experience;
    return {
        setters:[],
        execute: function() {
            Experience = (function () {
                function Experience(id, business_id, user_id, job_naming_id, adress, lat, lon, description, start_date, end_date) {
                    this.id = id;
                    this.business_id = business_id;
                    this.user_id = user_id;
                    this.job_naming_id = job_naming_id;
                    this.adress = adress;
                    this.lat = lat;
                    this.lon = lon;
                    this.description = description;
                    this.start_date = start_date;
                    this.end_date = end_date;
                }
                return Experience;
            }());
            exports_1("Experience", Experience);
        }
    }
});

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
    var BusinessService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            BusinessService = (function () {
                function BusinessService(http) {
                    this.http = http;
                    this.createBusinessUrl = "/business/create/";
                    this.getAllBusinessesUrl = "/businesses/all";
                }
                BusinessService.prototype.create = function (name, lat, lon, adress, postalCode, city, website, typeId, phone, email, description) {
                    var completeUrl = this.createBusinessUrl +
                        name + '/' +
                        lat + '/' +
                        lon + '/' +
                        adress + '/' +
                        postalCode + '/' +
                        city + '/' +
                        website + '/' +
                        typeId + '/' +
                        phone + '/' +
                        email + '/' +
                        description;
                    return this.http.request(completeUrl);
                };
                BusinessService.prototype.getAll = function () {
                    return this.http.request(this.getAllBusinessesUrl);
                };
                BusinessService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BusinessService);
                return BusinessService;
            }());
            exports_1("BusinessService", BusinessService);
        }
    }
});

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
    var PlaceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PlaceService = (function () {
                function PlaceService(http) {
                    this.http = http;
                    this.savePlaceUrl = "/place/save";
                }
                PlaceService.prototype.save = function (place) {
                    var location = place['geometry']['location'];
                    var types = place['types'];
                    var typesString = "";
                    // Parse postal code
                    var postalCode = "";
                    if (place['address_components'][6]) {
                        postalCode = place['address_components'][6]['long_name'];
                    }
                    else if (place['address_components'][5]) {
                        postalCode = place['address_components'][5]['long_name'];
                    }
                    // Parse city
                    var city = "";
                    if (place['address_components'][2]) {
                        city = place['address_components'][2]['long_name'];
                    }
                    // Parse website
                    var website = "";
                    if (place['website']) {
                        website = place['website'].replace(/\//g, '');
                    }
                    // Parse phone
                    var phone = "";
                    if (place['phone']) {
                        phone = place['phone'];
                    }
                    for (var i = 0; i < types.length; i++) {
                        typesString += types[i] + ',';
                    }
                    var completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + place['geometry']['viewport']['f']['b'] +
                        '/' + place['geometry']['viewport']['b']['b'] +
                        '/' + place['geometry']['viewport']['f']['f'] +
                        '/' + place['geometry']['viewport']['b']['f'] +
                        '/' + typesString +
                        '/' + place['name'] +
                        '/' + phone +
                        '/' + website +
                        '/' + city +
                        '/' + postalCode;
                    return this.http.request(completeUrl);
                };
                PlaceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PlaceService);
                return PlaceService;
            }());
            exports_1("PlaceService", PlaceService);
        }
    }
});

System.register(['@angular/core', './../services/business.service', './../services/place.service', './../services/user.service', 'angular2-google-map-auto-complete/directives/googleplace.directive'], function(exports_1, context_1) {
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
    var core_1, business_service_1, place_service_1, user_service_1, googleplace_directive_1;
    var BusinessSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            },
            function (place_service_1_1) {
                place_service_1 = place_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            }],
        execute: function() {
            BusinessSelectComponent = (function () {
                function BusinessSelectComponent(businessService, placeService, userService) {
                    this.businessService = businessService;
                    this.placeService = placeService;
                    this.userService = userService;
                    this.businesses = [];
                    this.isGooglePlaceInput = false;
                    this.businessIdChange = new core_1.EventEmitter();
                    var __this = this;
                    if (this.onlyUserBusinesses) {
                        console.log('only user businesses');
                        userService.getBusinesses().subscribe(function (res) {
                            __this.businesses = res.json();
                        });
                    }
                    else {
                        businessService.getAll().subscribe(function (res) {
                            __this.businesses = res.json();
                        });
                    }
                }
                BusinessSelectComponent.prototype.parseAdress = function (place) {
                    var __this = this;
                    console.log(place);
                    // Save selected place data for further use
                    this.placeService.save(place).subscribe(function (res) {
                        __this.businessId = res.json()['id'];
                        __this.businessIdChanged();
                        __this.businessService.getAll().subscribe(function (res1) {
                            __this.businesses = res1.json();
                            __this.isGooglePlaceInput = false;
                        });
                    });
                };
                BusinessSelectComponent.prototype.businessIdChanged = function (newBusinessId) {
                    this.businessIdChange.emit(newBusinessId);
                };
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Number)
                ], BusinessSelectComponent.prototype, "businessId", void 0);
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Boolean)
                ], BusinessSelectComponent.prototype, "onlyUserBusinesses", void 0);
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Boolean)
                ], BusinessSelectComponent.prototype, "isRequired", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], BusinessSelectComponent.prototype, "businessIdChange", void 0);
                BusinessSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'business-select',
                        providers: [business_service_1.BusinessService, place_service_1.PlaceService, user_service_1.UserService],
                        directives: [googleplace_directive_1.GoogleplaceDirective],
                        templateUrl: '../templates/business-select.component.html',
                        inputs: ['businessId', 'onlyUserBusinesses', 'isRequired']
                    }), 
                    __metadata('design:paramtypes', [business_service_1.BusinessService, place_service_1.PlaceService, user_service_1.UserService])
                ], BusinessSelectComponent);
                return BusinessSelectComponent;
            }());
            exports_1("BusinessSelectComponent", BusinessSelectComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/notification.service', './../models/experience', './../models/notification', './business-select.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, notification_service_1, experience_1, notification_1, business_select_component_1;
    var CreateExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (experience_1_1) {
                experience_1 = experience_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            }],
        execute: function() {
            CreateExperienceComponent = (function () {
                function CreateExperienceComponent(referenceService, userService, notificationService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.routeParams = routeParams;
                    this.experience = new experience_1.Experience();
                    var __this = this;
                    this.experience.id = routeParams.get("experienceId");
                    if (this.experience.id) {
                        // Editing a specific experience, let's retrieve it's data
                        this.userService.getExperience(__this.experience.id).subscribe(function (res) {
                            __this.experience = res.json();
                        });
                    }
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                }
                CreateExperienceComponent.prototype.submitExperience = function () {
                    var __this = this;
                    if (!this.experience.id) {
                        this.userService.createExperience(__this.experience.job_naming_id, __this.experience.business_id, __this.experience.start_date, __this.experience.end_date, __this.experience.description).subscribe(function (res) {
                            __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été crée', 'Retour aux expériences', 'Profile/Experiences'));
                        });
                    }
                    else {
                        this.userService.updateExperience(__this.experience.id, __this.experience.job_naming_id, __this.experience.business_id, __this.experience.start_date, __this.experience.end_date, __this.experience.description).subscribe(function (res) {
                            __this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées', 'Retour aux expériences', 'Profile/Experiences'));
                        });
                    }
                };
                CreateExperienceComponent.prototype.handleBusinessIdChange = function (businessId) {
                    this.experience.business_id = businessId;
                };
                CreateExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
                        templateUrl: '../templates/create-experience.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, router_deprecated_1.RouteParams])
                ], CreateExperienceComponent);
                return CreateExperienceComponent;
            }());
            exports_1("CreateExperienceComponent", CreateExperienceComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Study;
    return {
        setters:[],
        execute: function() {
            Study = (function () {
                function Study(id, user_id, diploma_id, business_id, adress, description, start_date, end_date) {
                    this.id = id;
                    this.user_id = user_id;
                    this.diploma_id = diploma_id;
                    this.business_id = business_id;
                    this.adress = adress;
                    this.description = description;
                    this.start_date = start_date;
                    this.end_date = end_date;
                }
                return Study;
            }());
            exports_1("Study", Study);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../models/study'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, study_1;
    var CreateStudyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (study_1_1) {
                study_1 = study_1_1;
            }],
        execute: function() {
            CreateStudyComponent = (function () {
                function CreateStudyComponent(referenceService, userService) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.study = new study_1.Study();
                    var __this = this;
                    this.referenceService.getAllDiplomas().subscribe(function (res) {
                        __this.diplomas = res.json();
                    });
                }
                CreateStudyComponent.prototype.submitStudy = function () {
                    var __this = this;
                    this.userService.createStudy(__this.study.diploma_id, __this.study.business_id, __this.study.start_date, __this.study.end_date, __this.study.adress, __this.study.description).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateStudyComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/create-study.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService])
                ], CreateStudyComponent);
                return CreateStudyComponent;
            }());
            exports_1("CreateStudyComponent", CreateStudyComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alert;
    return {
        setters:[],
        execute: function() {
            Alert = (function () {
                function Alert(id, job_naming_id, alert_frequency_id, title, place) {
                    this.id = id;
                    this.job_naming_id = job_naming_id;
                    this.alert_frequency_id = alert_frequency_id;
                    this.title = title;
                    this.place = place;
                }
                return Alert;
            }());
            exports_1("Alert", Alert);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../models/alert'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, alert_1;
    var CreateAlertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            }],
        execute: function() {
            CreateAlertComponent = (function () {
                function CreateAlertComponent(referenceService, userService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.routeParams = routeParams;
                    this.alert = new alert_1.Alert();
                    var __this = this;
                    this.alert.id = routeParams.get("alertId");
                    if (this.alert.id) {
                        // Editing a specific alert, let's retrieve it's data
                        this.userService.getAlert(__this.alert.id).subscribe(function (res) {
                            __this.alert = res.json();
                        });
                    }
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
                        __this.alertFrequencies = res.json();
                    });
                }
                CreateAlertComponent.prototype.createAlert = function () {
                    var __this = this;
                    this.userService.createAlert(__this.alert).subscribe(function (res) {
                    });
                };
                CreateAlertComponent.prototype.saveAlertChanges = function () {
                    var __this = this;
                    this.userService.updateAlert(__this.alert).subscribe(function (res) {
                    });
                };
                CreateAlertComponent = __decorate([
                    core_1.Component({
                        selector: 'create-alert',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/create-alert.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, router_deprecated_1.RouteParams])
                ], CreateAlertComponent);
                return CreateAlertComponent;
            }());
            exports_1("CreateAlertComponent", CreateAlertComponent);
        }
    }
});

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
    var LocationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LocationService = (function () {
                function LocationService(http) {
                    this.http = http;
                    this.googlePlacesApiUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
                    this.googlePlacesApiKey = "AIzaSyCHNaCGgnmz-39ECIEo65ozW96VJSIH9yI";
                    this.googlePlacesApiSettings = "&types=geocode&language=fr";
                }
                LocationService.prototype.autocompleteAdress = function (adress) {
                    var completeApiUrl = this.googlePlacesApiUrl +
                        "?input=" + adress +
                        this.googlePlacesApiSettings +
                        '&key=' + this.googlePlacesApiKey;
                    return this.http.request(completeApiUrl);
                };
                LocationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LocationService);
                return LocationService;
            }());
            exports_1("LocationService", LocationService);
        }
    }
});

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
    var FileUploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FileUploadService = (function () {
                function FileUploadService(http) {
                    this.http = http;
                }
                //Map the policy and signature
                FileUploadService.prototype.handleResponse = function (response) {
                    this.policy = response.policy;
                    this.s3signature = response.signature;
                };
                //fetch policy and signature from the server
                //If you are not familiar with ngOnInit
                //This function gets fired at the beginning
                //Hence this is the best place to fetch the signature and policy
                FileUploadService.prototype.ngOnInit = function () {
                    // this._uploadService.getPolicy('test').subscribe(response => this.handleResponse(response) );
                };
                //Function to build timestamp
                FileUploadService.prototype.buildTimestamp = function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = ("0" + (date.getMonth() + 1)).slice(-2);
                    var day = ("0" + date.getDate()).slice(-2);
                    var timestamp = year + month + day;
                    return timestamp;
                };
                FileUploadService.prototype.upload = function (file) {
                    var formData = new FormData();
                    var xhr = new XMLHttpRequest();
                    //Build AWS S3 Request
                    formData.append('key', 'test/' + file.name);
                    formData.append('acl', 'private');
                    formData.append('Content-Type', 'image/jpeg');
                    formData.append('x-amz-meta-uuid', '14365123651274');
                    //Put in your access key here
                    formData.append('X-Amz-Credential', 'YOURAWSACCESSKE/' + this.buildTimestamp() + '/eu-central-1/s3/aws4_request');
                    formData.append('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
                    formData.append('X-Amz-Date', this.buildTimestamp() + 'T000000Z');
                    formData.append('x-amz-meta-tag', '');
                    /*formData.append('Policy',this.policy);
                    formData.append('X-Amz-Signature',this.s3signature);*/
                    formData.append('file', file);
                    xhr.open('POST', 'http://oechr-business-pictures.s3.amazonaws.com/', true);
                    xhr.send(formData);
                };
                FileUploadService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FileUploadService);
                return FileUploadService;
            }());
            exports_1("FileUploadService", FileUploadService);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Business;
    return {
        setters:[],
        execute: function() {
            Business = (function () {
                function Business(id, title, email, phone, business_type_id, website, description, photos) {
                    if (photos === void 0) { photos = []; }
                    this.id = id;
                    this.title = title;
                    this.email = email;
                    this.phone = phone;
                    this.business_type_id = business_type_id;
                    this.website = website;
                    this.description = description;
                    this.photos = photos;
                }
                return Business;
            }());
            exports_1("Business", Business);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Place;
    return {
        setters:[],
        execute: function() {
            Place = (function () {
                function Place(id, googlePlaceId, lat, lon, adress, city, postalCode) {
                    this.id = id;
                    this.googlePlaceId = googlePlaceId;
                    this.lat = lat;
                    this.lon = lon;
                    this.adress = adress;
                    this.city = city;
                    this.postalCode = postalCode;
                }
                return Place;
            }());
            exports_1("Place", Place);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/location.service', './../services/business.service', './../services/file-upload.service', 'angular2-google-map-auto-complete/directives/googleplace.directive', './../models/business', './../models/place'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, location_service_1, business_service_1, file_upload_service_1, googleplace_directive_1, business_1, place_1;
    var CreateBusinessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (location_service_1_1) {
                location_service_1 = location_service_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            },
            function (file_upload_service_1_1) {
                file_upload_service_1 = file_upload_service_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (business_1_1) {
                business_1 = business_1_1;
            },
            function (place_1_1) {
                place_1 = place_1_1;
            }],
        execute: function() {
            CreateBusinessComponent = (function () {
                function CreateBusinessComponent(referenceService, userService, businessService, fileUploadService, locationService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.businessService = businessService;
                    this.fileUploadService = fileUploadService;
                    this.locationService = locationService;
                    this.routeParams = routeParams;
                    this.business = new business_1.Business();
                    this.place = new place_1.Place();
                    var __this = this;
                    this.business.id = routeParams.get("businessId");
                    if (this.business.id) {
                        // Editing a specific business, let's retrieve it's data
                        this.userService.getBusiness(__this.business.id).subscribe(function (res) {
                            __this.business = res.json();
                        });
                    }
                    this.referenceService.getAllBusinessTypes().subscribe(function (res) {
                        __this.businessTypes = res.json();
                    });
                }
                CreateBusinessComponent.prototype.parseAdress = function (place) {
                    var location = place['geometry']['location'];
                    this.place.lat = location.lat();
                    this.place.lon = location.lng();
                    this.business.phone = place['formatted_phone_number'];
                    this.business.website = place['website'];
                    this.place.adress = place['formatted_address'];
                    this.business.title = place['name'];
                    console.log('getting photos');
                    // Loop through photos to get url
                    for (var i = 0; i < place['photos'].length; i++) {
                        console.log('found a photo');
                        var photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
                        this.business.photos.push(photoUrl);
                    }
                    // Get business's type
                    if (place['types'].indexOf('restaurant')) {
                        this.business.business_type_id = 2;
                    }
                    else if (place['types'].indexOf('lodging')) {
                        this.business.business_type_id = 1;
                    }
                    else if (place['types'].indexOf('campground')) {
                        this.business.business_type_id = 6;
                    }
                    else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
                        this.business.business_type_id = 8;
                    }
                    else {
                        this.business.business_type_id = 9;
                    }
                    this.place.city = place['address_components'][2]['long_name'];
                    this.place.postalCode = place['address_components'][6]['long_name'];
                };
                CreateBusinessComponent.prototype.submitBusiness = function () {
                    var __this = this;
                    this.businessService.create(__this.business.title, __this.place.lat, __this.place.lon, __this.place.adress, __this.place.postalCode, __this.place.city, 
                    // Encode url in order to pass it as a parameter
                    __this.business.website.replace('/', '--'), __this.business.business_type_id, __this.business.phone, __this.business.email, __this.business.description).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateBusinessComponent = __decorate([
                    core_1.Component({
                        selector: 'create-business',
                        providers: [reference_service_1.ReferenceService,
                            user_service_1.UserService,
                            location_service_1.LocationService,
                            business_service_1.BusinessService,
                            file_upload_service_1.FileUploadService],
                        directives: [router_deprecated_1.RouterLink, googleplace_directive_1.GoogleplaceDirective],
                        templateUrl: '../templates/create-business.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, business_service_1.BusinessService, file_upload_service_1.FileUploadService, location_service_1.LocationService, router_deprecated_1.RouteParams])
                ], CreateBusinessComponent);
                return CreateBusinessComponent;
            }());
            exports_1("CreateBusinessComponent", CreateBusinessComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var BusinessesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            BusinessesComponent = (function () {
                function BusinessesComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getBusinesses().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                BusinessesComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                BusinessesComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                BusinessesComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteBusinesses(parsedListItemId).subscribe(function (res) {
                        __this.userService.getBusinesses().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces établissements ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                BusinessesComponent = __decorate([
                    core_1.Component({
                        selector: 'businesses',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/businesses.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], BusinessesComponent);
                return BusinessesComponent;
            }());
            exports_1("BusinessesComponent", BusinessesComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1;
    var RightSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            RightSidebarComponent = (function () {
                function RightSidebarComponent() {
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id))
                            return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.7&appId=1651155661825692";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                }
                RightSidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'right-sidebar',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/right-sidebar.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RightSidebarComponent);
                return RightSidebarComponent;
            }());
            exports_1("RightSidebarComponent", RightSidebarComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var MyJobPostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            MyJobPostsComponent = (function () {
                function MyJobPostsComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getJobPosts().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                MyJobPostsComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                MyJobPostsComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                MyJobPostsComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteMyJobPosts(parsedListItemId).subscribe(function (res) {
                        __this.userService.getJobPosts().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces expériences ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                MyJobPostsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-job-posts',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/my-job-posts.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], MyJobPostsComponent);
                return MyJobPostsComponent;
            }());
            exports_1("MyJobPostsComponent", MyJobPostsComponent);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JobPost;
    return {
        setters:[],
        execute: function() {
            JobPost = (function () {
                function JobPost(id, title, description, business_id, user_id, job_type_id, job_naming_id, contract_type_id, study_level_id, diploma_id, job_xp_level_id, alert_frequency_id, week_work_hours, start_date, end_date, is_asap, is_hosting_employee, is_urgent) {
                    if (is_asap === void 0) { is_asap = false; }
                    if (is_hosting_employee === void 0) { is_hosting_employee = false; }
                    if (is_urgent === void 0) { is_urgent = false; }
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.business_id = business_id;
                    this.user_id = user_id;
                    this.job_type_id = job_type_id;
                    this.job_naming_id = job_naming_id;
                    this.contract_type_id = contract_type_id;
                    this.study_level_id = study_level_id;
                    this.diploma_id = diploma_id;
                    this.job_xp_level_id = job_xp_level_id;
                    this.alert_frequency_id = alert_frequency_id;
                    this.week_work_hours = week_work_hours;
                    this.start_date = start_date;
                    this.end_date = end_date;
                    this.is_asap = is_asap;
                    this.is_hosting_employee = is_hosting_employee;
                    this.is_urgent = is_urgent;
                }
                return JobPost;
            }());
            exports_1("JobPost", JobPost);
        }
    }
});

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

System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service', './../services/job-post.service', './../models/job-post', './business-select.component', './tiny-mce.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1, job_post_service_1, job_post_1, business_select_component_1, tiny_mce_component_1;
    var CreateJobPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (job_post_service_1_1) {
                job_post_service_1 = job_post_service_1_1;
            },
            function (job_post_1_1) {
                job_post_1 = job_post_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            }],
        execute: function() {
            CreateJobPostComponent = (function () {
                function CreateJobPostComponent(referenceService, userService, jobPostService, routeParams) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    this.jobPostService = jobPostService;
                    this.routeParams = routeParams;
                    this.diplomas = [];
                    this.jobNamings = [];
                    this.alertFrequencies = [];
                    this.contractTypes = [];
                    this.jobTypes = [];
                    this.studyLevels = [];
                    this.jobXpLevels = [];
                    this.jobPost = new job_post_1.JobPost();
                    this.userCanPostJob = false;
                    var __this = this;
                    this.jobPost.id = routeParams.get("jobPostId");
                    if (this.jobPost.id) {
                        this.userCanPostJob = true;
                        // Editing a specific experience, let's retrieve it's data
                        this.jobPostService.get(__this.jobPost.id).subscribe(function (res) {
                            __this.jobPost = res.json();
                        });
                    }
                    /**
                     * Check if user is able to post a new job regarding credits amount on his account
                     */
                    this.userService.getPlans().subscribe(function (res) {
                        var plans = res.json();
                        for (var i = 0; i < plans.length; i++) {
                            if (plans[i]['credits'] > 0) {
                                __this.userCanPostJob = true;
                            }
                        }
                    });
                    this.referenceService.getAllDiplomas().subscribe(function (res) {
                        __this.diplomas = res.json();
                    });
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
                        __this.alertFrequencies = res.json();
                    });
                    this.referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    this.referenceService.getAllJobTypes().subscribe(function (res) {
                        __this.jobTypes = res.json();
                    });
                    this.referenceService.getAllStudyLevels().subscribe(function (res) {
                        __this.studyLevels = res.json();
                    });
                    this.referenceService.getAllJobXpLevels().subscribe(function (res) {
                        __this.jobXpLevels = res.json();
                    });
                }
                CreateJobPostComponent.prototype.submitJobPost = function () {
                    var __this = this;
                    this.jobPostService.create(__this.jobPost).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                CreateJobPostComponent.prototype.handleBusinessIdChange = function (businessId) {
                    this.jobPost.business_id = businessId;
                };
                CreateJobPostComponent.prototype.jobDescriptionChanged = function (newDescription) {
                    this.jobPost.description = newDescription;
                };
                CreateJobPostComponent = __decorate([
                    core_1.Component({
                        selector: 'create-job-post',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService],
                        directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent, tiny_mce_component_1.UNITYTinyMCE],
                        templateUrl: '../templates/create-job-post.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, job_post_service_1.JobPostService, router_deprecated_1.RouteParams])
                ], CreateJobPostComponent);
                return CreateJobPostComponent;
            }());
            exports_1("CreateJobPostComponent", CreateJobPostComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './user-sidebar.component', "./applications.component", "./experiences.component", "./education.component", "./alerts.component", "./testimonials.component", "./create-experience.component", "./create-study.component", "./create-alert.component", "./create-business.component", "./businesses.component", "./right-sidebar.component", './my-job-posts.component', './create-job-post.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, user_sidebar_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1, right_sidebar_component_1, my_job_posts_component_1, create_job_post_component_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_sidebar_component_1_1) {
                user_sidebar_component_1 = user_sidebar_component_1_1;
            },
            function (applications_component_1_1) {
                applications_component_1 = applications_component_1_1;
            },
            function (experiences_component_1_1) {
                experiences_component_1 = experiences_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (alerts_component_1_1) {
                alerts_component_1 = alerts_component_1_1;
            },
            function (testimonials_component_1_1) {
                testimonials_component_1 = testimonials_component_1_1;
            },
            function (create_experience_component_1_1) {
                create_experience_component_1 = create_experience_component_1_1;
            },
            function (create_study_component_1_1) {
                create_study_component_1 = create_study_component_1_1;
            },
            function (create_alert_component_1_1) {
                create_alert_component_1 = create_alert_component_1_1;
            },
            function (create_business_component_1_1) {
                create_business_component_1 = create_business_component_1_1;
            },
            function (businesses_component_1_1) {
                businesses_component_1 = businesses_component_1_1;
            },
            function (right_sidebar_component_1_1) {
                right_sidebar_component_1 = right_sidebar_component_1_1;
            },
            function (my_job_posts_component_1_1) {
                my_job_posts_component_1 = my_job_posts_component_1_1;
            },
            function (create_job_post_component_1_1) {
                create_job_post_component_1 = create_job_post_component_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(userService) {
                    this.userService = userService;
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                ProfileComponent = __decorate([
                    core_1.Component({
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink,
                            router_deprecated_1.RouterOutlet,
                            user_sidebar_component_1.UserSidebarComponent,
                            right_sidebar_component_1.RightSidebarComponent],
                        selector: 'profile',
                        templateUrl: '../templates/profile.component.html',
                    }),
                    router_deprecated_1.RouteConfig([
                        // Root
                        { path: '/show', name: 'Show', component: experiences_component_1.ExperiencesComponent, useAsDefault: true },
                        // Experiences
                        { path: '/experiences/all', name: 'Experiences', component: experiences_component_1.ExperiencesComponent },
                        { path: '/experience/create', name: 'CreateExperience', component: create_experience_component_1.CreateExperienceComponent },
                        { path: '/experience/edit/:experienceId', name: 'EditExperience', component: create_experience_component_1.CreateExperienceComponent },
                        // Applications
                        { path: '/applications/all', name: 'Applications', component: applications_component_1.ApplicationsComponent },
                        // Education
                        { path: '/education/all', name: 'Education', component: education_component_1.EducationComponent },
                        { path: '/education/edit/:studyId', name: 'EditStudy', component: create_study_component_1.CreateStudyComponent },
                        { path: '/education/create', name: 'CreateStudy', component: create_study_component_1.CreateStudyComponent },
                        // Alerts
                        { path: '/alerts/all', name: 'Alerts', component: alerts_component_1.AlertsComponent },
                        { path: '/alert/:alertId', name: 'ShowAlert', component: alerts_component_1.AlertsComponent },
                        { path: '/alert/create', name: 'CreateAlert', component: create_alert_component_1.CreateAlertComponent },
                        { path: '/alert/edit/:alertId', name: 'EditAlert', component: create_alert_component_1.CreateAlertComponent },
                        // Testimonials
                        { path: '/testimonials/all', name: 'Testimonials', component: testimonials_component_1.TestimonialsComponent },
                        { path: '/testimonials/:testimonialId', name: 'Testimonial', component: testimonials_component_1.TestimonialsComponent },
                        // Businesses
                        { path: '/businesses/all', name: 'Businesses', component: businesses_component_1.BusinessesComponent },
                        { path: '/business/create', name: 'CreateBusiness', component: create_business_component_1.CreateBusinessComponent },
                        { path: '/business/edit/:businessId', name: 'EditBusiness', component: create_business_component_1.CreateBusinessComponent },
                        // Job posts
                        { path: '/job-posts/all', name: 'JobPosts', component: my_job_posts_component_1.MyJobPostsComponent },
                        { path: '/job-post/create', name: 'CreateJobPost', component: create_job_post_component_1.CreateJobPostComponent },
                        { path: '/job-post/edit/:jobPostId', name: 'EditJobPost', component: create_job_post_component_1.CreateJobPostComponent },
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/club.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, club_service_1;
    var ClubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (club_service_1_1) {
                club_service_1 = club_service_1_1;
            }],
        execute: function() {
            ClubComponent = (function () {
                function ClubComponent(routeParams, clubService) {
                    this.routeParams = routeParams;
                    this.clubService = clubService;
                    var __this = this;
                    this.clubId = routeParams.get("clubId");
                    clubService.getClub(__this.clubId).subscribe(function (res) {
                        __this.club = res.json();
                    });
                }
                ClubComponent = __decorate([
                    core_1.Component({
                        providers: [club_service_1.ClubService],
                        inputs: ['clubId'],
                        selector: 'club',
                        templateUrl: '../templates/club.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, club_service_1.ClubService])
                ], ClubComponent);
                return ClubComponent;
            }());
            exports_1("ClubComponent", ClubComponent);
        }
    }
});

System.register(['@angular/core', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var SignUpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent() {
                }
                SignUpComponent = __decorate([
                    core_1.Component({
                        providers: [user_service_1.UserService],
                        selector: 'sign-up',
                        templateUrl: '../templates/sign-up.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});

System.register(['@angular/core', './../services/job.service', './job-preview.component'], function(exports_1, context_1) {
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
    var core_1, job_service_1, job_preview_component_1;
    var JobSearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (job_preview_component_1_1) {
                job_preview_component_1 = job_preview_component_1_1;
            }],
        execute: function() {
            JobSearchResultsComponent = (function () {
                function JobSearchResultsComponent(jobService) {
                    this.jobService = jobService;
                    var __this = this;
                    jobService.getAllJobs().subscribe(function (res) {
                        __this.jobs = res.json();
                    });
                }
                JobSearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'job-search-results',
                        directives: [job_preview_component_1.JobPreviewComponent],
                        providers: [job_service_1.JobService],
                        templateUrl: '../templates/job-search-results.component.html',
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService])
                ], JobSearchResultsComponent);
                return JobSearchResultsComponent;
            }());
            exports_1("JobSearchResultsComponent", JobSearchResultsComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './job-search-bar.component', './job-search-results.component', './job-search-sidebar.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_search_bar_component_1, job_search_results_component_1, job_search_sidebar_component_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (job_search_bar_component_1_1) {
                job_search_bar_component_1 = job_search_bar_component_1_1;
            },
            function (job_search_results_component_1_1) {
                job_search_results_component_1 = job_search_results_component_1_1;
            },
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(routeParams) {
                    this.routeParams = routeParams;
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        directives: [job_search_results_component_1.JobSearchResultsComponent,
                            job_search_sidebar_component_1.JobSearchSidebarComponent,
                            job_search_bar_component_1.JobSearchBarComponent],
                        templateUrl: '../templates/search.component.html',
                        selector: 'search',
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/notification.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, notification_service_1;
    var NotificationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            NotificationsComponent = (function () {
                function NotificationsComponent(_notifications) {
                    var _this = this;
                    this._notifications = _notifications;
                    this._notes = new Array();
                    _notifications.noteAdded.subscribe(function (note) {
                        _this._notes.push(note);
                        setTimeout(function () { _this.hide.bind(_this)(note); }, 5000);
                    });
                }
                NotificationsComponent.prototype.hide = function (note) {
                    var index = this._notes.indexOf(note);
                    if (index >= 0) {
                        this._notes.splice(index, 1);
                    }
                };
                NotificationsComponent = __decorate([
                    core_1.Component({
                        selector: 'notifications',
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/notification.component.html'
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationsService])
                ], NotificationsComponent);
                return NotificationsComponent;
            }());
            exports_1("NotificationsComponent", NotificationsComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './home.component', './job.component', './post.component', './header.component', './footer.component', './profile.component', './club.component', './sign-up.component', './search.component', './new-application-form.component', './notification.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, home_component_1, job_component_1, post_component_1, header_component_1, footer_component_1, profile_component_1, club_component_1, sign_up_component_1, search_component_1, new_application_form_component_1, notification_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (club_component_1_1) {
                club_component_1 = club_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(viewContainerRef) {
                    // You need this small hack in order to catch application root view container ref
                    this.viewContainerRef = viewContainerRef;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.RouterOutlet,
                            home_component_1.HomeComponent,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            search_component_1.SearchComponent,
                            new_application_form_component_1.NewApplicationFormComponent,
                            notification_component_1.NotificationsComponent],
                        selector: 'app',
                        templateUrl: '/templates/app.component.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        // Root
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        // Jobs
                        { path: '/job/:jobId/', name: 'ShowJob', component: job_component_1.JobComponent },
                        { path: '/jobs/search/', name: 'ShowAllJobs', component: search_component_1.SearchComponent },
                        { path: '/jobs/search/:stateId/:jobNamingId/:contractTypeId/:searchText',
                            name: 'SearchJobs', component: search_component_1.SearchComponent },
                        { path: '/apply/:jobId', name: 'Apply', component: new_application_form_component_1.NewApplicationFormComponent },
                        // Posts
                        { path: '/post/:postId/', name: 'ShowPost', component: post_component_1.PostComponent },
                        // Clubs
                        { path: '/club/:clubId', name: 'ShowClub', component: club_component_1.ClubComponent },
                        // User
                        { path: '/sign-up/', name: 'SignUp', component: sign_up_component_1.SignUpComponent },
                        { path: '/profile/...', name: 'Profile', component: profile_component_1.ProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/core', '@angular/common', '@angular/router-deprecated', './components/app.component', './services/notification.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, core_1, common_1, router_deprecated_1, app_component_1, notification_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                notification_service_1.NotificationsService,
                router_deprecated_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]).catch(console.error);
        }
    }
});

System.register(['./app.component', '@angular/core/testing', '@angular/compiler/testing', '@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, testing_1, testing_2, platform_browser_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            ////////  SPECS  /////////////
            /// Delete this
            testing_1.describe('Smoke test', function () {
                testing_1.it('should run a passing test', function () {
                    testing_1.expect(true).toEqual(true, 'should pass');
                });
            });
            testing_1.describe('AppComponent with TCB', function () {
                testing_1.it('should instantiate component', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                    tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
                        testing_1.expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
                    });
                })));
                testing_1.it('should have expected <h1> text', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                    tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
                        // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding
                        var h1 = fixture.debugElement.query(function (el) { return el.name === 'h1'; }).nativeElement; // it works
                        h1 = fixture.debugElement.query(platform_browser_1.By.css('h1')).nativeElement; // preferred
                        testing_1.expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
                    });
                })));
            });
        }
    }
});
