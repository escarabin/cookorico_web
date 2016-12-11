"use strict";
var router_1 = require('@angular/router');
// Components
var home_component_1 = require('./shared/components/home.component');
var recruiter_promo_component_1 = require('./shared/components/recruiter-promo.component');
var candidate_promo_component_1 = require('./shared/components/candidate-promo.component');
var candidate_sign_up_component_1 = require('./shared/components/candidate-sign-up.component');
var cgu_component_1 = require('./shared/components/cgu.component');
var cgv_component_1 = require('./shared/components/cgv.component');
var about_component_1 = require('./shared/components/about.component');
var business_page_component_1 = require('./shared/components/business-page.component');
var define_new_password_component_1 = require("./shared/components/define-new-password.component");
var appRoutes = [
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
    { path: 'etablissement/:businessId', component: business_page_component_1.BusinessPageComponent,
        data: {
            meta: {
                title: 'Établissement'
            }
        }
    },
    { path: 'club/:clubId', component: business_page_component_1.BusinessPageComponent,
        data: {
            meta: {
                title: 'Club'
            }
        }
    },
    { path: 'definir-nouveau-mot-de-passe/:userId', component: define_new_password_component_1.DefineNewPasswordComponent,
        data: {
            meta: {
                title: 'Nouveau mot de passe'
            }
        }
    },
    // CGU
    { path: 'conditions-utilisations', component: cgu_component_1.CguComponent,
        data: {
            meta: {
                title: 'Conditions d\'utilisation'
            }
        }
    },
    // CGV
    { path: 'conditions-vente', component: cgv_component_1.CgvComponent,
        data: {
            meta: {
                title: 'Conditions de vente'
            }
        }
    },
    // Qui sommes-nous
    { path: 'qui-sommes-nous', component: about_component_1.AboutComponent,
        data: {
            meta: {
                title: 'Conditions de vente'
            }
        }
    },
    // User
    { path: 'inscription-candidat', component: candidate_sign_up_component_1.CandidateSignUpComponent,
        data: {
            meta: {
                title: 'Inscription candidat'
            }
        }
    },
    // Promo
    { path: 'accueil-recruteur', component: recruiter_promo_component_1.RecruiterPromoComponent,
        data: {
            meta: {
                title: 'Inscription recruteur'
            }
        }
    },
    { path: 'accueil-candidat', component: candidate_promo_component_1.CandidatePromoComponent,
        data: {
            meta: {
                title: 'Inscription candidat'
            }
        }
    },
    { path: 'accueil', component: home_component_1.HomeComponent },
    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: false });
