System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alert;
    return {
        setters:[],
        execute: function() {
            Alert = (function () {
                function Alert(id, job_naming_id, alert_frequency_id, title, place) {
                    this.id = id;
                    this.job_naming_id = job_naming_id;
                    this.alert_frequency_id = alert_frequency_id;
                    this.title = title;
                    this.place = place;
                }
                return Alert;
            }());
            exports_1("Alert", Alert);
        }
    }
});
