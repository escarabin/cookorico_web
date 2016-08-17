System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters:[],
        execute: function() {
            Notification = (function () {
                function Notification(type, message, linkTitle, linkRoute) {
                    if (type === void 0) { type = ''; }
                    if (message === void 0) { message = ''; }
                    if (linkTitle === void 0) { linkTitle = ''; }
                    if (linkRoute === void 0) { linkRoute = ''; }
                    this.type = type;
                    this.message = message;
                    this.linkTitle = linkTitle;
                    this.linkRoute = linkRoute;
                }
                return Notification;
            }());
            exports_1("Notification", Notification);
        }
    }
});
