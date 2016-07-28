System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/core', '@angular/common', '@angular/router-deprecated', 'angular2-google-maps/core/index', './components/app.component', './services/notification.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, core_1, common_1, router_deprecated_1, index_1, app_component_1, notification_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                notification_service_1.NotificationsService,
                router_deprecated_1.ROUTER_PROVIDERS,
                index_1.GOOGLE_MAPS_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]).catch(console.error);
        }
    }
});
