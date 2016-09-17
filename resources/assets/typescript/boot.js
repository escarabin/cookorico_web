"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('angular2-google-maps/core/index');
// Components
var app_component_1 = require('./components/app.component.ts');
// Services
var notification_service_1 = require('./services/notification.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
    notification_service_1.NotificationsService,
    router_deprecated_1.ROUTER_PROVIDERS,
    index_1.GOOGLE_MAPS_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]).catch(console.error);
//# sourceMappingURL=boot.js.map