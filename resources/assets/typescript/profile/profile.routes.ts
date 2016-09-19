import { Routes, RouterModule } from '@angular/router';

// Components
import { ProfileComponent } from './components/profile.component';
import { ApplicationsComponent } from "./components/applications.component";
import { ExperiencesComponent } from "./components/experiences.component";
import { EducationComponent } from "./components/education.component";
import { AlertsComponent } from "./components/alerts.component";
import { TestimonialsComponent } from "./components/testimonials.component";
import { CreateExperienceComponent } from "./components/create-experience.component";
import { CreateStudyComponent } from "./components/create-study.component";
import { CreateAlertComponent } from "./components/create-alert.component";
import { CreateBusinessComponent } from "./components/create-business.component";
import { BusinessesComponent } from "./components/businesses.component";
import { MyJobPostsComponent } from './components/my-job-posts.component';
import { CreateJobPostComponent } from './components/create-job-post.component';
import { ApplicantsComponent } from './components/applicants.component';
import { ProfilePreviewComponent } from './components/profile-preview.component';
import { MailTemplatesComponent } from './components/mail-templates.component';
import { CreateMailTemplateComponent } from './components/create-mail-template.component';
import { WebsiteEditorComponent } from "./components/website-editor.component";
import { ConfirmAccountCreationComponent } from "./components/confirm-account-creation.component";
import { MatchingProfilesComponent } from './components/matching-profiles.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            // Root
            {path: 'show', component: ProfilePreviewComponent},
            {path: 'show/:userId', component: ProfilePreviewComponent},

            // Experiences
            {path: 'experiences', component: ExperiencesComponent},
            {path: 'experience/create', component: CreateExperienceComponent},
            {path: 'experience/edit/:experienceId', component: CreateExperienceComponent},

            // Applications
            {path: 'applications', component: ApplicationsComponent},

            // Education
            {path: 'education', component: EducationComponent},
            {path: 'education/edit/:studyId', component: CreateStudyComponent},
            {path: 'education/create', component: CreateStudyComponent},

            // Alerts
            {path: 'alerts', component: AlertsComponent},
            {path: 'alert/:alertId', component: AlertsComponent},
            {path: 'alert/create', component: CreateAlertComponent},
            {path: 'alert/edit/:alertId', component: CreateAlertComponent},

            // Testimonials
            {path: 'testimonials', component: TestimonialsComponent},
            {path: 'testimonial/:testimonialId', component: TestimonialsComponent},

            // Businesses
            {path: 'businesses', component: BusinessesComponent},
            {path: 'business/create', component: CreateBusinessComponent},
            {path: 'business/edit/:businessId', component: CreateBusinessComponent},

            // Job posts
            {path: 'job-posts', component: MyJobPostsComponent},
            {path: 'job-post/create', component: CreateJobPostComponent},
            {path: 'job-post/edit/:jobPostId', component: CreateJobPostComponent},

            // Applicants
            {path: 'applicants', component: ApplicantsComponent},
            {path: 'applicants/:jobPostId', component: ApplicantsComponent},
            {path: 'applicants/show_profile', component: ApplicantsComponent},

            // Matching profiles
            {path: 'matching-profiles', component: MatchingProfilesComponent},
            {path: 'matching-profiles/:jobPostId', component: MatchingProfilesComponent},

            // Mails
            {path: 'mail-templates', component: MailTemplatesComponent},
            {path: 'mail-template/create', component: CreateMailTemplateComponent},
            {path: 'mail-template/edit/:templateId', component: CreateMailTemplateComponent},

            // Confirm account creation
            {path: 'confirm-account/:userId', component: ConfirmAccountCreationComponent},

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