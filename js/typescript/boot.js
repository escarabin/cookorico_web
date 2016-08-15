/*import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
    PlatformLocation,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy,
    APP_BASE_HREF}
    from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {
    GOOGLE_MAPS_PROVIDERS,
} from 'angular2-google-maps/core/index';
import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Components
import { AppComponent } from './components/app.component';

// Services
import { NotificationsService } from './services/notification.service';
import { MetaService } from 'ng2-meta';

// Directives
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { SELECT_DIRECTIVES } from 'ng2-select';

platformBrowserDynamic().bootstrapModule(AppModule);

bootstrap( AppComponent,
            [HTTP_PROVIDERS,
             NotificationsService,
             ROUTER_PROVIDERS,
             GOOGLE_MAPS_PROVIDERS,
             Title,
             MetaService,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(PLATFORM_DIRECTIVES, {useValue: MD_CHECKBOX_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: MD_INPUT_DIRECTIVES, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: SELECT_DIRECTIVES, multi: true})
]).catch(console.error);
*/
System.register(['@angular/platform-browser-dynamic', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
