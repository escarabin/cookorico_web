"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var globals_1 = require('../globals');
var WebsiteEditorService = (function () {
    function WebsiteEditorService(http) {
        this.http = http;
        this.saveOptionUrl = globals_1.apiUrl + "/option/save";
        this.getTrafficDrivenCatsUrl = globals_1.apiUrl + "/website_editor/traffic_cats";
        this.saveTrafficDrivenCatsUrl = globals_1.apiUrl + "/website_editor/save_traffic_cats";
    }
    /**
     * Save an option value
     * @param Option
     * @returns {any}
     */
    WebsiteEditorService.prototype.saveOption = function (option) {
        var body = JSON.stringify({ option: option });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.saveOptionUrl, body, options);
    };
    /**
     * Get traffic driven categories listing (SEO urls)
     * @returns {any}
     */
    WebsiteEditorService.prototype.getTraficDrivenCategories = function () {
        return this.http.get(this.getTrafficDrivenCatsUrl);
    };
    /**
     * Save traffic driven categories listing (SEO urls)
     * @returns {any}
     */
    WebsiteEditorService.prototype.saveTraficDrivenCategories = function (trafficDrivenCats) {
        var body = JSON.stringify({ trafficDrivenCats: trafficDrivenCats });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.saveTrafficDrivenCatsUrl, body, options);
    };
    WebsiteEditorService = __decorate([
        core_1.Injectable()
    ], WebsiteEditorService);
    return WebsiteEditorService;
}());
exports.WebsiteEditorService = WebsiteEditorService;
