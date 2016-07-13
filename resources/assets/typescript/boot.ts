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

// Components
import { AppComponent } from './components/app.component';

// Services
import { NotificationsService } from './services/notification.service';

bootstrap( AppComponent,
            [HTTP_PROVIDERS,
             NotificationsService,
             ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(console.error);