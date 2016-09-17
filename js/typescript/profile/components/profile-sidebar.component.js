System.register(['@angular/core', '../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var ProfileSidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ProfileSidebarComponent = (function () {
                function ProfileSidebarComponent(userService) {
                    this.userService = userService;
                    this.plans = [];
                    this.isMobileMenuVisible = false;
                    this.user = JSON.parse(localStorage.getItem('user'));
                    var __this = this;
                    this.userService.getPlans().subscribe(function (res) {
                        __this.plans = res.json();
                    });
                }
                ProfileSidebarComponent = __decorate([
                    core_1.Component({
                        providers: [user_service_1.UserService],
                        selector: 'profile-sidebar',
                        templateUrl: '../templates/profile-sidebar.component.html',
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProfileSidebarComponent);
                return ProfileSidebarComponent;
            }());
            exports_1("ProfileSidebarComponent", ProfileSidebarComponent);
        }
    }
});
