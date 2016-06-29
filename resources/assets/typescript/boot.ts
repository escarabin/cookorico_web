import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import {
    PlatformLocation,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy,
    APP_BASE_HREF}
    from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './components/app.component';

bootstrap( AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(console.error);