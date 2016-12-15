"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('../../models/notification');
var ApplicationsComponent = (function () {
    function ApplicationsComponent(userService, notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.applications = [];
        this.statusId = 0;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        __this.refreshApplications();
    }
    /**
     * Get applications count via status_id (sent, accepted, refused, archived)
     * @param statusId
     * @returns {number}
     */
    ApplicationsComponent.prototype.countApplicationsWithStatus = function (statusId) {
        var count = 0;
        for (var i = 0; i < this.applications.length; i++) {
            if (this.applications[i].status_id == statusId && !this.applications[i].archived) {
                count += 1;
            }
            if (this.applications[i].archived && statusId == 4) {
                count += 1;
            }
            if (statusId == 0 && !this.applications[i].archived) {
                count += 1;
            }
        }
        return count;
    };
    /**
     * Refresh items listing
     */
    ApplicationsComponent.prototype.refreshApplications = function () {
        var __this = this;
        this.userService.getApplications(this.user.id).subscribe(function (res) {
            __this.applications = res.json();
        });
    };
    /**
     * Archivate specific application
     * @param applicationId
     */
    ApplicationsComponent.prototype.archivateApplication = function (applicationId) {
        var __this = this;
        this.userService.archivateApplication(applicationId).subscribe(function (res) {
            __this.refreshApplications();
            __this.notificationService.show(new notification_1.Notification('success', 'Cette candidature a bien été archivée'));
        });
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            selector: 'applications',
            templateUrl: '../../../templates/applications.component.html'
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;
