System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/router', '@angular2-material/checkbox', 'ng2-bootstrap/ng2-bootstrap', 'ng2-select/ng2-select', 'angular2-google-map-auto-complete/directives/googleplace.directive', './components/tiny-mce.component', './components/job-preview.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, router_1, checkbox_1, ng2_bootstrap_1, ng2_select_1, googleplace_directive_1, tiny_mce_component_1, job_preview_component_1;
    var SharedModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            },
            function (job_preview_component_1_1) {
                job_preview_component_1 = job_preview_component_1_1;
            }],
        execute: function() {
            SharedModule = (function () {
                function SharedModule() {
                }
                SharedModule = __decorate([
                    core_1.NgModule({
                        declarations: [ng2_bootstrap_1.MODAL_DIRECTIVES,
                            tiny_mce_component_1.UNITYTinyMCE,
                            ng2_bootstrap_1.CollapseDirective,
                            checkbox_1.MD_CHECKBOX_DIRECTIVES,
                            ng2_select_1.SELECT_DIRECTIVES,
                            job_preview_component_1.JobPreviewComponent,
                            googleplace_directive_1.GoogleplaceDirective],
                        exports: [ng2_bootstrap_1.MODAL_DIRECTIVES,
                            tiny_mce_component_1.UNITYTinyMCE,
                            ng2_bootstrap_1.CollapseDirective,
                            job_preview_component_1.JobPreviewComponent,
                            ng2_select_1.SELECT_DIRECTIVES,
                            googleplace_directive_1.GoogleplaceDirective],
                        imports: [platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            router_1.RouterModule],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SharedModule);
                return SharedModule;
            }());
            exports_1("SharedModule", SharedModule);
        }
    }
});
