import { Component } from '@angular/core';
import { ROUTER_PROVIDERS,
    Router,
    RouteConfig,
    RouterLink,
    RouterOutlet } from '@angular/router-deprecated';

// Components
import { HomeComponent } from './home.component';
import { JobComponent } from './job.component';

@Component({
    directives:[RouterLink,
        RouterOutlet,
        HomeComponent],
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})


@RouteConfig([
    { path: '/', name: 'Root', component: HomeComponent, useAsDefault: true },
    { path: '/home', name: 'Home', redirectTo: ['Root'] },
    { path: '/job/:jobId/', name: 'ShowJob', component: JobComponent }
])


export class AppComponent {

}