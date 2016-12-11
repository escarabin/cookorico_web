"use strict";
var place_1 = require('./place');
var Business = (function () {
    function Business(id, title, email, phone, business_type_id, website, description, logo, photos, place) {
        if (photos === void 0) { photos = []; }
        if (place === void 0) { place = new place_1.Place(); }
        this.id = id;
        this.title = title;
        this.email = email;
        this.phone = phone;
        this.business_type_id = business_type_id;
        this.website = website;
        this.description = description;
        this.logo = logo;
        this.photos = photos;
        this.place = place;
    }
    return Business;
}());
exports.Business = Business;
