System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var ExperiencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            ExperiencesComponent = (function () {
                function ExperiencesComponent(userService, notificationsService) {
                    this.userService = userService;
                    this.notificationsService = notificationsService;
                    this.experiences = [];
                    this.checkedExperiencesList = [];
                    var __this = this;
                    this.userService.getExperiences().subscribe(function (res) {
                        __this.experiences = res.json();
                    });
                }
                ExperiencesComponent.prototype.checkedExperiences = function (experienceId) {
                    var indexOfExpId = this.checkedExperiencesList.indexOf(experienceId);
                    if (indexOfExpId == -1) {
                        this.checkedExperiencesList.push(experienceId);
                    }
                    else {
                        delete this.checkedExperiencesList[indexOfExpId];
                    }
                };
                ExperiencesComponent.prototype.deleteExperiences = function () {
                    var __this = this;
                    var parsedListExpId = this.checkedExperiencesList.join(',');
                    var confirmNotification = new notification_1.Notification('confirm', 'Vos modifications ont bien été enregistrées');
                    this.notificationsService.show(confirmNotification);
                    /* this.userService.deleteExperiences(parsedListExpId).subscribe((res: Response) => {
                         __this.userService.getExperiences().subscribe((res: Response) => {
                             __this.experiences = res.json();
                         });
                     });*/
                };
                ExperiencesComponent = __decorate([
                    core_1.Component({
                        selector: 'experiences',
                        providers: [user_service_1.UserService, notification_service_1.NotificationsService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/experiences.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], ExperiencesComponent);
                return ExperiencesComponent;
            }());
            exports_1("ExperiencesComponent", ExperiencesComponent);
        }
    }
});
