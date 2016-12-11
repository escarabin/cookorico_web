"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.isHomePage = false;
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe(function (event) {
            var url = event['url'];
            if (url == '/' || url == '/accueil') {
                _this.isHomePage = true;
            }
            else {
                _this.isHomePage = false;
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '../templates/app.component.html',
            styleUrls: ['../assets/sass/app.scss',
                '../css/font-awesome.min.css',
                '../css/simple-line-icons.css',
                '../css/tonicons.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
