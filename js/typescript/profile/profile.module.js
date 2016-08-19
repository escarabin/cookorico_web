System.register(['@angular/core', '@angular/forms', '@angular/common', './profile.routes', './components/profile.component', 'ng2-bootstrap/ng2-bootstrap', 'ng2-img-cropper', 'ng2-file-upload/ng2-file-upload', './../components/business-select.component', './../components/tiny-mce.component', './components/profile-preview.component', './components/experiences.component', './components/create-experience.component', './components/applications.component', './components/education.component', './components/create-study.component', './components/profile-sidebar.component', './components/alerts.component', './components/create-alert.component', './components/testimonials.component', './components/businesses.component', './components/create-business.component', './components/my-job-posts.component', './components/create-job-post.component', './components/applicants.component', './components/mail-templates.component', './components/create-mail-template.component', './components/edit-website.component'], function(exports_1, context_1) {
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
    var core_1, forms_1, common_1, profile_routes_1, profile_component_1, ng2_bootstrap_1, ng2_img_cropper_1, ng2_file_upload_1, business_select_component_1, tiny_mce_component_1, profile_preview_component_1, experiences_component_1, create_experience_component_1, applications_component_1, education_component_1, create_study_component_1, profile_sidebar_component_1, alerts_component_1, create_alert_component_1, testimonials_component_1, businesses_component_1, create_business_component_1, my_job_posts_component_1, create_job_post_component_1, applicants_component_1, mail_templates_component_1, create_mail_template_component_1, edit_website_component_1;
    var ProfileModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (profile_routes_1_1) {
                profile_routes_1 = profile_routes_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_img_cropper_1_1) {
                ng2_img_cropper_1 = ng2_img_cropper_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            },
            function (profile_preview_component_1_1) {
                profile_preview_component_1 = profile_preview_component_1_1;
            },
            function (experiences_component_1_1) {
                experiences_component_1 = experiences_component_1_1;
            },
            function (create_experience_component_1_1) {
                create_experience_component_1 = create_experience_component_1_1;
            },
            function (applications_component_1_1) {
                applications_component_1 = applications_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (create_study_component_1_1) {
                create_study_component_1 = create_study_component_1_1;
            },
            function (profile_sidebar_component_1_1) {
                profile_sidebar_component_1 = profile_sidebar_component_1_1;
            },
            function (alerts_component_1_1) {
                alerts_component_1 = alerts_component_1_1;
            },
            function (create_alert_component_1_1) {
                create_alert_component_1 = create_alert_component_1_1;
            },
            function (testimonials_component_1_1) {
                testimonials_component_1 = testimonials_component_1_1;
            },
            function (businesses_component_1_1) {
                businesses_component_1 = businesses_component_1_1;
            },
            function (create_business_component_1_1) {
                create_business_component_1 = create_business_component_1_1;
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
            ProfileModule = (function () {
                function ProfileModule() {
                }
                ProfileModule = __decorate([
                    core_1.NgModule({
                        declarations: [profile_component_1.ProfileComponent,
                            ng2_bootstrap_1.CollapseDirective,
                            ng2_file_upload_1.FileSelectDirective,
                            ng2_file_upload_1.FileDropDirective,
                            tiny_mce_component_1.UNITYTinyMCE,
                            ng2_bootstrap_1.MODAL_DIRECTIVES,
                            business_select_component_1.BusinessSelectComponent,
                            profile_preview_component_1.ProfilePreviewComponent,
                            experiences_component_1.ExperiencesComponent,
                            create_experience_component_1.CreateExperienceComponent,
                            applications_component_1.ApplicationsComponent,
                            education_component_1.EducationComponent,
                            create_study_component_1.CreateStudyComponent,
                            alerts_component_1.AlertsComponent,
                            create_alert_component_1.CreateAlertComponent,
                            testimonials_component_1.TestimonialsComponent,
                            businesses_component_1.BusinessesComponent,
                            create_business_component_1.CreateBusinessComponent,
                            my_job_posts_component_1.MyJobPostsComponent,
                            create_job_post_component_1.CreateJobPostComponent,
                            applicants_component_1.ApplicantsComponent,
                            profile_sidebar_component_1.ProfileSidebarComponent,
                            mail_templates_component_1.MailTemplatesComponent,
                            create_mail_template_component_1.CreateMailTemplateComponent,
                            edit_website_component_1.EditWebsiteComponent,
                            ng2_img_cropper_1.ImageCropperComponent],
                        imports: [profile_routes_1.profileRouting,
                            forms_1.FormsModule,
                            common_1.CommonModule],
                        providers: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileModule);
                return ProfileModule;
            }());
            exports_1("ProfileModule", ProfileModule);
        }
    }
});
