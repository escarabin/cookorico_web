System.register(['@angular/core', '@angular/router', './../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var HeaderComponent;
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
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(userService, router) {
                    var _this = this;
                    this.userService = userService;
                    this.router = router;
                    this.isHomePage = false;
                    this.userService.getUserInfos().subscribe(function (res) {
                        if (res.text().length > 10) {
                            _this.user = res.json();
                            localStorage.setItem('user', JSON.stringify(_this.user));
                        }
                    });
                    /**
                     * Subscribe to route change to display components regarding current route
                     * (ex: Home page is different and does not show child component 'profile-sub-header')
                     */
                    router.events.subscribe(function (event) {
                        var url = event['url'];
                        if (url == '/' || url == '/home') {
                            _this.isHomePage = true;
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
                        templateUrl: '../templates/header.component.html',
                        selector: 'header',
                        providers: [user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
