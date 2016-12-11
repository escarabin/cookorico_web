"use strict";
var Place = (function () {
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
exports.Place = Place;
