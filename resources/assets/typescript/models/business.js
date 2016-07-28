"use strict";
var Business = (function () {
    function Business(id, title, email, phone, business_type_id, website, description, photos) {
        if (photos === void 0) { photos = []; }
        this.id = id;
        this.title = title;
        this.email = email;
        this.phone = phone;
        this.business_type_id = business_type_id;
        this.website = website;
        this.description = description;
        this.photos = photos;
    }
    return Business;
}());
exports.Business = Business;
//# sourceMappingURL=business.js.map