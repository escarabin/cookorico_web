System.register(['@angular/core', '@angular/router-deprecated', './../services/reference.service', './../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, reference_service_1, user_service_1;
    var CreateStudyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            CreateStudyComponent = (function () {
                function CreateStudyComponent(referenceService, userService) {
                    this.referenceService = referenceService;
                    this.userService = userService;
                    var __this = this;
                    this.referenceService.getAllDiplomas().subscribe(function (res) {
                        __this.diplomas = res.json();
                        console.log(__this.diplomas);
                    });
                }
                CreateStudyComponent.prototype.submitStudy = function () {
                    var __this = this;
                };
                CreateStudyComponent = __decorate([
                    core_1.Component({
                        selector: 'create-experience',
                        providers: [reference_service_1.ReferenceService, user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/create-study.component.html'
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService, user_service_1.UserService])
                ], CreateStudyComponent);
                return CreateStudyComponent;
            }());
            exports_1("CreateStudyComponent", CreateStudyComponent);
        }
    }
});
