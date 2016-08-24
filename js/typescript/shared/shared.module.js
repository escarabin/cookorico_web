System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', 'ng2-bootstrap/ng2-bootstrap', './../components/tiny-mce.component', 'ng2-select/ng2-select'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, ng2_bootstrap_1, tiny_mce_component_1, ng2_select_1;
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
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
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
                            ng2_select_1.SELECT_DIRECTIVES],
                        exports: [ng2_bootstrap_1.MODAL_DIRECTIVES,
                            tiny_mce_component_1.UNITYTinyMCE,
                            ng2_bootstrap_1.CollapseDirective,
                            ng2_select_1.SELECT_DIRECTIVES],
                        imports: [platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SharedModule);
                return SharedModule;
            }());
            exports_1("SharedModule", SharedModule);
        }
    }
});
