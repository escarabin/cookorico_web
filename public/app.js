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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], JobService);
                return JobService;
                var _a;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], PostService);
                return PostService;
                var _a;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ClubService);
                return ClubService;
                var _a;
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
                    this.getAlertFrequenciesListingUrl = '/alert_frequencies/all';
                    this.getAllBusinessTypesListingUrl = '/business_types/all';
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
                ReferenceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ReferenceService);
                return ReferenceService;
                var _a;
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
                    referenceService.getAllContractTypes().subscribe(function (res) {
                        __this.contractTypes = res.json();
                    });
                    referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
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

System.register(['@angular/core', '@angular/router-deprecated', './../services/job.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, job_service_1;
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
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', String)
                ], NewApplicationFormComponent.prototype, "jobId", void 0);
                NewApplicationFormComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.RouterLink],
                        providers: [job_service_1.JobService],
                        selector: 'new-application-form',
                        templateUrl: '../templates/new-application-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, job_service_1.JobService, (typeof (_b = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _b) || Object])
                ], NewApplicationFormComponent);
                return NewApplicationFormComponent;
                var _a, _b;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, job_service_1.JobService])
                ], JobComponent);
                return JobComponent;
                var _a;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
                var _a;
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
                function Notification(type, message) {
                    if (type === void 0) { type = ''; }
                    if (message === void 0) { message = ''; }
                    this.type = type;
                    this.message = message;
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
                    this.getExperiencesUrl = '/experiences/all';
                    this.getExperienceUrl = '/experience';
                    this.getEducationUrl = '/education/all';
                    this.getAlertsUrl = '/alerts/all';
                    this.getBusinessesUrl = '/user/businesses';
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
                 * Get user's education
                 */
                UserService.prototype.getEducation = function () {
                    var __this = this;
                    return this.http.get(__this.getEducationUrl);
                };
                /**
                 * Get user's new job alerts
                 */
                UserService.prototype.getAlerts = function () {
                    var __this = this;
                    return this.http.get(__this.getAlertsUrl);
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
                UserService.prototype.saveAlertChanges = function (alert) {
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, notification_service_1.NotificationsService])
                ], UserService);
                return UserService;
                var _a;
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
                    __metadata('design:paramtypes', [user_service_1.UserService, (typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object])
                ], HeaderComponent);
                return HeaderComponent;
                var _a;
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
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.userProfilePicturePath = 'url(/uploads/user/pp/' + this.user.id + '.jpg)';
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
            }],
        execute: function() {
            ExperiencesComponent = (function () {
                function ExperiencesComponent(userService) {
                    this.userService = userService;
                    var __this = this;
                    this.userService.getExperiences().subscribe(function (res) {
                        __this.experiences = res.json();
                    });
                }
                ExperiencesComponent = __decorate([
                    core_1.Component({
                        selector: 'experiences',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/experiences.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ExperiencesComponent);
                return ExperiencesComponent;
            }());
            exports_1("ExperiencesComponent", ExperiencesComponent);
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
            }],
        execute: function() {
            EducationComponent = (function () {
                function EducationComponent(userService) {
                    this.userService = userService;
                    var __this = this;
                    this.userService.getEducation().subscribe(function (res) {
                        __this.studies = res.json();
                    });
                }
                EducationComponent = __decorate([
                    core_1.Component({
                        selector: 'experiences',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/education.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
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
            }],
        execute: function() {
            AlertsComponent = (function () {
                function AlertsComponent(userService) {
                    this.userService = userService;
                    var __this = this;
                    this.userService.getAlerts().subscribe(function (res) {
                        __this.alerts = res.json();
                    });
                }
                AlertsComponent = __decorate([
                    core_1.Component({
                        selector: 'alerts',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/alerts.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], BusinessService);
                return BusinessService;
                var _a;
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
                    // Parse website
                    var website = "";
                    if (place['website']) {
                        website = place['website'].replace(/\//g, '');
                    }
                    for (var i = 0; i < types.length; i++) {
                        typesString += types[i] + ',';
                    }
                    var completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + place['address_components'][2]['long_name'] +
                        '/' + postalCode +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + typesString +
                        '/' + place['name'] +
                        '/' + place['phone'] +
                        '/' + website;
                    return this.http.request(completeUrl);
                };
                PlaceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], PlaceService);
                return PlaceService;
                var _a;
            }());
            exports_1("PlaceService", PlaceService);
        }
    }
});

System.register(['@angular/core', './../services/business.service', './../services/place.service', 'angular2-google-map-auto-complete/directives/googleplace.directive'], function(exports_1, context_1) {
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
    var core_1, business_service_1, place_service_1, googleplace_directive_1;
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
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            }],
        execute: function() {
            BusinessSelectComponent = (function () {
                function BusinessSelectComponent(businessService, placeService) {
                    this.businessService = businessService;
                    this.placeService = placeService;
                    this.businesses = [];
                    this.isGooglePlaceInput = false;
                    this.businessIdChange = new core_1.EventEmitter();
                    var __this = this;
                    businessService.getAll().subscribe(function (res) {
                        __this.businesses = res.json();
                    });
                }
                BusinessSelectComponent.prototype.parseAdress = function (place) {
                    var __this = this;
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
                BusinessSelectComponent.prototype.businessIdChanged = function () {
                    this.businessIdChange.emit(this.businessId);
                };
                __decorate([
                    core_1.Input, 
                    __metadata('design:type', Number)
                ], BusinessSelectComponent.prototype, "businessId", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], BusinessSelectComponent.prototype, "businessIdChange", void 0);
                BusinessSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'business-select',
                        providers: [business_service_1.BusinessService, place_service_1.PlaceService],
                        directives: [googleplace_directive_1.GoogleplaceDirective],
                        templateUrl: '../templates/business-select.component.html',
                        inputs: ['businessId']
                    }), 
                    __metadata('design:paramtypes', [business_service_1.BusinessService, place_service_1.PlaceService])
                ], BusinessSelectComponent);
                return BusinessSelectComponent;
                var _a;
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
                            __this.notificationService.show(new notification_1.Notification('success', 'Votre expérience a bien été crée'));
                        });
                    }
                    else {
                        this.userService.updateExperience(__this.experience.id, __this.experience.job_naming_id, __this.experience.business_id, __this.experience.start_date, __this.experience.end_date, __this.experience.description).subscribe(function (res) {
                            __this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
                        });
                    }
                };
                CreateExperienceComponent.prototype.handleBusinessIdChange = function (businessId) {
                    this.experience.business_id = businessId;
                    console.log('Business id changed', businessId);
                };
                CreateExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink, business_select_component_1.BusinessSelectComponent],
                        templateUrl: '../templates/create-experience.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, notification_service_1.NotificationsService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
                ], CreateExperienceComponent);
                return CreateExperienceComponent;
                var _a;
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
                    this.userService.saveAlertChanges(__this.alert).subscribe(function (res) {
                    });
                };
                CreateAlertComponent = __decorate([
                    core_1.Component({
                        selector: 'create-alert',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/create-alert.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
                ], CreateAlertComponent);
                return CreateAlertComponent;
                var _a;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], LocationService);
                return LocationService;
                var _a;
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], FileUploadService);
                return FileUploadService;
                var _a;
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
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService, business_service_1.BusinessService, file_upload_service_1.FileUploadService, location_service_1.LocationService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
                ], CreateBusinessComponent);
                return CreateBusinessComponent;
                var _a;
            }());
            exports_1("CreateBusinessComponent", CreateBusinessComponent);
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
            }],
        execute: function() {
            BusinessesComponent = (function () {
                function BusinessesComponent(userService) {
                    this.userService = userService;
                    var __this = this;
                    this.userService.getBusinesses().subscribe(function (res) {
                        __this.businesses = res.json();
                    });
                }
                BusinessesComponent = __decorate([
                    core_1.Component({
                        selector: 'businesses',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/businesses.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], BusinessesComponent);
                return BusinessesComponent;
            }());
            exports_1("BusinessesComponent", BusinessesComponent);
        }
    }
});

System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './user-sidebar.component', "./applications.component", "./experiences.component", "./education.component", "./alerts.component", "./testimonials.component", "./create-experience.component", "./create-study.component", "./create-alert.component", "./create-business.component", "./businesses.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, user_sidebar_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1;
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
                            user_sidebar_component_1.UserSidebarComponent],
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
                        { path: '/business/edit/:businessId', name: 'EditBusiness', component: create_business_component_1.CreateBusinessComponent }
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, club_service_1.ClubService])
                ], ClubComponent);
                return ClubComponent;
                var _a;
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
                        inputs: ['clubId'],
                        selector: 'club',
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
                ], SearchComponent);
                return SearchComponent;
                var _a;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

System.register(['@angular/core', './../services/notification.service'], function(exports_1, context_1) {
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
    var core_1, notification_service_1;
    var NotificationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        setTimeout(function () { _this.hide.bind(_this)(note); }, 3000);
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
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
