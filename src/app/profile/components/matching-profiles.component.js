"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MatchingProfilesComponent = (function () {
    function MatchingProfilesComponent(userService, ref, referenceService) {
        var _this = this;
        this.userService = userService;
        this.ref = ref;
        this.referenceService = referenceService;
        this.items = [];
        this.jobPosts = [];
        this.jobNamingId = 0;
        this.xpLevelId = 0;
        this.xpLevels = [];
        this.isLoadingProfiles = true;
        this.user = {};
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getJobPosts(this.user.id, false).subscribe(function (res) {
            __this.jobPosts = res.json();
            if (__this.jobPosts.length > 0) {
                _this.userService.getMatchingProfiles(_this.user.id).subscribe(function (res) {
                    __this.items = res.json();
                    __this.isLoadingProfiles = false;
                    _this.ref.detectChanges();
                    /**
                     * By default, select option from localStorage
                     */
                    if (localStorage.getItem('currentJobNamingId')) {
                        __this.jobNamingId = localStorage.getItem('currentJobNamingId');
                    }
                });
            }
        });
        this.referenceService.getAllJobXpLevels().subscribe(function (res) {
            __this.xpLevels = res.json();
        });
    }
    MatchingProfilesComponent.prototype.saveCurrentJobNamingId = function () {
        localStorage.setItem('currentJobNamingId', this.jobNamingId);
    };
    MatchingProfilesComponent = __decorate([
        core_1.Component({
            selector: 'matching-profiles',
            templateUrl: '../../../templates/matching-profiles.component.html'
        })
    ], MatchingProfilesComponent);
    return MatchingProfilesComponent;
}());
exports.MatchingProfilesComponent = MatchingProfilesComponent;
