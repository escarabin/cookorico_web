System.register(['@angular/core', '@angular/router-deprecated', './home.component', './job.component', './post.component', './header.component', './footer.component', './profile.component', './club.component', './sign-up.component', './search.component', './new-application-form.component', "./applications.component", "./experiences.component", "./education.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, home_component_1, job_component_1, post_component_1, header_component_1, footer_component_1, profile_component_1, club_component_1, sign_up_component_1, search_component_1, new_application_form_component_1, applications_component_1, experiences_component_1, education_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (club_component_1_1) {
                club_component_1 = club_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (new_application_form_component_1_1) {
                new_application_form_component_1 = new_application_form_component_1_1;
            },
            function (applications_component_1_1) {
                applications_component_1 = applications_component_1_1;
            },
            function (experiences_component_1_1) {
                experiences_component_1 = experiences_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(viewContainerRef) {
                    // You need this small hack in order to catch application root view container ref
                    this.viewContainerRef = viewContainerRef;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.RouterOutlet,
                            home_component_1.HomeComponent,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            search_component_1.SearchComponent,
                            new_application_form_component_1.NewApplicationFormComponent,
                            applications_component_1.ApplicationsComponent,
                            experiences_component_1.ExperiencesComponent],
                        selector: 'app',
                        templateUrl: '/templates/app.component.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        // Root
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        // Jobs
                        { path: '/job/:jobId/', name: 'ShowJob', component: job_component_1.JobComponent },
                        { path: '/jobs/search/:stateId/:jobNamingId/:contractTypeId/:searchText', name: 'SearchJobs', component: search_component_1.SearchComponent },
                        // Posts
                        { path: '/post/:postId/', name: 'ShowPost', component: post_component_1.PostComponent },
                        // Clubs
                        { path: '/club/:clubId', name: 'ShowClub', component: club_component_1.ClubComponent },
                        // User
                        { path: '/sign-up/', name: 'SignUp', component: sign_up_component_1.SignUpComponent },
                        { path: '/profile/', name: 'Profile', component: profile_component_1.ProfileComponent },
                        // Experiences
                        { path: '/profile/experiences', name: 'Experiences', component: experiences_component_1.ExperiencesComponent },
                        // Applications
                        { path: '/profile/applications', name: 'Applications', component: applications_component_1.ApplicationsComponent },
                        { path: '/apply/:jobId', name: 'Apply', component: new_application_form_component_1.NewApplicationFormComponent },
                        // Education
                        { path: '/education/all', name: 'Education', component: education_component_1.EducationComponent },
                        { path: '/education/:studyId', name: 'ShowStudy', component: education_component_1.EducationComponent },
                    ]), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
