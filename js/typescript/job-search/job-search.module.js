System.register(['@angular/core', '@angular/forms', '@angular/common', './job-search.routes', 'ng2-bootstrap/ng2-bootstrap', './components/job.component', './components/new-application-form.component', './components/job-preview.component', './../components/custom-pagination.component', './../job-search/components/job-search-sidebar.component', './../components/tiny-mce.component'], function(exports_1, context_1) {
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
    var core_1, forms_1, common_1, job_search_routes_1, ng2_bootstrap_1, job_component_1, new_application_form_component_1, job_preview_component_1, custom_pagination_component_1, job_search_sidebar_component_1, tiny_mce_component_1;
    var JobSearchModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (job_search_routes_1_1) {
                job_search_routes_1 = job_search_routes_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (job_preview_component_1_1) {
                job_preview_component_1 = job_preview_component_1_1;
            },
            function (custom_pagination_component_1_1) {
                custom_pagination_component_1 = custom_pagination_component_1_1;
            },
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            }],
        execute: function() {
            JobSearchModule = (function () {
                function JobSearchModule() {
                }
                JobSearchModule = __decorate([
                    core_1.NgModule({
                        declarations: [job_component_1.JobComponent,
                            new_application_form_component_1.NewApplicationFormComponent,
                            job_preview_component_1.JobPreviewComponent,
                            job_search_sidebar_component_1.JobSearchSidebarComponent,
                            ng2_bootstrap_1.CollapseDirective,
                            ng2_bootstrap_1.MODAL_DIRECTIVES,
                            tiny_mce_component_1.UNITYTinyMCE,
                            custom_pagination_component_1.CustomPaginationComponent],
                        imports: [job_search_routes_1.jobSearchRouting,
                            common_1.CommonModule,
                            forms_1.FormsModule],
                        providers: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], JobSearchModule);
                return JobSearchModule;
            }());
            exports_1("JobSearchModule", JobSearchModule);
        }
    }
});
