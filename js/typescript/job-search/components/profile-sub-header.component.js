System.register(['@angular/core', './../../services/user.service.ts'], function(exports_1, context_1) {
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
    var core_1, user_service_ts_1;
    var ProfileSubHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_ts_1_1) {
                user_service_ts_1 = user_service_ts_1_1;
            }],
        execute: function() {
            ProfileSubHeaderComponent = (function () {
                function ProfileSubHeaderComponent(userService) {
                    var _this = this;
                    this.userService = userService;
                    this.userService.getUserInfos().subscribe(function (res) {
                        if (res.text().length > 10) {
                            _this.user = res.json();
                        }
                    });
                }
                ProfileSubHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-sub-header',
                        providers: [user_service_ts_1.UserService],
                        templateUrl: '../templates/profile-sub-header.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_ts_1.UserService])
                ], ProfileSubHeaderComponent);
                return ProfileSubHeaderComponent;
            }());
            exports_1("ProfileSubHeaderComponent", ProfileSubHeaderComponent);
        }
    }
});
