"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var shared_module_1 = require('./shared/shared.module');
var ng2_meta_1 = require('ng2-meta');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('angular2-google-maps/core/index');
var forms_1 = require('@angular/forms');
var angular2_recaptcha_1 = require('angular2-recaptcha');
var angulartics2_1 = require('angulartics2');
// Services
var notification_service_1 = require('./services/notification.service');
var user_service_1 = require('./services/user.service');
var club_service_1 = require('./services/club.service');
var job_service_1 = require('./services/job.service');
var plan_service_1 = require('./services/plan.service');
// Components
var app_component_1 = require('./app.component');
var business_page_component_1 = require('./shared/components/business-page.component');
var home_component_1 = require('./shared/components/home.component');
var header_component_1 = require('./shared/components/header.component');
var footer_component_1 = require('./shared/components/footer.component');
var sign_in_component_1 = require('./shared/components/sign-in.component');
var notification_component_1 = require('./shared/components/notification.component');
var profile_sub_header_component_1 = require('./shared/components/profile-sub-header.component');
var recruiter_promo_component_1 = require('./shared/components/recruiter-promo.component');
var candidate_promo_component_1 = require('./shared/components/candidate-promo.component');
var candidate_sign_up_component_1 = require('./shared/components/candidate-sign-up.component');
var cgu_component_1 = require('./shared/components/cgu.component');
var cgv_component_1 = require('./shared/components/cgv.component');
var about_component_1 = require('./shared/components/about.component');
var define_new_password_component_1 = require("./shared/components/define-new-password.component");
// Global vars
var globals_1 = require('globals');
var metaConfig = {
    //Append a title suffix such as a site name to all titles
    //Defaults to false
    useTitleSuffix: true,
    defaults: {
        title: 'Accueil',
        titleSuffix: ' | Cookorico',
        'og:image': '/img/oechr_logo.png',
        'any other': 'arbitrary tag can be used'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                candidate_sign_up_component_1.CandidateSignUpComponent,
                sign_in_component_1.SignInComponent,
                profile_sub_header_component_1.ProfileSubHeaderComponent,
                cgu_component_1.CguComponent,
                about_component_1.AboutComponent,
                cgv_component_1.CgvComponent,
                business_page_component_1.BusinessPageComponent,
                recruiter_promo_component_1.RecruiterPromoComponent,
                candidate_promo_component_1.CandidatePromoComponent,
                define_new_password_component_1.DefineNewPasswordComponent,
                notification_component_1.NotificationsComponent],
            imports: [router_1.RouterModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                forms_1.FormsModule,
                angular2_recaptcha_1.ReCaptchaModule,
                platform_browser_1.BrowserModule,
                angulartics2_1.Angulartics2Module.forRoot([
                    angulartics2_1.Angulartics2GoogleAnalytics
                ]),
                index_1.AgmCoreModule.forRoot({
                    apiKey: globals_1.googleMapsApiKey
                }),
                ng2_meta_1.MetaModule.forRoot(metaConfig),
                app_routes_1.routing],
            providers: [notification_service_1.NotificationsService,
                user_service_1.UserService,
                ng2_meta_1.MetaService,
                club_service_1.ClubService,
                plan_service_1.PlanService,
                job_service_1.JobService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
