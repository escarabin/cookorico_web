"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var option_1 = require('./../../models/option');
var WebsiteEditorComponent = (function () {
    function WebsiteEditorComponent(websiteEditorService, notificationService, referenceService) {
        this.websiteEditorService = websiteEditorService;
        this.notificationService = notificationService;
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
                    var placeId_1 = urlParams[2].split('/')[3];
                    var jobNamingId_1 = urlParams[2].split('/')[4];
                    /**
                     * Get google maps data from placeId using reverse geocoding API
                     */
                    geocoder.geocode({ 'placeId': placeId_1 }, function (results) {
                        var place = results[0];
                        console.log('retrieved a place', placeId_1);
                        urlParams = { title: urlTitleAndDesc_1[2], description: urlTitleAndDesc_1[3], path: urlParams[1], jobNamingId: jobNamingId_1, place: place };
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
            console.log(res);
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
     * Parse google places address and save it
     * @param place
     * @param catId
     */
    WebsiteEditorComponent.prototype.parseAddress = function (place, catId) {
        this.trafficDrivenCats[catId]['place'] = place;
    };
    /**
     * Remove specific SEO traffic driven category
     * @param catId
     */
    WebsiteEditorComponent.prototype.removeTrafficDriventCat = function (catId) {
        this.trafficDrivenCats.splice(catId, 1);
    };
    WebsiteEditorComponent.prototype.catDescriptionChanged = function (newDesc, catId) {
        this.trafficDrivenCats[catId]['description'] = newDesc;
    };
    WebsiteEditorComponent = __decorate([
        core_1.Component({
            selector: 'website-editor',
            templateUrl: '../../../templates/website-editor.component.html'
        })
    ], WebsiteEditorComponent);
    return WebsiteEditorComponent;
}());
exports.WebsiteEditorComponent = WebsiteEditorComponent;
