System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Study;
    return {
        setters:[],
        execute: function() {
            Study = (function () {
                function Study(id, user_id, diploma_id, business_id, description, start_date, end_date) {
                    this.id = id;
                    this.user_id = user_id;
                    this.diploma_id = diploma_id;
                    this.business_id = business_id;
                    this.description = description;
                    this.start_date = start_date;
                    this.end_date = end_date;
                }
                return Study;
            }());
            exports_1("Study", Study);
        }
    }
});
