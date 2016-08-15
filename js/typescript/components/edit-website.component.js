System.register(['@angular/core', '@angular/common', '@angular/forms', 'ng2-bootstrap', './tiny-mce.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, ng2_bootstrap_1, tiny_mce_component_1;
    var EditWebsiteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            }],
        execute: function() {
            EditWebsiteComponent = (function () {
                function EditWebsiteComponent() {
                }
                EditWebsiteComponent.prototype.homePromoChanged = function (newPromoContent) {
                };
                EditWebsiteComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-website',
                        directives: [ng2_bootstrap_1.ACCORDION_DIRECTIVES,
                            common_1.CORE_DIRECTIVES,
                            forms_1.FORM_DIRECTIVES,
                            tiny_mce_component_1.UNITYTinyMCE],
                        templateUrl: '../templates/edit-website.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditWebsiteComponent);
                return EditWebsiteComponent;
            }());
            exports_1("EditWebsiteComponent", EditWebsiteComponent);
        }
    }
});