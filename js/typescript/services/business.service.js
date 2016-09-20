System.register(['@angular/core', '@angular/http', './../globals'], function(exports_1, context_1) {
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
    var core_1, http_1, appGlobals;
    var BusinessService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appGlobals_1) {
                appGlobals = appGlobals_1;
            }],
        execute: function() {
            BusinessService = (function () {
                function BusinessService(http) {
                    this.http = http;
                    this.createBusinessUrl = appGlobals.apiUrl + "/business/create";
                    this.getBusinessUrl = appGlobals.apiUrl + "/business";
                    this.getAllBusinessesUrl = appGlobals.apiUrl + "/businesses/all";
                    this.postRequestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.postRequestOptions = new http_1.RequestOptions({ headers: this.postRequestHeaders });
                }
                /**
                 * Create a new business with its related place
                 * @param business
                 * @param place
                 * @returns {Observable<Response>}
                 */
                BusinessService.prototype.create = function (business, place) {
                    var requestBody = JSON.stringify({ business: business, place: place });
                    return this.http.post(this.createBusinessUrl, requestBody, this.postRequestOptions);
                };
                /**
                 * List all businesses
                 * @returns {Observable<Response>}
                 */
                BusinessService.prototype.getAll = function () {
                    return this.http.request(this.getAllBusinessesUrl);
                };
                /**
                 * Get specific business data from its id
                 * @param businessId
                 * @returns {Observable<Response>}
                 */
                BusinessService.prototype.get = function (businessId) {
                    return this.http.get(this.getBusinessUrl + '/' + businessId);
                };
                BusinessService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BusinessService);
                return BusinessService;
            }());
            exports_1("BusinessService", BusinessService);
        }
    }
});
