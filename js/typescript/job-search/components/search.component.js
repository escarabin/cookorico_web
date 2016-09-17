System.register(['@angular/core', '@angular/router', './../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(route, userService) {
                    var _this = this;
                    this.route = route;
                    this.userService = userService;
                    this.searchParameters = [];
                    this.userService.getUserInfos().subscribe(function (res) {
                        if (res.text().length > 10) {
                            _this.user = res.json();
                        }
                    });
                    route.params.subscribe(function (params) {
                        if (params) {
                            _this.placeId = params['placeId'];
                            _this.jobNamingId = parseInt(params['jobNamingId']);
                            _this.contractTypeId = parseInt(params['contractTypeId']);
                            _this.studyLevelId = parseInt(params['studyLevelId']);
                        }
                    });
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../templates/search.component.html',
                        providers: [user_service_1.UserService],
                        selector: 'search',
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
