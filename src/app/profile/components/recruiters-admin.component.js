"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Pagination
var ng2_pagination_1 = require('ng2-pagination');
var RecruitersAdminComponent = (function () {
    function RecruitersAdminComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.recruiterUsers = [];
        this.userService.getAllRecruiters().subscribe(function (res) {
            _this.recruiterUsers = res.json();
        });
    }
    RecruitersAdminComponent.prototype.searchRecruiter = function () {
        var _this = this;
        this.userService.searchRecruiters(this.searchEmail).subscribe(function (res) {
            _this.recruiterUsers = res.json();
        });
    };
    RecruitersAdminComponent.prototype.loginUsingId = function (userId) {
        this.userService.loginUsingId(userId).subscribe(function (user) {
            localStorage.setItem('user', JSON.stringify(user.json()));
            document.location.hash = '/';
        });
    };
    RecruitersAdminComponent = __decorate([
        core_1.Component({
            selector: 'recruiters-admin',
            providers: [ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe],
            templateUrl: '../../../templates/recruiters-admin.component.html'
        })
    ], RecruitersAdminComponent);
    return RecruitersAdminComponent;
}());
exports.RecruitersAdminComponent = RecruitersAdminComponent;
