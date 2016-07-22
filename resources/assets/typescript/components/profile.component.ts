import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouteParams,
         RouterLink,
         RouterOutlet,
         RouteConfig } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';

// Components
import { UserSidebarComponent } from './user-sidebar.component';
import { ApplicationsComponent } from "./applications.component";
import { ExperiencesComponent } from "./experiences.component";
import { EducationComponent } from "./education.component";
import { AlertsComponent } from "./alerts.component";
import { TestimonialsComponent } from "./testimonials.component";
import { CreateExperienceComponent } from "./create-experience.component";
import { CreateStudyComponent } from "./create-study.component";
import { CreateAlertComponent } from "./create-alert.component";
import { CreateBusinessComponent } from "./create-business.component";
import { BusinessesComponent } from "./businesses.component";
import { RightSidebarComponent } from "./right-sidebar.component";
import { MyJobPostsComponent } from './my-job-posts.component';
import { CreateJobPostComponent } from './create-job-post.component';
import { SignUpComponent } from './sign-up.component';

@Component({
    providers: [UserService],
    directives: [RouterLink,
                RouterOutlet,
                UserSidebarComponent,
                RightSidebarComponent,
                SignUpComponent],
    selector: 'profile',
    templateUrl: '../templates/profile.component.html',
})

/**
 * Profile child routing
 */

@RouteConfig([
    // Root
    { path: '/show', name: 'Show', component: SignUpComponent, useAsDefault: true },

    // Experiences
    { path: '/experiences/all', name: 'Experiences', component: ExperiencesComponent },
    { path: '/experience/create', name: 'CreateExperience', component: CreateExperienceComponent },
    { path: '/experience/edit/:experienceId', name: 'EditExperience', component: CreateExperienceComponent },

    // Applications
    { path: '/applications/all', name: 'Applications', component: ApplicationsComponent },

    // Education
    { path: '/education/all', name: 'Education', component: EducationComponent },
    { path: '/education/edit/:studyId', name: 'EditStudy', component: CreateStudyComponent },
    { path: '/education/create', name: 'CreateStudy', component: CreateStudyComponent },

    // Alerts
    { path: '/alerts/all', name: 'Alerts', component: AlertsComponent },
    { path: '/alert/:alertId', name: 'ShowAlert', component: AlertsComponent },
    { path: '/alert/create', name: 'CreateAlert', component: CreateAlertComponent },
    { path: '/alert/edit/:alertId', name: 'EditAlert', component: CreateAlertComponent },

    // Testimonials
    { path: '/testimonials/all', name: 'Testimonials', component: TestimonialsComponent },
    { path: '/testimonials/:testimonialId', name: 'Testimonial', component: TestimonialsComponent },

    // Businesses
    { path: '/businesses/all', name: 'Businesses', component: BusinessesComponent },
    { path: '/business/create', name: 'CreateBusiness', component: CreateBusinessComponent },
    { path: '/business/edit/:businessId', name: 'EditBusiness', component: CreateBusinessComponent },

    // Job posts
    { path: '/job-posts/all', name: 'JobPosts', component: MyJobPostsComponent },
    { path: '/job-post/create', name: 'CreateJobPost', component: CreateJobPostComponent },
    { path: '/job-post/edit/:jobPostId', name: 'EditJobPost', component: CreateJobPostComponent },
])

export class ProfileComponent {
    user: any;

    constructor(private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}