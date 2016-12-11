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
var HeaderComponent = (function () {
    function HeaderComponent(UserService, userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.isHomePage = false;
        this.isMobileMenuShown = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user) {
            UserService.getUserInfos(this.user.id).subscribe(function (res) {
                if (res.text().length > 10) {
                    _this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(_this.user));
                }
            });
        }
        UserService.userChangeEmitter.subscribe(function (res) {
            console.log('received something user', res);
        });
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
            if (url == '/' || url == '/accueil') {
                _this.isHomePage = true;
            }
            else if (url == '/profil/annonces' && !_this.user.is_active) {
                if (!_this.user || !_this.user.is_active) {
                    _this.userService.getUserInfos().subscribe(function (res) {
                        _this.user = res.json();
                        localStorage.setItem('user', JSON.stringify(_this.user));
                    });
                }
            }
            else {
                _this.isHomePage = false;
            }
        });
    }
    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedIn) EventEmitter emitted something
     * @param user
     */
    HeaderComponent.prototype.handleUserSignedIn = function (user) {
        this.user = user;
    };
    /**
     * Function triggered after sign-in-component.ts's
     * (userSignedOut) EventEmitter emitted something
     */
    HeaderComponent.prototype.handleUserSignedOut = function () {
        var _this = this;
        this.userService.signOut().subscribe(function (res) {
            _this.user = null;
            _this.router.navigate(['/']);
        });
    };
    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    HeaderComponent.prototype.onPageScroll = function (event) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    };
    HeaderComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/header.component.html',
            selector: 'header'
        }),
        __param(0, core_1.Inject(user_service_1.UserService))
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
