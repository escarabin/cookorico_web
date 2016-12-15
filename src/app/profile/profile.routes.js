"use strict";
var router_1 = require('@angular/router');
// Components
var profile_component_1 = require('./components/profile.component');
var applications_component_1 = require("./components/applications.component");
var experiences_component_1 = require("./components/experiences.component");
var education_component_1 = require("./components/education.component");
var testimonials_component_1 = require("./components/testimonials.component");
var testimonial_requests_component_1 = require("./components/testimonial-requests.component");
var create_testimonial_component_1 = require("./components/create-testimonial.component");
var create_experience_component_1 = require("./components/create-experience.component");
var create_study_component_1 = require("./components/create-study.component");
var create_business_component_1 = require("./components/create-business.component");
var businesses_component_1 = require("./components/businesses.component");
var my_job_posts_component_1 = require('./components/my-job-posts.component');
var admin_job_posts_component_1 = require('./components/admin-job-posts.component');
var create_job_post_component_1 = require('./components/create-job-post.component');
var applicants_component_1 = require('./components/applicants.component');
var profile_preview_component_1 = require('./components/profile-preview.component');
var mail_templates_component_1 = require('./components/mail-templates.component');
var create_mail_template_component_1 = require('./components/create-mail-template.component');
var website_editor_component_1 = require("./components/website-editor.component");
var matching_profiles_component_1 = require('./components/matching-profiles.component');
var pricing_plans_component_1 = require('../shared/components/pricing-plans.component');
var candidate_dashboard_component_1 = require('./components/candidate-dashboard.component');
var clubs_management_component_1 = require('./components/clubs-management.component');
var business_contacts_list_component_1 = require('./components/business-contacts-list.component');
var recruiters_admin_component_1 = require('./components/recruiters-admin.component');
var confirm_user_account_component_1 = require("./components/confirm-user-account.component");
var admin_plans_component_1 = require("./components/admin-plans.component");
var profileRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent,
        children: [
            // Root
            { path: 'apercu', component: profile_preview_component_1.ProfilePreviewComponent },
            { path: 'apercu/:userId', component: profile_preview_component_1.ProfilePreviewComponent },
            { path: 'apercu/:userId/complet', component: profile_preview_component_1.ProfilePreviewComponent },
            { path: 'confirmation-du-compte/:userTypeId', component: confirm_user_account_component_1.ConfirmUserAccountComponent },
            // Experiences
            { path: 'experience/editer/:experienceId', component: create_experience_component_1.CreateExperienceComponent },
            { path: 'experience/creer', component: create_experience_component_1.CreateExperienceComponent },
            { path: 'experiences', component: experiences_component_1.ExperiencesComponent },
            { path: 'experience', redirectTo: '/profil/experiences' },
            // Applications
            { path: 'candidatures', component: applications_component_1.ApplicationsComponent },
            // Education
            { path: 'formation/editer/:studyId', component: create_study_component_1.CreateStudyComponent },
            { path: 'formation/creer', component: create_study_component_1.CreateStudyComponent },
            { path: 'formations', component: education_component_1.EducationComponent },
            { path: 'formation', redirectTo: '/profil/formations' },
            // Alerts
            /*{path: 'alerte/editer/:alertId', component: CreateAlertComponent},
            {path: 'alerte/creer', component: CreateAlertComponent},
            {path: 'alertes', component: AlertsComponent},
            {path: 'alerte', redirectTo: '/profil/alertes'},*/
            // Testimonials
            { path: 'recommandation/creer/:testimonialId', component: create_testimonial_component_1.CreateTestimonialComponent },
            { path: 'recommandation/:testimonialId', component: testimonials_component_1.TestimonialsComponent },
            { path: 'recommandation', redirectTo: '/profil/recommandations' },
            { path: 'recommandations', component: testimonials_component_1.TestimonialsComponent },
            // Testimonials asked
            { path: 'demande_de_recommandation/:testimonialId', component: testimonial_requests_component_1.TestimonialRequestsComponent },
            { path: 'demande_de_recommandation', redirectTo: '/profil/demandes_de_recommandation' },
            { path: 'demandes_de_recommandation', component: testimonial_requests_component_1.TestimonialRequestsComponent },
            // Businesses
            { path: 'etablissement/contacts/:businessId', component: business_contacts_list_component_1.BusinessContactsListComponent },
            { path: 'etablissement/editer/:businessId', component: create_business_component_1.CreateBusinessComponent },
            { path: 'etablissement/creer', component: create_business_component_1.CreateBusinessComponent },
            { path: 'etablissement', redirectTo: '/profil/etablissements' },
            { path: 'etablissements', component: businesses_component_1.BusinessesComponent },
            // Job posts
            { path: 'annonce/editer/:jobPostId', component: create_job_post_component_1.CreateJobPostComponent },
            { path: 'annonce/creer/:businessId', component: create_job_post_component_1.CreateJobPostComponent },
            { path: 'annonce/creer', component: create_job_post_component_1.CreateJobPostComponent },
            { path: 'annonces_admin', component: admin_job_posts_component_1.AdminJobPostsComponent },
            { path: 'annonce', redirectTo: '/profil/annonces' },
            { path: 'annonces', component: my_job_posts_component_1.MyJobPostsComponent },
            // Applicants
            { path: 'postulants', component: applicants_component_1.ApplicantsComponent },
            { path: 'postulant', redirectTo: '/profil/postulants' },
            { path: 'postulants/:jobPostId', component: applicants_component_1.ApplicantsComponent },
            { path: 'postulant/apercu-profil', component: applicants_component_1.ApplicantsComponent },
            // Matching profiles
            { path: 'profils-correspondants', component: matching_profiles_component_1.MatchingProfilesComponent },
            { path: 'profils-correspondants/:jobPostId', component: matching_profiles_component_1.MatchingProfilesComponent },
            // Mails
            { path: 'mail-template/edit/:templateId', component: create_mail_template_component_1.CreateMailTemplateComponent },
            { path: 'mail-template/create', component: create_mail_template_component_1.CreateMailTemplateComponent },
            { path: 'mail-templates', component: mail_templates_component_1.MailTemplatesComponent },
            { path: 'mail-template', redirectTo: '/profil/mail-templates' },
            // Candidate dashboard
            { path: 'espace-candidat', component: candidate_dashboard_component_1.CandidateDashboardComponent },
            // Clubs management
            { path: 'clubs', component: clubs_management_component_1.ClubsManagementComponent },
            { path: 'clubs/:type', component: clubs_management_component_1.ClubsManagementComponent },
            // Pricing plans
            { path: 'mon_abonnement', component: pricing_plans_component_1.PricingPlansComponent },
            // Website editor
            { path: 'website-editor', component: website_editor_component_1.WebsiteEditorComponent },
            // Payment
            { path: 'confirmation-paiement/:success', redirectTo: '/profil/mon_abonnement' },
            // Admin
            { path: 'recruteurs-admin', component: recruiters_admin_component_1.RecruitersAdminComponent },
            { path: 'packs', component: admin_plans_component_1.AdminPlansComponent },
            {
                path: '',
                component: profile_preview_component_1.ProfilePreviewComponent
            }
        ]
    }
];
// - Updated Export
exports.profileRouting = router_1.RouterModule.forChild(profileRoutes);
