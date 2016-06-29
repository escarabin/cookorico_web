System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', 'ng2-bootstrap', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, ng2_bootstrap_1, user_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(userService) {
                    this.userService = userService;
                    this.forgotPassword = false;
                    this.loading = false;
                    this.user = JSON.parse(localStorage.getItem('user'));
                }
                HeaderComponent.prototype.login = function () {
                    var _this = this;
                    var __this = this;
                    this.userService.login(__this.email, __this.password).subscribe(function (res) {
                        var user = res.json();
                        console.log('user', user);
                        if (res.json()) {
                            // Logged in
                            localStorage.setItem('user', JSON.stringify(user));
                        }
                        else {
                            // Failed signing in, clear user object in localStorage
                            localStorage.removeItem('user');
                        }
                        _this.user = JSON.parse(localStorage.getItem('user'));
                    });
                };
                HeaderComponent.prototype.logout = function () {
                    localStorage.removeItem('user');
                    this.user = JSON.parse(localStorage.getItem('user'));
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/header.component.html',
                        selector: 'header',
                        providers: [user_service_1.UserService],
                        viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
                        directives: [router_deprecated_1.RouterLink,
                            ng2_bootstrap_1.MODAL_DIRECTVES,
                            common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
