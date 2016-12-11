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
var DefineNewPasswordComponent = (function () {
    function DefineNewPasswordComponent(userService, notificationService, router, route) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.route = route;
        this.user = {};
        var __this = this;
        route.params.subscribe(function (params) {
            if (params['userId']) {
                __this.userService.getUserInfos(params['userId']).subscribe(function (res) {
                    __this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(__this.user));
                });
            }
        });
    }
    DefineNewPasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.userService.changePassword('none', this.newPassword, this.user.id).subscribe(function (res) {
            _this.notificationService.show(new notification_1.Notification('success', 'Votre mot de passe a bien été modifié'));
            localStorage.setItem('user', JSON.stringify(res.json()));
            _this.router.navigate(['/profil']);
        });
    };
    DefineNewPasswordComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/define-new-password.component.html',
            selector: 'define-new-password'
        })
    ], DefineNewPasswordComponent);
    return DefineNewPasswordComponent;
}());
exports.DefineNewPasswordComponent = DefineNewPasswordComponent;
