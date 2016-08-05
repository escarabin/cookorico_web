import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
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

// Components
import { AppComponent } from './components/app.component';

// Services
import { NotificationsService } from './services/notification.service';

// Directives
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';

bootstrap( AppComponent,
            [HTTP_PROVIDERS,
             NotificationsService,
             ROUTER_PROVIDERS,
             GOOGLE_MAPS_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    /**
     * Use Angular 2 material directive globally (as a PLATFORM_DIRECTIVE)
     * in order to user its components in the app without having to import them
     */
    provide(PLATFORM_DIRECTIVES, {useValue: MD_CHECKBOX_DIRECTIVES, multi: true})
]).catch(console.error);