System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Application;
    return {
        setters:[],
        execute: function() {
            Application = (function () {
                function Application(id, job_id, comment) {
                    this.id = id;
                    this.job_id = job_id;
                    this.comment = comment;
                }
                return Application;
            }());
            exports_1("Application", Application);
        }
    }
});
