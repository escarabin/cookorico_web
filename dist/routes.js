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
    { path: 'etablissement/:businessId'},
    { path: 'club/:clubId'},


    { path: 'definir-nouveau-mot-de-passe/:userId'},

    // CGU
    { path: 'conditions-utilisations'},

    // CGV
    { path: 'conditions-vente'},

    // Qui sommes-nous
    { path: 'qui-sommes-nous'},

    // User
    { path: 'inscription-candidat'},

    // Promo
    { path: 'accueil-recruteur'},
    { path: 'accueil-candidat'},

    { path: 'accueil'},

    // Root
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

/*var profileRoutes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            // Root
            {path: 'apercu', component: ProfilePreviewComponent},
            {path: 'apercu/:userId', component: ProfilePreviewComponent},
            {path: 'apercu/:userId/complet', component: ProfilePreviewComponent},
            {path: 'confirmation-du-compte/:userTypeId', component: ConfirmUserAccountComponent},

            // Experiences
            {path: 'experience/editer/:experienceId', component: CreateExperienceComponent},
            {path: 'experience/creer', component: CreateExperienceComponent},
            {path: 'experiences', component: ExperiencesComponent},
            {path: 'experience', redirectTo: '/profil/experiences'},

            // Applications
            {path: 'candidatures', component: ApplicationsComponent},

            // Education
            {path: 'formation/editer/:studyId', component: CreateStudyComponent},
            {path: 'formation/creer', component: CreateStudyComponent},
            {path: 'formations', component: EducationComponent},
            {path: 'formation', redirectTo: '/profil/formations'},

            // Testimonials
            {path: 'recommandation/creer/:testimonialId', component: CreateTestimonialComponent},
            {path: 'recommandation/:testimonialId', component: TestimonialsComponent},
            {path: 'recommandation', redirectTo: '/profil/recommandations'},
            {path: 'recommandations', component: TestimonialsComponent},

            // Testimonials asked
            {path: 'demande_de_recommandation/:testimonialId', component: TestimonialRequestsComponent},
            {path: 'demande_de_recommandation', redirectTo: '/profil/demandes_de_recommandation'},
            {path: 'demandes_de_recommandation', component: TestimonialRequestsComponent},

            // Businesses
            {path: 'etablissement/contacts/:businessId', component: BusinessContactsListComponent},
            {path: 'etablissement/editer/:businessId', component: CreateBusinessComponent},
            {path: 'etablissement/creer', component: CreateBusinessComponent},
            {path: 'etablissement', redirectTo: '/profil/etablissements'},
            {path: 'etablissements', component: BusinessesComponent},

            // Job posts
            {path: 'annonce/editer/:jobPostId', component: CreateJobPostComponent},
            {path: 'annonce/creer/:businessId', component: CreateJobPostComponent},
            {path: 'annonce/creer', component: CreateJobPostComponent},
            {path: 'annonces_admin', component: AdminJobPostsComponent},
            {path: 'annonce', redirectTo: '/profil/annonces'},
            {path: 'annonces', component: MyJobPostsComponent},

            // Applicants
            {path: 'postulants', component: ApplicantsComponent},
            {path: 'postulant', redirectTo: '/profil/postulants'},
            {path: 'postulants/:jobPostId', component: ApplicantsComponent},
            {path: 'postulant/apercu-profil', component: ApplicantsComponent},

            // Matching profiles
            {path: 'profils-correspondants', component: MatchingProfilesComponent},
            {path: 'profils-correspondants/:jobPostId', component: MatchingProfilesComponent},

            // Mails
            {path: 'mail-template/edit/:templateId', component: CreateMailTemplateComponent},
            {path: 'mail-template/create', component: CreateMailTemplateComponent},
            {path: 'mail-templates', component: MailTemplatesComponent},
            {path: 'mail-template', redirectTo: '/profil/mail-templates'},

            // Candidate dashboard
            {path: 'espace-candidat', component: CandidateDashboardComponent},

            // Clubs management
            {path: 'clubs', component: ClubsManagementComponent},
            {path: 'clubs/:type', component: ClubsManagementComponent},

            // Pricing plans
            {path: 'mon_abonnement', component: PricingPlansComponent},

            // Website editor
            {path: 'website-editor', component: WebsiteEditorComponent},

            // Payment
            {path: 'confirmation-paiement/:success', redirectTo: '/profil/mon_abonnement'},

            // Admin
            {path: 'recruteurs-admin', component: RecruitersAdminComponent},
            {path: 'packs', component: AdminPlansComponent},

            {
                path: '',
                component: ProfilePreviewComponent
            }
        ]
    }
];

var jobSearchRoutes = [
    { path: 'tous-les-emplois', component: JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Tous les emplois'
            }
        }
    },
    { path: ':placeId/:jobNamingId/:contractTypeId/:studyLevelId', component: JobSearchResultsComponent,
        data: {
            meta: {
                title: 'Recherche d\'emploi'
            }
        }
    },
    { path: 'candidater/:jobId', component: NewApplicationFormComponent },
    { path: 'annonce/:jobId', component: JobComponent },
    {
        path: '',
        component: JobSearchResultsComponent
    }
];*/