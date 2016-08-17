System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/router', './components/app.component', './app.routes', './services/notification.service', './components/home.component', './job-search/components/job.component', './job-search/components/new-application-form.component', './components/tiny-mce.component', './components/header.component', './components/footer.component', './job-search/components/job-search-bar.component', './components/business-select.component', './job-search/components/job-preview.component', './components/post-preview.component', './components/post.component', './components/club.component', './components/sign-up.component', './profile/components/profile.component', './job-search/components/search.component', './job-search/components/job-search-sidebar.component', './components/custom-pagination.component', './profile/components/profile-sidebar.component', './components/right-sidebar.component', 'ng2-pagination', 'ng2-img-cropper', 'angular2-google-map-auto-complete/directives/googleplace.directive', 'ng2-file-upload/ng2-file-upload', 'ng2-bootstrap/ng2-bootstrap', 'angular2-google-maps/core/index'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, router_1, app_component_1, app_routes_1, notification_service_1, home_component_1, job_component_1, new_application_form_component_1, tiny_mce_component_1, header_component_1, footer_component_1, job_search_bar_component_1, business_select_component_1, job_preview_component_1, post_preview_component_1, post_component_1, club_component_1, sign_up_component_1, profile_component_1, search_component_1, job_search_sidebar_component_1, custom_pagination_component_1, profile_sidebar_component_1, right_sidebar_component_1, ng2_pagination_1, ng2_img_cropper_1, googleplace_directive_1, ng2_file_upload_1, ng2_bootstrap_1, index_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (tiny_mce_component_1_1) {
                tiny_mce_component_1 = tiny_mce_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (job_search_bar_component_1_1) {
                job_search_bar_component_1 = job_search_bar_component_1_1;
            },
            function (business_select_component_1_1) {
                business_select_component_1 = business_select_component_1_1;
            },
            function (job_preview_component_1_1) {
                job_preview_component_1 = job_preview_component_1_1;
            },
            function (post_preview_component_1_1) {
                post_preview_component_1 = post_preview_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (club_component_1_1) {
                club_component_1 = club_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (job_search_sidebar_component_1_1) {
                job_search_sidebar_component_1 = job_search_sidebar_component_1_1;
            },
            function (custom_pagination_component_1_1) {
                custom_pagination_component_1 = custom_pagination_component_1_1;
            },
            function (profile_sidebar_component_1_1) {
                profile_sidebar_component_1 = profile_sidebar_component_1_1;
            },
            function (right_sidebar_component_1_1) {
                right_sidebar_component_1 = right_sidebar_component_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            },
            function (ng2_img_cropper_1_1) {
                ng2_img_cropper_1 = ng2_img_cropper_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [ng2_bootstrap_1.BUTTON_DIRECTIVES,
                            ng2_bootstrap_1.MODAL_DIRECTIVES,
                            index_1.GOOGLE_MAPS_DIRECTIVES,
                            ng2_bootstrap_1.CollapseDirective,
                            googleplace_directive_1.GoogleplaceDirective,
                            ng2_file_upload_1.FileSelectDirective,
                            ng2_file_upload_1.FileDropDirective,
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            job_component_1.JobComponent,
                            new_application_form_component_1.NewApplicationFormComponent,
                            tiny_mce_component_1.UNITYTinyMCE,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            job_search_bar_component_1.JobSearchBarComponent,
                            post_component_1.PostComponent,
                            club_component_1.ClubComponent,
                            sign_up_component_1.SignUpComponent,
                            search_component_1.SearchComponent,
                            profile_component_1.ProfileComponent,
                            profile_sidebar_component_1.ProfileSidebarComponent,
                            ng2_img_cropper_1.ImageCropperComponent,
                            right_sidebar_component_1.RightSidebarComponent,
                            custom_pagination_component_1.CustomPaginationComponent,
                            business_select_component_1.BusinessSelectComponent,
                            ng2_pagination_1.PaginationControlsCmp,
                            job_search_sidebar_component_1.JobSearchSidebarComponent,
                            job_preview_component_1.JobPreviewComponent,
                            post_preview_component_1.PostPreviewComponent,
                        ],
                        imports: [platform_browser_1.BrowserModule,
                            router_1.RouterModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routes_1.routing],
                        providers: [notification_service_1.NotificationsService],
                        bootstrap: [app_component_1.AppComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
