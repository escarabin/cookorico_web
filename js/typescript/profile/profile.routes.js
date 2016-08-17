System.register(['@angular/router', "./components/applications.component", "./components/experiences.component", "./components/education.component", "./components/alerts.component", "./components/testimonials.component", "./components/create-experience.component", "./components/create-study.component", "./components/create-alert.component", "./components/create-business.component", "./components/businesses.component", './components/my-job-posts.component', './components/create-job-post.component', './components/applicants.component', './components/profile-preview.component', './components/mail-templates.component', './components/create-mail-template.component', './components/edit-website.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1, my_job_posts_component_1, create_job_post_component_1, applicants_component_1, profile_preview_component_1, mail_templates_component_1, create_mail_template_component_1, edit_website_component_1;
    var profileRoutes, profileRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (edit_website_component_1_1) {
                edit_website_component_1 = edit_website_component_1_1;
            }],
        execute: function() {
            profileRoutes = [
                // Root
                { path: 'show', name: 'ProfilePreview', component: profile_preview_component_1.ProfilePreviewComponent, useAsDefault: true },
                { path: 'show/:userId', name: 'ShowUserProfile', component: profile_preview_component_1.ProfilePreviewComponent },
                // Experiences
                { path: 'experiences/all', name: 'Experiences', component: experiences_component_1.ExperiencesComponent },
                { path: 'experience/create', name: 'CreateExperience', component: create_experience_component_1.CreateExperienceComponent },
                { path: 'experience/edit/:experienceId', name: 'EditExperience', component: create_experience_component_1.CreateExperienceComponent },
                // Applications
                { path: 'applications/all', name: 'Applications', component: applications_component_1.ApplicationsComponent },
                // Education
                { path: 'education/all', name: 'Education', component: education_component_1.EducationComponent },
                { path: 'education/edit/:studyId', name: 'EditStudy', component: create_study_component_1.CreateStudyComponent },
                { path: 'education/create', name: 'CreateStudy', component: create_study_component_1.CreateStudyComponent },
                // Alerts
                { path: 'alerts/all', name: 'Alerts', component: alerts_component_1.AlertsComponent },
                { path: 'alert/:alertId', name: 'ShowAlert', component: alerts_component_1.AlertsComponent },
                { path: 'alert/create', name: 'CreateAlert', component: create_alert_component_1.CreateAlertComponent },
                { path: 'alert/edit/:alertId', name: 'EditAlert', component: create_alert_component_1.CreateAlertComponent },
                // Testimonials
                { path: 'testimonials/all', name: 'Testimonials', component: testimonials_component_1.TestimonialsComponent },
                { path: 'testimonials/:testimonialId', name: 'Testimonial', component: testimonials_component_1.TestimonialsComponent },
                // Businesses
                { path: 'businesses/all', name: 'Businesses', component: businesses_component_1.BusinessesComponent },
                { path: 'business/create', name: 'CreateBusiness', component: create_business_component_1.CreateBusinessComponent },
                { path: 'business/edit/:businessId', name: 'EditBusiness', component: create_business_component_1.CreateBusinessComponent },
                // Job posts
                { path: 'job-posts/all', name: 'JobPosts', component: my_job_posts_component_1.MyJobPostsComponent },
                { path: 'job-post/create', name: 'CreateJobPost', component: create_job_post_component_1.CreateJobPostComponent },
                { path: 'job-post/edit/:jobPostId', name: 'EditJobPost', component: create_job_post_component_1.CreateJobPostComponent },
                // Applicants
                { path: 'applicants/all', name: 'Applicants', component: applicants_component_1.ApplicantsComponent },
                { path: 'applicants/show_profile', name: 'ShowApplicantProfile', component: applicants_component_1.ApplicantsComponent },
                // Mails
                { path: 'mail/templates', name: 'MailTemplates', component: mail_templates_component_1.MailTemplatesComponent },
                { path: 'mail/template/create', name: 'CreateMailTemplate', component: create_mail_template_component_1.CreateMailTemplateComponent },
                { path: 'mail/template/edit/:templateId', name: 'EditMailTemplate', component: create_mail_template_component_1.CreateMailTemplateComponent },
                // Website editor
                { path: 'website-editor', name: 'WebsiteEditor', component: edit_website_component_1.EditWebsiteComponent }
            ];
            // - Updated Export
            exports_1("profileRouting", profileRouting = router_1.RouterModule.forChild(profileRoutes));
        }
    }
});
