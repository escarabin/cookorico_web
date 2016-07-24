System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PlaceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PlaceService = (function () {
                function PlaceService(http) {
                    this.http = http;
                    this.savePlaceUrl = "/place/save";
                }
                PlaceService.prototype.save = function (place) {
                    var location = place['geometry']['location'];
                    var types = place['types'];
                    var typesString = "";
                    // Parse postal code
                    var postalCode = "";
                    if (place['address_components'][6]) {
                        postalCode = place['address_components'][6]['long_name'];
                    }
                    else if (place['address_components'][5]) {
                        postalCode = place['address_components'][5]['long_name'];
                    }
                    // Parse city
                    var city = "";
                    if (place['address_components'][2]) {
                        city = place['address_components'][2]['long_name'];
                    }
                    // Parse website
                    var website = "";
                    if (place['website']) {
                        website = place['website'].replace(/\//g, '');
                    }
                    // Parse phone
                    var phone = "";
                    if (place['phone']) {
                        phone = place['phone'];
                    }
                    for (var i = 0; i < types.length; i++) {
                        typesString += types[i] + ',';
                    }
                    var completeUrl = this.savePlaceUrl +
                        '/' + place['place_id'] +
                        '/' + place['formatted_address'] +
                        '/' + location.lat() +
                        '/' + location.lng() +
                        '/' + place['geometry']['viewport']['f']['b'] +
                        '/' + place['geometry']['viewport']['b']['b'] +
                        '/' + place['geometry']['viewport']['f']['f'] +
                        '/' + place['geometry']['viewport']['b']['f'] +
                        '/' + typesString +
                        '/' + place['name'] +
                        '/' + phone +
                        '/' + website +
                        '/' + city +
                        '/' + postalCode;
                    return this.http.request(completeUrl);
                };
                PlaceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PlaceService);
                return PlaceService;
            }());
            exports_1("PlaceService", PlaceService);
        }
    }
});
