"use strict";
var Alert = (function () {
    function Alert(id, job_naming_id, alert_frequency_id, title, place) {
        this.id = id;
        this.job_naming_id = job_naming_id;
        this.alert_frequency_id = alert_frequency_id;
        this.title = title;
        this.place = place;
    }
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map