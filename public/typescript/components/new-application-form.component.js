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
