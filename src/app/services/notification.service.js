"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var NotificationsService = (function () {
    function NotificationsService() {
        this._notifications = new Subject_1.Subject();
        this.noteAdded = this._notifications.asObservable();
    }
    NotificationsService.prototype.show = function (notification) {
        console.log('notification.service.ts is showing a notification');
        this._notifications.next(notification);
    };
    NotificationsService = __decorate([
        core_1.Injectable()
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;