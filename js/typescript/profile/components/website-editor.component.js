System.register(['@angular/core', '@angular/common', '@angular/forms', 'ng2-bootstrap', './../../services/website-editor.service', './../../models/option'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, ng2_bootstrap_1, website_editor_service_1, option_1;
    var WebsiteEditorComponent;
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
            function (website_editor_service_1_1) {
                website_editor_service_1 = website_editor_service_1_1;
            },
            function (option_1_1) {
                option_1 = option_1_1;
            }],
        execute: function() {
            WebsiteEditorComponent = (function () {
                function WebsiteEditorComponent(websiteEditorService) {
                    this.websiteEditorService = websiteEditorService;
                }
                /**
                 * Triggered after a change in home banner changed
                 * @param newPromoContent
                 */
                WebsiteEditorComponent.prototype.homeBannerHtmlChanged = function (newPromoContent) {
                    this.homeBannerHtmlContent = newPromoContent;
                };
                /**
                 * Save home banner HTML content from tinyMCE editor
                 */
                WebsiteEditorComponent.prototype.saveHomeBannerHtml = function () {
                    var option = new option_1.Option('home_banner_content', this.homeBannerHtmlContent);
                    this.websiteEditorService.saveOption(option).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                /**
                 * Save partners displayed on home page
                 */
                WebsiteEditorComponent.prototype.saveHomePartners = function () {
                    console.log('partners', this.homePartnersIdList);
                };
                /**
                 * Triggered after a change on business-select
                 * @param businessIdList
                 */
                WebsiteEditorComponent.prototype.handleBusinessIdListChange = function (businessIdList) {
                    this.homePartnersIdList = businessIdList;
                };
                WebsiteEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'website-editor',
                        directives: [ng2_bootstrap_1.ACCORDION_DIRECTIVES,
                            common_1.CORE_DIRECTIVES,
                            forms_1.FORM_DIRECTIVES],
                        providers: [website_editor_service_1.WebsiteEditorService],
                        templateUrl: '../templates/website-editor.component.html',
                    }), 
                    __metadata('design:paramtypes', [website_editor_service_1.WebsiteEditorService])
                ], WebsiteEditorComponent);
                return WebsiteEditorComponent;
            }());
            exports_1("WebsiteEditorComponent", WebsiteEditorComponent);
        }
    }
});
