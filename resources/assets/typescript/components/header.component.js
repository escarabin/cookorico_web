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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
// Components
var sign_in_component_1 = require('./sign-in.component');
// Services
var user_service_1 = require('./../services/user.service');
var HeaderComponent = (function () {
    function HeaderComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.userService.getUserInfos().subscribe(function (res) {
            _this.user = res.json();
            localStorage.setItem('user', JSON.stringify(_this.user));
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
     * @param user
     */
    HeaderComponent.prototype.handleUserSignedOut = function (user) {
        this.user = null;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            templateUrl: '../templates/header.component.html',
            selector: 'header',
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink,
                sign_in_component_1.SignInComponent,
                common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map