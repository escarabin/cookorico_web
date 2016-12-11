"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var globals_1 = require('../globals');
var SellsyService = (function () {
    function SellsyService(http) {
        this.http = http;
        this.getServicesUrl = globals_1.apiUrl + '/sellsy/services/all';
    }
    /**
     * Get all sellsy services (aka "Packs")
     */
    SellsyService.prototype.getServices = function () {
        return this.http.request(this.getServicesUrl);
    };
    /**
     * Open Sellsy contact box/popup
     */
    SellsyService.prototype.openContactBox = function () {
        document.getElementById('sellsy_snippet').getElementsByClassName('sellsy-header')[0].click();
    };
    SellsyService = __decorate([
        core_1.Injectable()
    ], SellsyService);
    return SellsyService;
}());
exports.SellsyService = SellsyService;
