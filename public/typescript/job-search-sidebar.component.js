System.register(['@angular/core', '@angular/router-deprecated', 'ng2-bootstrap', './reference.service'], function(exports_1, context_1) {
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
