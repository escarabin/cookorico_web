"use strict";
var Notification = (function () {
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
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map