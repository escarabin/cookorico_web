System.register(['@angular/core', '@angular/common', '@angular/forms', './../../services/website-editor.service', './../../services/reference.service', './../../models/option'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, website_editor_service_1, reference_service_1, option_1;
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
            function (website_editor_service_1_1) {
                website_editor_service_1 = website_editor_service_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (option_1_1) {
                option_1 = option_1_1;
            }],
        execute: function() {
            WebsiteEditorComponent = (function () {
                function WebsiteEditorComponent(websiteEditorService, referenceService) {
                    this.websiteEditorService = websiteEditorService;
                    this.referenceService = referenceService;
                    this.jobNamings = [];
                    this.trafficDrivenCats = [];
                    var __this = this;
                    this.referenceService.getAllJobNamings().subscribe(function (res) {
                        __this.jobNamings = res.json();
                    });
                    var geocoder = new google.maps.Geocoder;
                    this.websiteEditorService.getTraficDrivenCategories().subscribe(function (res) {
                        var htaccessList = res.json();
                        var _loop_1 = function(i) {
                            var urlParams = htaccessList[i];
                            if (urlParams) {
                                var urlTitleAndDesc_1 = urlParams.split('#');
                                urlParams = urlParams.split(' ');
                                delete urlParams[0];
                                var placeId = urlParams[2].split('/')[2];
                                var jobNamingId_1 = urlParams[2].split('/')[3];
                                /**
                                 * Get google maps data from placeId using reverse geocoding API
                                 */
                                geocoder.geocode({ 'placeId': placeId }, function (results) {
                                    var place = results[0];
                                    urlParams = { title: urlTitleAndDesc_1[1], description: urlTitleAndDesc_1[2], path: urlParams[1], jobNamingId: jobNamingId_1, place: place };
                                    __this.trafficDrivenCats.push(urlParams);
                                });
                            }
                        };
                        for (var i = 1; i < Object.keys(htaccessList).length + 1; i++) {
                            _loop_1(i);
                        }
                    });
                }
                WebsiteEditorComponent.prototype.saveTrafficDrivenCategories = function () {
                    this.websiteEditorService.saveTraficDrivenCategories(this.trafficDrivenCats).subscribe(function (res) {
                        console.log(res.json());
                    });
                };
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
                /**
                 * Remove specific SEO traffic driven category
                 * @param catId
                 */
                WebsiteEditorComponent.prototype.removeTrafficDriventCat = function (catId) {
                    delete this.trafficDrivenCats[catId];
                };
                WebsiteEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'website-editor',
                        directives: [common_1.CORE_DIRECTIVES,
                            forms_1.FORM_DIRECTIVES],
                        providers: [website_editor_service_1.WebsiteEditorService, reference_service_1.ReferenceService],
                        templateUrl: '../templates/website-editor.component.html',
                    }), 
                    __metadata('design:paramtypes', [website_editor_service_1.WebsiteEditorService, reference_service_1.ReferenceService])
                ], WebsiteEditorComponent);
                return WebsiteEditorComponent;
            }());
            exports_1("WebsiteEditorComponent", WebsiteEditorComponent);
        }
    }
});
