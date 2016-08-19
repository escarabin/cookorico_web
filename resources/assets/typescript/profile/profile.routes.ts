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
import { EditWebsiteComponent } from './components/edit-website.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            // Root
            {path: 'show', component: ProfilePreviewComponent},
            {path: 'show/:userId', component: ProfilePreviewComponent},

            // Experiences
            {path: 'experiences/all', component: ExperiencesComponent},
            {path: 'experience/create', component: CreateExperienceComponent},
            {path: 'experience/edit/:experienceId', component: CreateExperienceComponent},

            // Applications
            {path: 'applications/all', component: ApplicationsComponent},

            // Education
            {path: 'education/all', component: EducationComponent},
            {path: 'education/edit/:studyId', component: CreateStudyComponent},
            {path: 'education/create', component: CreateStudyComponent},

            // Alerts
            {path: 'alerts/all', component: AlertsComponent},
            {path: 'alert/:alertId', component: AlertsComponent},
            {path: 'alert/create', component: CreateAlertComponent},
            {path: 'alert/edit/:alertId', component: CreateAlertComponent},

            // Testimonials
            {path: 'testimonials/all', component: TestimonialsComponent},
            {path: 'testimonials/:testimonialId', component: TestimonialsComponent},

            // Businesses
            {path: 'businesses/all', component: BusinessesComponent},
            {path: 'business/create', component: CreateBusinessComponent},
            {path: 'business/edit/:businessId', component: CreateBusinessComponent},

            // Job posts
            {path: 'job-posts/all', component: MyJobPostsComponent},
            {path: 'job-post/create', component: CreateJobPostComponent},
            {path: 'job-post/edit/:jobPostId', component: CreateJobPostComponent},

            // Applicants
            {path: 'applicants/all', component: ApplicantsComponent},
            {path: 'applicants/show_profile', component: ApplicantsComponent},

            // Mails
            {path: 'mail/templates', component: MailTemplatesComponent},
            {path: 'mail/template/create', component: CreateMailTemplateComponent},
            {path: 'mail/template/edit/:templateId', component: CreateMailTemplateComponent},

            // Website editor
            {path: 'website-editor', component: EditWebsiteComponent},

            {
                path: '',
                component: ProfilePreviewComponent
            }
        ]
    }
];

// - Updated Export
export const profileRouting = RouterModule.forChild(profileRoutes);