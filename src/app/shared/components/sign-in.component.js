"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('./../../models/notification');
// ng2-bootstrap necessary workaround (17/08/16)
var components_helper_service_1 = require('ng2-bootstrap/components/utils/components-helper.service');
var SignInComponent = (function () {
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
                __this.router.navigate(['/profil']);
                /**
                 * Close the sign-in modal
                 */
                var closeModalBtns = document.getElementsByClassName('close-sign-in-modal');
                for (var i = 0; i < closeModalBtns.length; i++) {
                    closeModalBtns[i].click();
                }
            }
            else {
                /**
                 * Credentials are not correct
                 */
                __this.notificationService.show(new notification_1.Notification('error', 'Vos identifiants semblent incorrects, merci de rééssayer'));
            }
        });
    };
    SignInComponent.prototype.openSignInModal = function () {
        this.showModalBackdrop();
        document.getElementById("sign-in-modal").style.display = "block";
    };
    SignInComponent.prototype.hideSignInModal = function () {
        this.hideModalBackdrop();
        document.getElementById("sign-in-modal").style.display = "none";
    };
    SignInComponent.prototype.showModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    };
    SignInComponent.prototype.hideModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
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
        this.router.navigate(['/']);
        this.userSignedOut.emit('signing out');
    };
    SignInComponent.prototype.resetPassword = function () {
        var _this = this;
        this.userService.resetPassword(this.email).subscribe(function (res) {
            if (res['_body'] == 'false') {
                _this.notificationService.show(new notification_1.Notification('error', 'Aucun utilisateur n\'a été trouvé avec cette adresse'));
            }
            else {
                _this.notificationService.show(new notification_1.Notification('success', 'Un email vient de vous être envoyé'));
            }
        });
    };
    __decorate([
        core_1.Output()
    ], SignInComponent.prototype, "userSignedIn");
    __decorate([
        core_1.Output()
    ], SignInComponent.prototype, "userSignedOut");
    __decorate([
        core_1.Input()
    ], SignInComponent.prototype, "user");
    SignInComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/sign-in.component.html',
            selector: 'sign-in',
            viewProviders: [{ provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }]
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
