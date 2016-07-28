"use strict";
var Experience = (function () {
    function Experience(id, business_id, user_id, job_naming_id, adress, lat, lon, description, start_date, end_date) {
        this.id = id;
        this.business_id = business_id;
        this.user_id = user_id;
        this.job_naming_id = job_naming_id;
        this.adress = adress;
        this.lat = lat;
        this.lon = lon;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
    }
    return Experience;
}());
exports.Experience = Experience;
//# sourceMappingURL=experience.js.map