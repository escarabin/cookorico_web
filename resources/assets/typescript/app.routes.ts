import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';

const appRoutes: Routes = [
    // Child routing
    {
        path: 'profile',
        loadChildren: '/js/typescript/profile/profile.module#ProfileModule'
    },

    {
        path: 'job-search',
        loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule'
    },

    // Posts
    { path: 'post/:postId', component: PostComponent },

    // Clubs
    { path: 'club/:clubId', component: ClubComponent },

    { path: 'home', component: HomeComponent},

    // User
    { path: 'sign-up', component: SignUpComponent },

    // Root
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

// - Updated Export
export const routing = RouterModule.forRoot(appRoutes);