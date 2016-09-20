import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { ClubComponent } from './components/club.component';
import { SignUpComponent } from './components/sign-up.component';
import { RecruiterPromoComponent } from './shared/components/recruiter-promo.component';
import { BusinessPageComponent } from './shared/components/business-page.component';

const appRoutes: Routes = [
    // Child routing
    {
        path: 'profile',
        loadChildren: '/js/typescript/profile/profile.module#ProfileModule'
    },

    {
        path: 'recherche',
        loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule'
    },

    // Business page
    { path: 'business/:businessId', component: BusinessPageComponent },

    // Posts
    { path: 'post/:postId', component: PostComponent },

    // Clubs
    { path: 'club/:clubId', component: ClubComponent },

    { path: 'home', component: HomeComponent},

    // User
    { path: 'sign-up', component: SignUpComponent },

    // Promo
    { path: 'recruiter-promo', component: RecruiterPromoComponent },

    // Root
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

// - Updated Export
export const routing = RouterModule.forRoot(appRoutes);