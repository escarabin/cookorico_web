import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { ProfileComponent } from './components/profile.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';
import { SearchComponent } from './components/search.component';

const routes: Routes = [
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
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);