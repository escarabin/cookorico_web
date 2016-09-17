System.register(['@angular/router', './components/profile.component', "./components/applications.component", "./components/experiences.component", "./components/education.component", "./components/alerts.component", "./components/testimonials.component", "./components/create-experience.component", "./components/create-study.component", "./components/create-alert.component", "./components/create-business.component", "./components/businesses.component", './components/my-job-posts.component', './components/create-job-post.component', './components/applicants.component', './components/profile-preview.component', './components/mail-templates.component', './components/create-mail-template.component', "./components/website-editor.component", "./components/confirm-account-creation.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, profile_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1, my_job_posts_component_1, create_job_post_component_1, applicants_component_1, profile_preview_component_1, mail_templates_component_1, create_mail_template_component_1, website_editor_component_1, confirm_account_creation_component_1;
    var profileRoutes, profileRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
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
            function (my_job_posts_component_1_1) {
                my_job_posts_component_1 = my_job_posts_component_1_1;
            },
            function (create_job_post_component_1_1) {
                create_job_post_component_1 = create_job_post_component_1_1;
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
            },
            function (website_editor_component_1_1) {
                website_editor_component_1 = website_editor_component_1_1;
            },
            function (confirm_account_creation_component_1_1) {
                confirm_account_creation_component_1 = confirm_account_creation_component_1_1;
            }],
        execute: function() {
            profileRoutes = [
                {
                    path: '',
                    component: profile_component_1.ProfileComponent,
                    children: [
                        // Root
                        { path: 'show', component: profile_preview_component_1.ProfilePreviewComponent },
                        { path: 'show/:userId', component: profile_preview_component_1.ProfilePreviewComponent },
                        // Experiences
                        { path: 'experiences', component: experiences_component_1.ExperiencesComponent },
                        { path: 'experience/create', component: create_experience_component_1.CreateExperienceComponent },
                        { path: 'experience/edit/:experienceId', component: create_experience_component_1.CreateExperienceComponent },
                        // Applications
                        { path: 'applications', component: applications_component_1.ApplicationsComponent },
                        // Education
                        { path: 'education', component: education_component_1.EducationComponent },
                        { path: 'education/edit/:studyId', component: create_study_component_1.CreateStudyComponent },
                        { path: 'education/create', component: create_study_component_1.CreateStudyComponent },
                        // Alerts
                        { path: 'alerts', component: alerts_component_1.AlertsComponent },
                        { path: 'alert/:alertId', component: alerts_component_1.AlertsComponent },
                        { path: 'alert/create', component: create_alert_component_1.CreateAlertComponent },
                        { path: 'alert/edit/:alertId', component: create_alert_component_1.CreateAlertComponent },
                        // Testimonials
                        { path: 'testimonials', component: testimonials_component_1.TestimonialsComponent },
                        { path: 'testimonial/:testimonialId', component: testimonials_component_1.TestimonialsComponent },
                        // Businesses
                        { path: 'businesses', component: businesses_component_1.BusinessesComponent },
                        { path: 'business/create', component: create_business_component_1.CreateBusinessComponent },
                        { path: 'business/edit/:businessId', component: create_business_component_1.CreateBusinessComponent },
                        // Job posts
                        { path: 'job-posts', component: my_job_posts_component_1.MyJobPostsComponent },
                        { path: 'job-post/create', component: create_job_post_component_1.CreateJobPostComponent },
                        { path: 'job-post/edit/:jobPostId', component: create_job_post_component_1.CreateJobPostComponent },
                        // Applicants
                        { path: 'applicants', component: applicants_component_1.ApplicantsComponent },
                        { path: 'applicants/show_profile', component: applicants_component_1.ApplicantsComponent },
                        // Mails
                        { path: 'mail-templates', component: mail_templates_component_1.MailTemplatesComponent },
                        { path: 'mail-template/create', component: create_mail_template_component_1.CreateMailTemplateComponent },
                        { path: 'mail-template/edit/:templateId', component: create_mail_template_component_1.CreateMailTemplateComponent },
                        // Confirm account creation
                        { path: 'confirm-account/:userId', component: confirm_account_creation_component_1.ConfirmAccountCreationComponent },
                        // Website editor
                        { path: 'website-editor', component: website_editor_component_1.WebsiteEditorComponent },
                        {
                            path: '',
                            component: profile_preview_component_1.ProfilePreviewComponent
                        }
                    ]
                }
            ];
            // - Updated Export
            exports_1("profileRouting", profileRouting = router_1.RouterModule.forChild(profileRoutes));
        }
    }
});
