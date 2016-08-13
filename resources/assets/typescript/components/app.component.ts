import { Component, ViewContainerRef } from '@angular/core';
import { Router, RouteConfig, RouterOutlet } from '@angular/router-deprecated';

// Components
import { HomeComponent } from './home.component';
import { PostComponent } from './post.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProfileComponent } from './profile.component';
import { ClubComponent } from './club.component';
import { SignUpComponent } from './sign-up.component';
import { SearchComponent } from './search.component';
import { NotificationsComponent } from './notification.component';

// Services
import { MetaService } from 'ng2-meta';

@Component({
    directives:[RouterOutlet,
                HomeComponent,
                HeaderComponent,
                FooterComponent,
                NotificationsComponent],
    providers: [MetaService],
    selector: 'app',
    templateUrl: '/templates/app.component.html'
})


@RouteConfig([
    // Root
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true,
        data: {
            meta: {
                title: 'Home page',
                description: 'Description of the home page'
            }
        } },

    // Posts
    { path: '/post/:postId/', name: 'ShowPost', component: PostComponent },

    // Clubs
    { path: '/club/:clubId', name: 'ShowClub', component: ClubComponent },

    // User
    { path: '/sign-up/', name: 'SignUp', component: SignUpComponent },
    { path: '/profile/...', name: 'Profile', component: ProfileComponent },
    { path: '/job-search/...', name: 'JobSearch', component: SearchComponent }
])

export class AppComponent {
    viewContainerRef: any;

    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}