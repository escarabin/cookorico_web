"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var user_service_1 = require('./.././user.service');
// Components
var user_sidebar_component_1 = require('./profile-sidebar.component.ts');
var applications_component_1 = require("./applications.component.ts");
var experiences_component_1 = require("./experiences.component.ts");
var education_component_1 = require("./education.component.ts");
var alerts_component_1 = require("./alerts.component.ts");
var testimonials_component_1 = require("./testimonials.component.ts");
var create_experience_component_1 = require("./create-experience.component.ts");
var create_study_component_1 = require("./create-study.component.ts");
var create_alert_component_1 = require("./create-alert.component.ts");
var create_business_component_1 = require("./create-business.component.ts");
var businesses_component_1 = require("./businesses.component.ts");
var right_sidebar_component_1 = require("./right-sidebar.component");
var my_job_posts_component_1 = require('./my-job-posts.component.ts');
var create_job_post_component_1 = require('./create-job-post.component.ts');
var sign_up_component_1 = require('./sign-up.component');
var applicants_component_1 = require('./applicants.component.ts');
var profile_preview_component_1 = require('./profile-preview.component.ts');
var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ProfileComponent = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink,
                router_deprecated_1.RouterOutlet,
                user_sidebar_component_1.UserSidebarComponent,
                right_sidebar_component_1.RightSidebarComponent,
                sign_up_component_1.SignUpComponent],
            selector: 'profile',
            templateUrl: '../templates/profile.component.html',
        }),
        router_deprecated_1.RouteConfig([
            // Root
            { path: '/show', name: 'ProfilePreview', component: profile_preview_component_1.ProfilePreviewComponent, useAsDefault: true },
            // Experiences
            { path: '/experiences/all', name: 'Experiences', component: experiences_component_1.ExperiencesComponent },
            { path: '/experience/create', name: 'CreateExperience', component: create_experience_component_1.CreateExperienceComponent },
            { path: '/experience/edit/:experienceId', name: 'EditExperience', component: create_experience_component_1.CreateExperienceComponent },
            // Applications
            { path: '/applications/all', name: 'Applications', component: applications_component_1.ApplicationsComponent },
            // Education
            { path: '/education/all', name: 'Education', component: education_component_1.EducationComponent },
            { path: '/education/edit/:studyId', name: 'EditStudy', component: create_study_component_1.CreateStudyComponent },
            { path: '/education/create', name: 'CreateStudy', component: create_study_component_1.CreateStudyComponent },
            // Alerts
            { path: '/alerts/all', name: 'Alerts', component: alerts_component_1.AlertsComponent },
            { path: '/alert/:alertId', name: 'ShowAlert', component: alerts_component_1.AlertsComponent },
            { path: '/alert/create', name: 'CreateAlert', component: create_alert_component_1.CreateAlertComponent },
            { path: '/alert/edit/:alertId', name: 'EditAlert', component: create_alert_component_1.CreateAlertComponent },
            // Testimonials
            { path: '/testimonials/all', name: 'Testimonials', component: testimonials_component_1.TestimonialsComponent },
            { path: '/testimonials/:testimonialId', name: 'Testimonial', component: testimonials_component_1.TestimonialsComponent },
            // Businesses
            { path: '/businesses/all', name: 'Businesses', component: businesses_component_1.BusinessesComponent },
            { path: '/business/create', name: 'CreateBusiness', component: create_business_component_1.CreateBusinessComponent },
            { path: '/business/edit/:businessId', name: 'EditBusiness', component: create_business_component_1.CreateBusinessComponent },
            // Job posts
            { path: '/job-posts/all', name: 'JobPosts', component: my_job_posts_component_1.MyJobPostsComponent },
            { path: '/job-post/create', name: 'CreateJobPost', component: create_job_post_component_1.CreateJobPostComponent },
            { path: '/job-post/edit/:jobPostId', name: 'EditJobPost', component: create_job_post_component_1.CreateJobPostComponent },
            // Applicants
            { path: '/applicants/all', name: 'Applicants', component: applicants_component_1.ApplicantsComponent },
        ]), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map