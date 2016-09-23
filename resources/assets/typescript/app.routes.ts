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
        path: 'profil',
        loadChildren: '/js/typescript/profile/profile.module#ProfileModule'
    },

    {
        path: 'recherche',
        loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule'
    },

    // Business page
    { path: 'etablissement/:businessId', component: BusinessPageComponent },

    // Posts
    { path: 'actualite/:postId', component: PostComponent },

    // Clubs
    { path: 'club/:clubId', component: ClubComponent },

    { path: 'accueil', component: HomeComponent},

    // User
    { path: 'inscription', component: SignUpComponent },

    // Promo
    { path: 'accueil-recruteur', component: RecruiterPromoComponent },

    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full'},
];

// - Updated Export
export const routing = RouterModule.forRoot(appRoutes);