import { Routes, RouterModule } from '@angular/router';

// Child routing
import { profileRouting } from './profile/profile.routes';
import { jobSearchRouting } from './job-search/job-search.routes';

// Components
import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';

const routes: Routes = [
    // Root
    { path: '', redirectTo: '/home', pathMatch: 'full'},

    { path: 'home', component: HomeComponent},

    // Posts
    { path: 'post/:postId/', name: 'ShowPost', component: PostComponent },

    // Clubs
    { path: 'club/:clubId', name: 'ShowClub', component: ClubComponent },

    // User
    { path: 'sign-up/', name: 'SignUp', component: SignUpComponent }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);