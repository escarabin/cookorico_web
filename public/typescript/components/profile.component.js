System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './user-sidebar.component', "./applications.component", "./experiences.component", "./education.component", "./alerts.component", "./testimonials.component", "./create-experience.component", "./create-study.component", "./create-alert.component", "./create-business.component", "./businesses.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, user_sidebar_component_1, applications_component_1, experiences_component_1, education_component_1, alerts_component_1, testimonials_component_1, create_experience_component_1, create_study_component_1, create_alert_component_1, create_business_component_1, businesses_component_1;
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
                            user_sidebar_component_1.UserSidebarComponent],
                        selector: 'profile',
                        templateUrl: '../templates/profile.component.html',
                    }),
                    router_deprecated_1.RouteConfig([
                        // Root
                        { path: '/show', name: 'Show', component: experiences_component_1.ExperiencesComponent, useAsDefault: true },
                        // Experiences
                        { path: '/experiences/all', name: 'Experiences', component: experiences_component_1.ExperiencesComponent },
                        { path: '/experience/create', name: 'CreateExperience', component: create_experience_component_1.CreateExperienceComponent },
                        // Applications
                        { path: '/applications/all', name: 'Applications', component: applications_component_1.ApplicationsComponent },
                        // Education
                        { path: '/education/all', name: 'Education', component: education_component_1.EducationComponent },
                        { path: '/education/:studyId', name: 'ShowStudy', component: education_component_1.EducationComponent },
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
                        { path: '/business/edit/:businessId', name: 'EditBusiness', component: create_business_component_1.CreateBusinessComponent }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
