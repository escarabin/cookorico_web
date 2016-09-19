System.register(['@angular/core', './../../services/user.service', './../../services/reference.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, reference_service_1;
    var MatchingProfilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            }],
        execute: function() {
            MatchingProfilesComponent = (function () {
                function MatchingProfilesComponent(userService, referenceService) {
                    this.userService = userService;
                    this.referenceService = referenceService;
                    this.items = [];
                    this.jobPosts = [];
                    this.jobNamingId = 0;
                    this.xpLevelId = 0;
                    this.xpLevels = [];
                    var __this = this;
                    this.userService.getMatchingProfiles().subscribe(function (res) {
                        __this.items = res.json();
                        console.log('matching profiles are', __this.items);
                    });
                    this.userService.getJobPosts().subscribe(function (res) {
                        __this.jobPosts = res.json();
                    });
                    this.referenceService.getAllJobXpLevels().subscribe(function (res) {
                        __this.xpLevels = res.json();
                    });
                }
                MatchingProfilesComponent = __decorate([
                    core_1.Component({
                        selector: 'matching-profiles',
                        providers: [user_service_1.UserService, reference_service_1.ReferenceService],
                        templateUrl: '../templates/matching-profiles.component.html',
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, reference_service_1.ReferenceService])
                ], MatchingProfilesComponent);
                return MatchingProfilesComponent;
            }());
            exports_1("MatchingProfilesComponent", MatchingProfilesComponent);
        }
    }
});
