import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { profileRouting } from './profile.routes';
import { ProfileComponent } from './components/profile.component';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { BusinessSelectComponent } from '../common/components/business-select.component';
import { UNITYTinyMCE } from '../common/components/tiny-mce.component';
import { ProfilePreviewComponent } from './components/profile-preview.component';
import { ExperiencesComponent } from './components/experiences.component';
import { CreateExperienceComponent } from './components/create-experience.component';
import { ApplicationsComponent } from './components/applications.component';
import { EducationComponent } from './components/education.component';
import { CreateStudyComponent } from './components/create-study.component';
import { AlertsComponent } from './components/alerts.component';
import { CreateAlertComponent } from './components/create-alert.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { BusinessesComponent } from './components/businesses.component';
import { CreateBusinessComponent } from './components/create-business.component';
import { MyJobPostsComponent } from './components/my-job-posts.component';
import { CreateJobPostComponent } from './components/create-job-post.component';
import { ApplicantsComponent } from './components/applicants.component';
import { MailTemplatesComponent } from './components/mail-templates.component';
import { CreateMailTemplateComponent } from './components/create-mail-template.component';
import { EditWebsiteComponent } from './components/edit-website.component';

@NgModule({
    declarations: [ ProfileComponent,
                    CollapseDirective,
                    FileSelectDirective,
                    FileDropDirective,
                    UNITYTinyMCE,
                    BusinessSelectComponent,
                    ProfilePreviewComponent,
                    ExperiencesComponent,
                    CreateExperienceComponent,
                    ApplicationsComponent,
                    EducationComponent,
                    CreateStudyComponent,
                    AlertsComponent,
                    CreateAlertComponent,
                    TestimonialsComponent,
                    BusinessesComponent,
                    CreateBusinessComponent,
                    MyJobPostsComponent,
                    CreateJobPostComponent,
                    ApplicantsComponent,
                    MailTemplatesComponent,
                    CreateMailTemplateComponent,
                    EditWebsiteComponent,
                    ImageCropperComponent ],
    imports:      [ profileRouting,
                    FormsModule,
                    CommonModule ],
    providers:    [],
})
export class ProfileModule {}