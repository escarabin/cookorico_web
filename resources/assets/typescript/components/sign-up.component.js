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
// Services
var user_service_1 = require('././user.service');
var reference_service_1 = require('././reference.service');
// Models
var user_1 = require('././user');
var SignUpComponent = (function () {
    function SignUpComponent(referenceService, userService) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.user = new user_1.User();
        this.civilities = [];
        var __this = this;
        this.referenceService.getAllCivilities().subscribe(function (res) {
            __this.civilities = res.json();
        });
    }
    SignUpComponent.prototype.signUp = function () {
        this.userService.createUser(this.user).subscribe(function (res) {
            console.log(res.json());
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService, reference_service_1.ReferenceService],
            selector: 'sign-up',
            templateUrl: '../templates/sign-up.component.html',
        }), 
        __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map