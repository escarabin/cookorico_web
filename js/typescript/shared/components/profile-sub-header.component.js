System.register(['@angular/core', './../../services/user.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, user_service_1;
    var ProfileSubHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ProfileSubHeaderComponent = (function () {
                function ProfileSubHeaderComponent(UserService) {
                    var _this = this;
                    /**
                     * First, get localStorage user data
                     */
                    this.user = JSON.parse(localStorage.getItem('user'));
                    /**
                     * Then get user fresh data
                     */
                    UserService.getUserInfos().subscribe(function (res) {
                        if (res.text().length > 10) {
                            _this.user = res.json();
                        }
                    });
                    /**
                     * Detect any change in user object
                     */
                    UserService.userChangeEmitter.subscribe(function (res) {
                        console.log('received a new user', res.json());
                    });
                    /**
                     * Get profile percentage of fill
                     */
                    UserService.getProfilePercentage().subscribe(function (res) {
                        _this.profilePercentage = res.json();
                    });
                }
                ProfileSubHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-sub-header',
                        providers: [user_service_1.UserService],
                        templateUrl: '../templates/profile-sub-header.component.html'
                    }),
                    __param(0, core_1.Inject(user_service_1.UserService)), 
                    __metadata('design:paramtypes', [Object])
                ], ProfileSubHeaderComponent);
                return ProfileSubHeaderComponent;
            }());
            exports_1("ProfileSubHeaderComponent", ProfileSubHeaderComponent);
        }
    }
});
