System.register(['@angular/core', '@angular/router', './../../services/job.service', './../../services/business.service'], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1, business_service_1;
    var BusinessPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (business_service_1_1) {
                business_service_1 = business_service_1_1;
            }],
        execute: function() {
            BusinessPageComponent = (function () {
                function BusinessPageComponent(jobService, businessService, route) {
                    this.jobService = jobService;
                    this.businessService = businessService;
                    this.route = route;
                    this.jobs = [];
                    this.business = [];
                    var __this = this;
                    /**
                     * Get all jobs related to current business
                     */
                    route.params.subscribe(function (params) {
                        if (params) {
                            __this.businessId = params['businessId'];
                            /**
                             * Get jobs listing
                             */
                            __this.jobService.getJobsFromBusiness(__this.businessId).subscribe(function (results) {
                                __this.jobs = results.json();
                            });
                            /**
                             * Get specific business data
                             */
                            __this.businessService.get(__this.businessId).subscribe(function (res) {
                                __this.business = res.json();
                                console.log('business is ', __this.business);
                            });
                        }
                    });
                }
                BusinessPageComponent = __decorate([
                    core_1.Component({
                        selector: 'business-page',
                        providers: [job_service_1.JobService, business_service_1.BusinessService],
                        templateUrl: '../templates/business-page.component.html',
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService, business_service_1.BusinessService, router_1.ActivatedRoute])
                ], BusinessPageComponent);
                return BusinessPageComponent;
            }());
            exports_1("BusinessPageComponent", BusinessPageComponent);
        }
    }
});
