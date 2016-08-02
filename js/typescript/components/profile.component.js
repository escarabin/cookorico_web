System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './user-sidebar.component', "./applications.component", "./experiences.component", "./education.component", "./alerts.component", "./testimonials.component", "./create-experience.component", "./create-study.component", "./create-alert.component", "./create-business.component", "./businesses.component", "./right-sidebar.component", './my-job-posts.component', './create-job-post.component', './sign-up.component', './applicants.component', './profile-preview.component', './mail-templates.component', './create-mail-template.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, user_service_1, user_sidebar_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1, right_sidebar_component_1, my_job_posts_component_1, create_job_post_component_1, sign_up_component_1, applicants_component_1, profile_preview_component_1, mail_templates_component_1, create_mail_template_component_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_sidebar_component_1_1) {
                user_sidebar_component_1 = user_sidebar_component_1_1;
            },
            function (applications_component_1_1) {
                applications_component_1 = applications_component_1_1;
            },
            function (experiences_component_1_1) {
                experiences_component_1 = experiences_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (alerts_component_1_1) {
                alerts_component_1 = alerts_component_1_1;
            },
            function (testimonials_component_1_1) {
                testimonials_component_1 = testimonials_component_1_1;
            },
            function (create_experience_component_1_1) {
                create_experience_component_1 = create_experience_component_1_1;
            },
            function (create_study_component_1_1) {
                create_study_component_1 = create_study_component_1_1;
            },
            function (create_alert_component_1_1) {
                create_alert_component_1 = create_alert_component_1_1;
            },
            function (create_business_component_1_1) {
                create_business_component_1 = create_business_component_1_1;
            },
            function (businesses_component_1_1) {
                businesses_component_1 = businesses_component_1_1;
            },
            function (right_sidebar_component_1_1) {
                right_sidebar_component_1 = right_sidebar_component_1_1;
            },
            function (my_job_posts_component_1_1) {
                my_job_posts_component_1 = my_job_posts_component_1_1;
            },
            function (create_job_post_component_1_1) {
                create_job_post_component_1 = create_job_post_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (applicants_component_1_1) {
                applicants_component_1 = applicants_component_1_1;
            },
            function (profile_preview_component_1_1) {
                profile_preview_component_1 = profile_preview_component_1_1;
            },
            function (mail_templates_component_1_1) {
                mail_templates_component_1 = mail_templates_component_1_1;
            },
            function (create_mail_template_component_1_1) {
                create_mail_template_component_1 = create_mail_template_component_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
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
                            mail_templates_component_1.MailTemplatesComponent,
                            create_mail_template_component_1.CreateMailTemplateComponent,
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
                        // Mails
                        { path: '/mail/templates', name: 'MailTemplates', component: mail_templates_component_1.MailTemplatesComponent },
                        { path: '/mail/template/create', name: 'CreateMailTemplate', component: create_mail_template_component_1.CreateMailTemplateComponent },
                        { path: '/mail/template/edit/:templateId', name: 'EditMailTemplate', component: create_mail_template_component_1.CreateMailTemplateComponent }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
