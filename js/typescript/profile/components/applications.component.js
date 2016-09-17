System.register(['@angular/core', '../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var ApplicationsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ApplicationsComponent = (function () {
                function ApplicationsComponent(userService) {
                    this.userService = userService;
                    this.applications = [];
                    this.statusId = 0;
                    var __this = this;
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
                        if (statusId == 0) {
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
                    this.userService.getApplications().subscribe(function (res) {
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
                    });
                };
                ApplicationsComponent = __decorate([
                    core_1.Component({
                        selector: 'applications',
                        providers: [user_service_1.UserService],
                        templateUrl: '../templates/applications.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ApplicationsComponent);
                return ApplicationsComponent;
            }());
            exports_1("ApplicationsComponent", ApplicationsComponent);
        }
    }
});
