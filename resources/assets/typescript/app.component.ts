import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_PROVIDERS,
    Router,
    RouteConfig,
    RouterOutlet } from '@angular/router-deprecated';

// Components
import { HomeComponent } from './home.component';
import { JobComponent } from './job.component';
import { PostComponent } from './post.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProfileComponent } from './profile.component';
import { ClubComponent } from './club.component';
import { SignUpComponent } from './sign-up.component';
import { SearchComponent } from './search.component';
import { NewApplicationFormComponent } from './new-application-form.component';
import { ApplicationsComponent } from "./applications.component";
import { ExperiencesComponent } from "./experiences.component";

@Component({
    directives:[RouterOutlet,
                HomeComponent,
                HeaderComponent,
                FooterComponent,
                SearchComponent,
                NewApplicationFormComponent,
                ApplicationsComponent,
                ExperiencesComponent],
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/job/:jobId/', name: 'ShowJob', component: JobComponent },
    { path: '/jobs/search/:stateId/:jobNamingId/:contractTypeId/:searchText', name: 'SearchJobs', component: SearchComponent },
    { path: '/post/:postId/', name: 'ShowPost', component: PostComponent },
    { path: '/club/:clubId', name: 'ShowClub', component: ClubComponent },
    { path: '/profile/', name: 'Profile', component: ProfileComponent },
    { path: '/sign-up/', name: 'SignUp', component: SignUpComponent },
    { path: '/apply/:jobId', name: 'Apply', component: NewApplicationFormComponent },
    { path: '/profile/applications', name: 'Applications', component: ApplicationsComponent },
    { path: '/profile/experiences', name: 'Experiences', component: ExperiencesComponent }
])


export class AppComponent {
    viewContainerRef: any;

    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}