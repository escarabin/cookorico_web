System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Business;
    return {
        setters:[],
        execute: function() {
            Business = (function () {
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
            exports_1("Business", Business);
        }
    }
});
