System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters:[],
        execute: function() {
            Notification = (function () {
                function Notification(type, message, linkRoute, buttonTitle, autoDismiss) {
                    if (type === void 0) { type = ''; }
                    if (message === void 0) { message = ''; }
                    if (linkRoute === void 0) { linkRoute = ''; }
                    if (buttonTitle === void 0) { buttonTitle = ''; }
                    if (autoDismiss === void 0) { autoDismiss = true; }
                    this.type = type;
                    this.message = message;
                    this.linkRoute = linkRoute;
                    this.buttonTitle = buttonTitle;
                    this.autoDismiss = autoDismiss;
                }
                return Notification;
            }());
            exports_1("Notification", Notification);
        }
    }
});
