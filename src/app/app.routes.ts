import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/components/home.component';
import { RecruiterPromoComponent } from './shared/components/recruiter-promo.component';
import { CandidatePromoComponent } from './shared/components/candidate-promo.component';
import { CandidateSignUpComponent } from './shared/components/candidate-sign-up.component';
import { CguComponent } from './shared/components/cgu.component';
import { CgvComponent } from './shared/components/cgv.component';
import { AboutComponent } from './shared/components/about.component';
import { BusinessPageComponent } from './shared/components/business-page.component';
import { DefineNewPasswordComponent } from "./shared/components/define-new-password.component";

const appRoutes: Routes = [
    // Child routing
    {
        path: 'profil',
        loadChildren: 'app/profile/profile.module#ProfileModule',
        data: {
            meta: {
                title: 'Profil'
            }
        }
    },

    {
        path: 'recherche',
        loadChildren: 'app/job-search/job-search.module#JobSearchModule',
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


    { path: 'definir-nouveau-mot-de-passe/:userId', component: DefineNewPasswordComponent,
        data: {
            meta: {
                title: 'Nouveau mot de passe'
            }
        }
    },

    // CGU
    { path: 'conditions-utilisations', component: CguComponent,
        data: {
            meta: {
                title: 'Conditions d\'utilisation'
            }
        }
    },

    // CGV
    { path: 'conditions-vente', component: CgvComponent,
        data: {
            meta: {
                title: 'Conditions de vente'
            }
        }
    },

    // Qui sommes-nous
    { path: 'qui-sommes-nous', component: AboutComponent,
        data: {
            meta: {
                title: 'Conditions de vente'
            }
        }
    },

    // User
    { path: 'inscription-candidat', component: CandidateSignUpComponent,
        data: {
            meta: {
                title: 'Inscription candidat',
                description: "Cookorico : Le réveil de l'emploi en Hôtellerie Restauration" +
                "Inscription en moins de 2 minutes ! Diffusez vos offres d'emploi" +
                "Cuisinier - serveur - plongeur - réceptionniste - pâtissier..."
            }
        }
    },

    // Promo
    { path: 'accueil-recruteur', component: RecruiterPromoComponent,
        data: {
            meta: {
                title: 'Inscription recruteur',
                description: "Cookorico : Le réveil de l'emploi en Hôtellerie Restauration" +
                "Diffusez vos offres d'emploi auprès de candidats ciblés" +
                "Multidiffusion - Alertes - Cv Thèque - Espace recruteur"
            }
        }
    },
    { path: 'accueil-candidat', component: CandidatePromoComponent,
        data: {
            meta: {
                title: 'Inscription candidat',
                description: "Cookorico : Le réveil de l'emploi en Hôtellerie Restauration" +
                "Inscription en moins de 2 minutes !" +
                "Cuisinier - commis - plongeur - réceptionniste - pâtissier..."
            }
        }
    },

    { path: 'accueil', component: HomeComponent,
        data: {
            meta: {
                description: "Cookorico : Le réveil de l'emploi en Hôtellerie Restauration. " +
                "Des centaines d'offres d'emploi de moins de 30 jours ! " +
                "Emploi cuisinier - serveur - plongeur - réceptionniste - pâtissier..."
            }
        }
    },

    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

// - Updated Export
export const routing = RouterModule.forRoot(appRoutes, { useHash: false });