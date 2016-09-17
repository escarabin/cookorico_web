System.register(['@angular/core', '@angular/router', './../../services/user.service', './../../services/notification.service', './../../models/notification', 'ng2-bootstrap/components/utils/components-helper.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, notification_service_1, notification_1, components_helper_service_1;
    var SignInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            },
            function (components_helper_service_1_1) {
                components_helper_service_1 = components_helper_service_1_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(userService, notificationService, router) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.forgotPassword = false;
                    this.loading = false;
                    this.userSignedIn = new core_1.EventEmitter();
                    this.userSignedOut = new core_1.EventEmitter();
                }
                SignInComponent.prototype.login = function () {
                    var _this = this;
                    var __this = this;
                    this.userService.login(__this.email, __this.password).subscribe(function (res) {
                        if (res['_body']) {
                            /**
                             * User is logged in
                             */
                            var user = res.json();
                            localStorage.setItem('user', JSON.stringify(user));
                            __this.user = JSON.parse(localStorage.getItem('user'));
                            __this.userSignedIn.emit(_this.user);
                            __this.notificationService.show(new notification_1.Notification('success', 'Vous êtes connecté'));
                            /**
                             * Close the sign-in modal
                             */
                            document.getElementById('close-sign-in-modal').click();
                        }
                        else {
                            /**
                             * Credentials are not correct
                             */
                            __this.notificationService.show(new notification_1.Notification('error', 'Vos identifiants semblent incorrects, merci de rééssayer'));
                        }
                    });
                };
                /**
                 * Handle [ENTER] key press on login form
                 * @param keyCode
                 */
                SignInComponent.prototype.keyPressHandler = function (keyCode) {
                    if (keyCode == 13) {
                        this.login();
                    }
                };
                SignInComponent.prototype.logout = function () {
                    localStorage.removeItem('user');
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.router.navigate(['home']);
                    this.userSignedOut.emit('signing out');
                };
                SignInComponent.prototype.resetPassword = function () {
                    this.userService.resetPassword().subscribe(function (res) {
                        console.log(res.json());
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SignInComponent.prototype, "userSignedIn", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SignInComponent.prototype, "userSignedOut", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SignInComponent.prototype, "user", void 0);
                SignInComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/sign-in.component.html',
                        selector: 'sign-in',
                        providers: [user_service_1.UserService],
                        viewProviders: [{ provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService, router_1.Router])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_1("SignInComponent", SignInComponent);
        }
    }
});
