System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alert;
    return {
        setters:[],
        execute: function() {
            Alert = (function () {
                function Alert(jobNamingId, alertFrequencyId, title, place) {
                    this.jobNamingId = jobNamingId;
                    this.alertFrequencyId = alertFrequencyId;
                    this.title = title;
                    this.place = place;
                }
                return Alert;
            }());
            exports_1("Alert", Alert);
        }
    }
});
