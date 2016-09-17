System.register(['@angular/core', './../../services/user.service', './../../services/notification.service', 'ng2-bootstrap/components/utils/components-helper.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, notification_service_1, components_helper_service_1;
    var RecruiterPromoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (components_helper_service_1_1) {
                components_helper_service_1 = components_helper_service_1_1;
            }],
        execute: function() {
            RecruiterPromoComponent = (function () {
                function RecruiterPromoComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                }
                RecruiterPromoComponent.prototype.submitEmailAndPassword = function () {
                    var __this = this;
                    this.userService.createUser(this.email, this.password, 2).subscribe(function (res) {
                        if (res['_body'].length > 100) {
                            /**
                             * User account successfully created
                             */
                            __this.error = null;
                            __this.notificationService.show(new Notification('success', "Veuillez vérifier votre boite mail pour confirmer votre inscription !"));
                        }
                        else {
                            /**
                             * Something not supposed to happen actually happened
                             * "Oh my..."
                             */
                            __this.error = res['_body'];
                            __this.notificationService.show(new Notification('error', __this.error));
                        }
                    });
                };
                RecruiterPromoComponent = __decorate([
                    core_1.Component({
                        selector: 'recruiter-promo',
                        providers: [components_helper_service_1.ComponentsHelper, user_service_1.UserService],
                        viewProviders: [{ provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }],
                        templateUrl: '../templates/recruiter-promo.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], RecruiterPromoComponent);
                return RecruiterPromoComponent;
            }());
            exports_1("RecruiterPromoComponent", RecruiterPromoComponent);
        }
    }
});
