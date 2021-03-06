"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var user_service_1 = require('./.././user.service');
var UserSidebarComponent = (function () {
    function UserSidebarComponent(userService) {
        this.userService = userService;
        this.plans = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * If user has a specific profile picture URL (Linkedin, Google, etc)
         * then display this one instead of AWS's one
         */
        if (this.user.profilePictureUrl) {
            this.profilePictureUrl = this.user.profilePictureUrl;
        }
        else {
            this.profilePictureUrl = 'https://s3-eu-west-1.amazonaws.com/oechr-profile-picture/' + this.user.id + '.jpg';
        }
        var __this = this;
        this.userService.getPlans().subscribe(function (res) {
            __this.plans = res.json();
        });
    }
    UserSidebarComponent = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink],
            selector: 'user-sidebar',
            templateUrl: '../templates/profile-sidebar.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserSidebarComponent);
    return UserSidebarComponent;
}());
exports.UserSidebarComponent = UserSidebarComponent;
//# sourceMappingURL=profile-sidebar.component.js.mapmap