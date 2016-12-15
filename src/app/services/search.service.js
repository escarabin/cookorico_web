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
var SearchService = (function () {
    function SearchService(jobService, http) {
        this.jobService = jobService;
        this.http = http;
        this.parametersEmitter = new core_1.EventEmitter();
        this.resultsEmitter = new core_1.EventEmitter();
        this.mapModeEmitter = new core_1.EventEmitter();
        this.isMapModeEnabled = false;
        this.getSeoDataFromPathUrl = globals_1.apiUrl + '/seo-route';
        this.parametersEmitter = new core_1.EventEmitter();
        this.resultsEmitter = new core_1.EventEmitter();
        this.mapModeEmitter = new core_1.EventEmitter();
    }
    SearchService.prototype.search = function (params) {
        var __this = this;
        /**
         * Emit search parameters to other subscribed components
         */
        if (params) {
            this.parametersEmitter.emit(params);
            console.log('[search-service] searching for jobs with params', params);
            /**
             * Search jobs via job-service & emit results
             */
            this.jobService.searchJobs(params).subscribe(function (results) {
                __this.resultsEmitter.emit(results);
            });
        }
        else {
            console.log('[search-service] getting all jobs');
            /**
             * Get all jobs via job-service & emit results
             */
            this.jobService.getAllJobs().subscribe(function (results) {
                __this.resultsEmitter.emit(results);
            });
        }
    };
    SearchService.prototype.toggleMapSearch = function (place) {
        this.isMapModeEnabled = !this.isMapModeEnabled;
        this.mapModeEmitter.emit(place);
    };
    SearchService.prototype.getSeoDataFromPath = function (redirectionUrl) {
        var body = JSON.stringify({ redirectionUrl: redirectionUrl });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getSeoDataFromPathUrl, body, options);
    };
    SearchService = __decorate([
        core_1.Injectable()
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
