"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProfileComponent = (function () {
    function ProfileComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.routeSegments = [];
        /**
         * Defines if the current user has a business that is part of a group
         * @type {boolean}
         */
        this.isInAGroup = true;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * If user not logged in, redirect to home
         */
        if (!this.user) {
            this.router.navigate(['/']);
        }
        if (this.user.user_type_id == 2) {
            this.userService.isUserPartOfAGroup(this.user.id).subscribe(function (res) {
                if (res['_body'] == 'true') {
                    _this.isInAGroup = true;
                }
            });
        }
        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe(function (event) {
            var url = event['url'];
            __this.routeSegments = [];
            var segments = url.split('/');
            var link = "/";
            /**
             * Reload user infos after last step of sign up
             */
            if (url == '/profil/annonces' && !_this.user.is_active) {
                __this.userService.getUserInfos().subscribe(function (res) {
                    _this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(_this.user));
                });
            }
            for (var i = 1; i < segments.length; i++) {
                link += segments[i] + "/";
                /**
                 * Avoid appending ids (numbers) to route segments
                 */
                if (isNaN(segments[i])) {
                    __this.routeSegments.push({ title: segments[i], link: link });
                }
            }
        });
    }
    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    ProfileComponent.prototype.onPageScroll = function (event) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: '../../../templates/profile.component.html'
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
