System.register(['@angular/core', '../../services/reference.service'], function(exports_1, context_1) {
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
    var core_1, reference_service_1;
    var JobSearchBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reference_service_1_1) {
                reference_service_1 = reference_service_1_1;
            }],
        execute: function() {
            JobSearchBarComponent = (function () {
                function JobSearchBarComponent(referenceService) {
                    this.referenceService = referenceService;
                    this.jobNamingId = 0;
                    this.placeId = 0;
                    var __this = this;
                    referenceService.getAllStates().subscribe(function (res) {
                        __this.places = res.json();
                    });
                    referenceService.getAllJobNamingGroups().subscribe(function (res) {
                        __this.jobNamingGroups = res.json();
                    });
                }
                JobSearchBarComponent.prototype.parseAdress = function (place) {
                    console.log(place);
                };
                JobSearchBarComponent = __decorate([
                    core_1.Component({
                        providers: [reference_service_1.ReferenceService],
                        selector: 'job-search-bar',
                        templateUrl: '../templates/job-search-bar.component.html',
                    }), 
                    __metadata('design:paramtypes', [reference_service_1.ReferenceService])
                ], JobSearchBarComponent);
                return JobSearchBarComponent;
            }());
            exports_1("JobSearchBarComponent", JobSearchBarComponent);
        }
    }
});
