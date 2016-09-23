System.register(['@angular/router', './components/profile.component', "./components/applications.component", "./components/experiences.component", "./components/education.component", "./components/alerts.component", "./components/testimonials.component", "./components/create-experience.component", "./components/create-study.component", "./components/create-alert.component", "./components/create-business.component", "./components/businesses.component", './components/my-job-posts.component', './components/create-job-post.component', './components/applicants.component', './components/profile-preview.component', './components/mail-templates.component', './components/create-mail-template.component', "./components/website-editor.component", "./components/confirm-account-creation.component", './components/matching-profiles.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, profile_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1, my_job_posts_component_1, create_job_post_component_1, applicants_component_1, profile_preview_component_1, mail_templates_component_1, create_mail_template_component_1, website_editor_component_1, confirm_account_creation_component_1, matching_profiles_component_1;
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
            },
            function (matching_profiles_component_1_1) {
                matching_profiles_component_1 = matching_profiles_component_1_1;
            }],
        execute: function() {
            profileRoutes = [
                {
                    path: '',
                    component: profile_component_1.ProfileComponent,
                    children: [
                        // Root
                        { path: 'apercu', component: profile_preview_component_1.ProfilePreviewComponent },
                        { path: 'apercu/:userId', component: profile_preview_component_1.ProfilePreviewComponent },
                        // Experiences
                        { path: 'experiences', component: experiences_component_1.ExperiencesComponent },
                        { path: 'experience/creer', component: create_experience_component_1.CreateExperienceComponent },
                        { path: 'experience/editer/:experienceId', component: create_experience_component_1.CreateExperienceComponent },
                        // Applications
                        { path: 'candidatures', component: applications_component_1.ApplicationsComponent },
                        // Education
                        { path: 'formations', component: education_component_1.EducationComponent },
                        { path: 'formation/editer/:studyId', component: create_study_component_1.CreateStudyComponent },
                        { path: 'formation/creer', component: create_study_component_1.CreateStudyComponent },
                        // Alerts
                        { path: 'alertes', component: alerts_component_1.AlertsComponent },
                        { path: 'alerte/:alertId', component: alerts_component_1.AlertsComponent },
                        { path: 'alerte/creer', component: create_alert_component_1.CreateAlertComponent },
                        { path: 'alerte/editer/:alertId', component: create_alert_component_1.CreateAlertComponent },
                        // Testimonials
                        { path: 'recommandations', component: testimonials_component_1.TestimonialsComponent },
                        { path: 'recommandation/:testimonialId', component: testimonials_component_1.TestimonialsComponent },
                        // Businesses
                        { path: 'etablissements', component: businesses_component_1.BusinessesComponent },
                        { path: 'etablissement/creer', component: create_business_component_1.CreateBusinessComponent },
                        { path: 'etablissement/editer/:businessId', component: create_business_component_1.CreateBusinessComponent },
                        // Job posts
                        { path: 'annonces', component: my_job_posts_component_1.MyJobPostsComponent },
                        { path: 'annonce/creer', component: create_job_post_component_1.CreateJobPostComponent },
                        { path: 'annonce/editer/:jobPostId', component: create_job_post_component_1.CreateJobPostComponent },
                        // Applicants
                        { path: 'postulants', component: applicants_component_1.ApplicantsComponent },
                        { path: 'postulants/:jobPostId', component: applicants_component_1.ApplicantsComponent },
                        { path: 'postulant/apercu-profil', component: applicants_component_1.ApplicantsComponent },
                        // Matching profiles
                        { path: 'profils-correspondants', component: matching_profiles_component_1.MatchingProfilesComponent },
                        { path: 'profils-correspondants/:jobPostId', component: matching_profiles_component_1.MatchingProfilesComponent },
                        // Mails
                        { path: 'mail-templates', component: mail_templates_component_1.MailTemplatesComponent },
                        { path: 'mail-template/create', component: create_mail_template_component_1.CreateMailTemplateComponent },
                        { path: 'mail-template/edit/:templateId', component: create_mail_template_component_1.CreateMailTemplateComponent },
                        // Confirm account creation
                        { path: 'confirmer-le-compte/:userId', component: confirm_account_creation_component_1.ConfirmAccountCreationComponent },
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
