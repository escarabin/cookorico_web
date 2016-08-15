System.register(['@angular/core', './../services/notification.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, notification_service_1;
    var NotificationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            NotificationsComponent = (function () {
                function NotificationsComponent(_notifications) {
                    var _this = this;
                    this._notifications = _notifications;
                    this._notes = new Array();
                    _notifications.noteAdded.subscribe(function (note) {
                        _this._notes.push(note);
                        setTimeout(function () { _this.hide.bind(_this)(note); }, 5000);
                    });
                }
                NotificationsComponent.prototype.hide = function (note) {
                    var index = this._notes.indexOf(note);
                    if (index >= 0) {
                        this._notes.splice(index, 1);
                    }
                };
                NotificationsComponent = __decorate([
                    core_1.Component({
                        selector: 'notifications',
                        templateUrl: '../templates/notification.component.html'
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationsService])
                ], NotificationsComponent);
                return NotificationsComponent;
            }());
            exports_1("NotificationsComponent", NotificationsComponent);
        }
    }
});
