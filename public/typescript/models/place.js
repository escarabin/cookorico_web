System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Place;
    return {
        setters:[],
        execute: function() {
            Place = (function () {
                function Place(id, googlePlaceId, lat, lon, adress, city, postalCode) {
                    this.id = id;
                    this.googlePlaceId = googlePlaceId;
                    this.lat = lat;
                    this.lon = lon;
                    this.adress = adress;
                    this.city = city;
                    this.postalCode = postalCode;
                }
                return Place;
            }());
            exports_1("Place", Place);
        }
    }
});
