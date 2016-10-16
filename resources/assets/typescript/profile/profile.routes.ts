import { Routes, RouterModule } from '@angular/router';

// Components
import { ProfileComponent } from './components/profile.component';
import { ApplicationsComponent } from "./components/applications.component";
import { ExperiencesComponent } from "./components/experiences.component";
import { EducationComponent } from "./components/education.component";
import { AlertsComponent } from "./components/alerts.component";
import { TestimonialsComponent } from "./components/testimonials.component";
import { TestimonialRequestsComponent } from "./components/testimonial-requests.component";
import { CreateTestimonialComponent } from "./components/create-testimonial.component";
import { CreateExperienceComponent } from "./components/create-experience.component";
import { CreateStudyComponent } from "./components/create-study.component";
import { CreateAlertComponent } from "./components/create-alert.component";
import { CreateBusinessComponent } from "./components/create-business.component";
import { BusinessesComponent } from "./components/businesses.component";
import { MyJobPostsComponent } from './components/my-job-posts.component';
import { AdminJobPostsComponent } from './components/admin-job-posts.component';
import { CreateJobPostComponent } from './components/create-job-post.component';
import { ApplicantsComponent } from './components/applicants.component';
import { ProfilePreviewComponent } from './components/profile-preview.component';
import { MailTemplatesComponent } from './components/mail-templates.component';
import { CreateMailTemplateComponent } from './components/create-mail-template.component';
import { WebsiteEditorComponent } from "./components/website-editor.component";
import { ConfirmAccountCreationComponent } from "./components/confirm-account-creation.component";
import { MatchingProfilesComponent } from './components/matching-profiles.component';
import { TestimonialRequestsComponent } from "./components/testimonial-requests.component";
import { PricingPlansComponent } from '../shared/components/pricing-plans.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            // Root
            {path: 'apercu', component: ProfilePreviewComponent},
            {path: 'apercu/:userId', component: ProfilePreviewComponent},

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

            // Alerts
            {path: 'alerte/editer/:alertId', component: CreateAlertComponent},
            {path: 'alerte/:alertId', component: AlertsComponent},
            {path: 'alerte/creer', component: CreateAlertComponent},
            {path: 'alertes', component: AlertsComponent},
            {path: 'alerte', redirectTo: '/profil/alertes'},

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
            {path: 'mail-templates', component: MailTemplatesComponent},
            {path: 'mail-template', redirectTo: '/profil/mail-templates'},
            {path: 'mail-template/create', component: CreateMailTemplateComponent},
            {path: 'mail-template/edit/:templateId', component: CreateMailTemplateComponent},

            // Confirm account creation
            {path: 'confirmer-le-compte/:userId', component: ConfirmAccountCreationComponent},

            // Pricing plans
            {path: 'mon_abonnement', component: PricingPlansComponent},

            // Website editor
            {path: 'website-editor', component: WebsiteEditorComponent},

            {
                path: '',
                component: ProfilePreviewComponent
            }
        ]
    }
];

// - Updated Export
export const profileRouting = RouterModule.forChild(profileRoutes);