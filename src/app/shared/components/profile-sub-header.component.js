"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
// Services
var user_service_1 = require('./../../services/user.service');
var ProfileSubHeaderComponent = (function () {
    function ProfileSubHeaderComponent(UserService, userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        /**
         * First, get localStorage user data
         */
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe(function (event) {
            var url = event['url'];
            /**
             * Update user object
             */
            _this.user = JSON.parse(localStorage.getItem('user'));
            /**
             * Reload user infos after last step of sign up
             */
            if (url == '/profil/annonces') {
                if (!_this.user || !_this.user.is_active) {
                    _this.userService.getUserInfos().subscribe(function (res) {
                        _this.user = res.json();
                        localStorage.setItem('user', JSON.stringify(_this.user));
                    });
                }
            }
        });
        /**
         * Then get user fresh data
         */
        UserService.getUserInfos(this.user.id).subscribe(function (res) {
            if (res.text().length > 10) {
                _this.user = res.json();
            }
        });
        /**
         * Get profile percentage of fill
         */
        UserService.getProfilePercentage(this.user.id).subscribe(function (res) {
            _this.profilePercentage = res.json();
        });
    }
    ProfileSubHeaderComponent = __decorate([
        core_1.Component({
            selector: 'profile-sub-header',
            templateUrl: '../../../templates/profile-sub-header.component.html'
        }),
        __param(0, core_1.Inject(user_service_1.UserService))
    ], ProfileSubHeaderComponent);
    return ProfileSubHeaderComponent;
}());
exports.ProfileSubHeaderComponent = ProfileSubHeaderComponent;
