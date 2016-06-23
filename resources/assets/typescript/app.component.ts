import { Component } from '@angular/core';
import { ROUTER_PROVIDERS,
    Router,
    RouteConfig,
    RouterOutlet } from '@angular/router-deprecated';

// Components
import { HomeComponent } from './home.component';
import { JobComponent } from './job.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
    directives:[RouterOutlet,
        HomeComponent,
        HeaderComponent,
        FooterComponent],
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/job/:jobId/', name: 'ShowJob', component: JobComponent }
])


export class AppComponent {

}