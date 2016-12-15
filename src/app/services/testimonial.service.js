"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var globals_1 = require('../globals');
var TestimonialService = (function () {
    function TestimonialService(http) {
        this.http = http;
        this.requestTestimonialUrl = globals_1.apiUrl + '/testimonial/request';
    }
    /**
     * Request a testimonial as a candidate
     * @param businessId
     * @param experienceId
     * @returns {Observable<Response>}
     */
    TestimonialService.prototype.requestTestimonial = function (businessId, experienceId) {
        return this.http.get(this.requestTestimonialUrl + '/' + businessId + '/' + experienceId);
    };
    TestimonialService = __decorate([
        core_1.Injectable()
    ], TestimonialService);
    return TestimonialService;
}());
exports.TestimonialService = TestimonialService;
