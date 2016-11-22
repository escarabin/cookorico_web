import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { SharedModule }   from './../shared/shared.module';
import { profileRouting } from './profile.routes';

// Components
import { ProfileComponent } from './components/profile.component';
import { BusinessSelectComponent } from './../shared/components/business-select.component';
import { ProfilePreviewComponent } from './components/profile-preview.component';
import { ExperiencesComponent } from './components/experiences.component';
import { CreateExperienceComponent } from './components/create-experience.component';
import { ApplicationsComponent } from './components/applications.component';
import { EducationComponent } from './components/education.component';
import { CreateStudyComponent } from './components/create-study.component';
import { ProfileSidebarComponent } from './components/profile-sidebar.component';
import { CandidateDashboardComponent } from './components/candidate-dashboard.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { TestimonialRequestsComponent } from './components/testimonial-requests.component';
import { BusinessesComponent } from './components/businesses.component';
import { CreateBusinessComponent } from './components/create-business.component';
import { MyJobPostsComponent } from './components/my-job-posts.component';
import { CreateJobPostComponent } from './components/create-job-post.component';
import { MailTemplatesComponent } from './components/mail-templates.component';
import { CreateMailTemplateComponent } from './components/create-mail-template.component';
import { WebsiteEditorComponent } from './components/website-editor.component';
import { SignUpStepsComponent } from './../shared/components/sign-up-steps.component';
import { MatchingProfilesComponent } from './components/matching-profiles.component';
import { CreateTestimonialComponent } from './components/create-testimonial.component';
import { AdminJobPostsComponent } from './components/admin-job-posts.component';
import { ClubsManagementComponent } from './components/clubs-management.component';
import { BusinessContactsListComponent } from './components/business-contacts-list.component';
import { RecruitersAdminComponent } from './components/recruiters-admin.component';
import { ConfirmUserAccountComponent } from './components/confirm-user-account.component';

// Services
import { UserService } from './../services/user.service';
import { JobService } from './../services/job.service';
import { ApplicationService } from './../services/application.service';
import { ClubService } from './../services/club.service';
import { BusinessService } from './../services/business.service';
import { TestimonialService } from './../services/testimonial.service';
import { MailService } from './../services/mail.service';
import { JobPostService } from './../services/job-post.service';
import { WebsiteEditorService } from './../services/website-editor.service';

@NgModule({
    declarations: [ ProfileComponent,
                    BusinessSelectComponent,
                    ProfilePreviewComponent,
                    ExperiencesComponent,
                    CreateExperienceComponent,
                    ApplicationsComponent,
                    EducationComponent,
                    CreateStudyComponent,
                    TestimonialsComponent,
                    BusinessesComponent,
                    MyJobPostsComponent,
                    CreateJobPostComponent,
                    ProfileSidebarComponent,
                    MailTemplatesComponent,
                    CreateMailTemplateComponent,
                    WebsiteEditorComponent,
                    ConfirmUserAccountComponent,
                    CreateBusinessComponent,
                    CandidateDashboardComponent,
                    SignUpStepsComponent,
                    RecruitersAdminComponent,
                    MatchingProfilesComponent,
                    TestimonialRequestsComponent,
                    CreateTestimonialComponent,
                    BusinessContactsListComponent,
                    AdminJobPostsComponent,
                    ClubsManagementComponent ],
    imports:      [ profileRouting,
                    FormsModule,
                    CommonModule,
                    SharedModule ],
    providers:    [ UserService,
                    JobService,
                    ApplicationService,
                    ClubService,
                    TestimonialService,
                    MailService,
                    WebsiteEditorService,
                    JobPostService ]
})

export class ProfileModule {}