System.register(['@angular/core', '@angular/http', './../globals'], function(exports_1, context_1) {
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
    var core_1, http_1, appGlobals;
    var WebsiteEditorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appGlobals_1) {
                appGlobals = appGlobals_1;
            }],
        execute: function() {
            WebsiteEditorService = (function () {
                function WebsiteEditorService(http) {
                    this.http = http;
                    this.saveOptionUrl = appGlobals.apiUrl + "/option/save";
                }
                /**
                 * Save an option value
                 * @param Option
                 * @returns {any}
                 */
                WebsiteEditorService.prototype.saveOption = function (option) {
                    var __this = this;
                    var body = JSON.stringify({ option: option });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(__this.saveOptionUrl, body, options);
                };
                WebsiteEditorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WebsiteEditorService);
                return WebsiteEditorService;
            }());
            exports_1("WebsiteEditorService", WebsiteEditorService);
        }
    }
});
