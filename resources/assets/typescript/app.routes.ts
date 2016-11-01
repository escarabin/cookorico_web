import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/components/home.component';
import { PostComponent } from './shared/components/post.component';
import { ClubComponent } from './shared/components/club.component';
import { CandidateSignUpComponent } from './shared/components/candidate-sign-up.component';
import { RecruiterPromoComponent } from './shared/components/recruiter-promo.component';
import { BusinessPageComponent } from './shared/components/business-page.component';

const appRoutes: Routes = [
    // Child routing
    {
        path: 'profil',
        loadChildren: '/js/typescript/profile/profile.module#ProfileModule',
        data: {
            meta: {
                title: 'Profil'
            }
        }
    },

    {
        path: 'recherche',
        loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule',
        data: {
            meta: {
                title: 'Recherche d\'emploi'
            }
        }
    },

    // Business page
    { path: 'etablissement/:businessId', component: BusinessPageComponent,
        data: {
            meta: {
                title: 'Établissement'
            }
        }
    },
    { path: 'club/:clubId', component: BusinessPageComponent,
        data: {
            meta: {
                title: 'Club'
            }
        }
    },
    // Posts
    { path: 'actualite/:postId', component: PostComponent },

    // Clubs
    { path: 'club/:clubId', component: ClubComponent },

    { path: 'accueil', component: HomeComponent},

    // User
    { path: 'inscription-candidat', component: CandidateSignUpComponent,
        data: {
            meta: {
                title: 'Inscription candidat'
            }
        }
    },

    // Promo
    { path: 'accueil-recruteur', component: RecruiterPromoComponent,
        data: {
            meta: {
                title: 'Inscription recruteur'
            }
        }
    },

    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

// - Updated Export
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });