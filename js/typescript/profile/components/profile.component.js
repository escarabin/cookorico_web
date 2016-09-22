System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(router) {
                    var _this = this;
                    this.router = router;
                    this.routeSegments = [];
                    this.user = JSON.parse(localStorage.getItem('user'));
                    /**
                     * Subscribe to route change to display components regarding current route
                     * (ex: Home page is different and does not show child component 'profile-sub-header')
                     */
                    router.events.subscribe(function (event) {
                        var segments = event.url.split('/');
                        var link = "/";
                        for (var i = 1; i < segments.length; i++) {
                            link += segments[i] + "/";
                            /**
                             * Avoid appending ids (numbers) to route segments
                             */
                            if (isNaN(segments[i])) {
                                _this.routeSegments.push({ title: segments[i], link: link });
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
                        templateUrl: '../templates/profile.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
