"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var globals_1 = require('../globals');
var ApplicationService = (function () {
    function ApplicationService(http) {
        this.http = http;
        this.acceptApplicationUrl = globals_1.apiUrl + "/application/accept";
        this.rejectApplicationUrl = globals_1.apiUrl + "/application/reject";
    }
    /**
     * Rejects specific application
     * @param applicationId
     */
    ApplicationService.prototype.accept = function (applicationId) {
        return this.http.request(this.acceptApplicationUrl + '/' + applicationId);
    };
    /**
     * Rejects specific application
     * @param applicationId
     */
    ApplicationService.prototype.reject = function (applicationId) {
        return this.http.request(this.rejectApplicationUrl + '/' + applicationId);
    };
    ApplicationService = __decorate([
        core_1.Injectable()
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
