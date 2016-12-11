"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent(jobService) {
        this.jobService = jobService;
        this.jobs = [];
        var __this = this;
        jobService.getAllJobs().subscribe(function (res) {
            __this.jobs = res.json();
        });
    }
    HomeComponent.prototype.ngOnInit = function (event) {
        this.fitMainDivToWindow();
    };
    HomeComponent.prototype.fitMainDivToWindow = function () {
        if (window.innerHeight > 400) {
            this.innerHeight = window.innerHeight;
        }
        else {
            this.innerHeight = 300;
        }
        document.getElementById('home-heading').setAttribute("style", "height:" + this.innerHeight + "px;");
        document.getElementById('home-heading-title').setAttribute("style", "margin-top:" + this.innerHeight / 11 + "px;");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: '../../../templates/home.component.html'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
