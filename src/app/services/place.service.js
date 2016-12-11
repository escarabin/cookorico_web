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
var PlaceService = (function () {
    function PlaceService(http) {
        this.http = http;
        this.savePlaceUrl = globals_1.apiUrl + "/place/save";
        this.defaultPostRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.defaultPostRequestOptions = new http_1.RequestOptions({ headers: this.defaultPostRequestHeaders });
    }
    /**
     * Save a new place
     * @param place
     * @returns {Observable<Response>}
     */
    PlaceService.prototype.save = function (place) {
        var requestBody = JSON.stringify({ place: place });
        return this.http.post(this.savePlaceUrl, requestBody, this.defaultPostRequestOptions);
    };
    PlaceService = __decorate([
        core_1.Injectable()
    ], PlaceService);
    return PlaceService;
}());
exports.PlaceService = PlaceService;
