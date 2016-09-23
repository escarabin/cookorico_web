System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/router', './app.routes', './shared/shared.module', './services/notification.service', './app.component', './shared/components/home.component', './shared/components/header.component', './shared/components/footer.component', './shared/components/sign-in.component', './shared/components/notification.component', './shared/components/post-preview.component', './shared/components/post.component', './shared/components/sign-up.component', './shared/components/profile-sub-header.component', './shared/components/recruiter-promo.component', './shared/components/club.component', 'ng2-pagination'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, router_1, app_routes_1, shared_module_1, notification_service_1, app_component_1, home_component_1, header_component_1, footer_component_1, sign_in_component_1, notification_component_1, post_preview_component_1, post_component_1, sign_up_component_1, profile_sub_header_component_1, recruiter_promo_component_1, club_component_1, ng2_pagination_1;
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
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (sign_in_component_1_1) {
                sign_in_component_1 = sign_in_component_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            },
            function (post_preview_component_1_1) {
                post_preview_component_1 = post_preview_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (profile_sub_header_component_1_1) {
                profile_sub_header_component_1 = profile_sub_header_component_1_1;
            },
            function (recruiter_promo_component_1_1) {
                recruiter_promo_component_1 = recruiter_promo_component_1_1;
            },
            function (club_component_1_1) {
                club_component_1 = club_component_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            post_component_1.PostComponent,
                            club_component_1.ClubComponent,
                            sign_up_component_1.SignUpComponent,
                            ng2_pagination_1.PaginationControlsCmp,
                            post_preview_component_1.PostPreviewComponent,
                            sign_in_component_1.SignInComponent,
                            profile_sub_header_component_1.ProfileSubHeaderComponent,
                            recruiter_promo_component_1.RecruiterPromoComponent,
                            notification_component_1.NotificationsComponent],
                        imports: [platform_browser_1.BrowserModule,
                            router_1.RouterModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            shared_module_1.SharedModule,
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
