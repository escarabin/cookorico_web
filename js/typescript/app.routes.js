System.register(['@angular/router', './components/home.component', './components/post.component', './components/club.component', './components/sign-up.component', './shared/components/recruiter-promo.component', './shared/components/business-page.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, post_component_1, club_component_1, sign_up_component_1, recruiter_promo_component_1, business_page_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
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
            function (recruiter_promo_component_1_1) {
                recruiter_promo_component_1 = recruiter_promo_component_1_1;
            },
            function (business_page_component_1_1) {
                business_page_component_1 = business_page_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                // Child routing
                {
                    path: 'profile',
                    loadChildren: '/js/typescript/profile/profile.module#ProfileModule'
                },
                {
                    path: 'recherche',
                    loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule'
                },
                // Business page
                { path: 'business/:businessId', component: business_page_component_1.BusinessPageComponent },
                // Posts
                { path: 'post/:postId', component: post_component_1.PostComponent },
                // Clubs
                { path: 'club/:clubId', component: club_component_1.ClubComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                // User
                { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
                // Promo
                { path: 'recruiter-promo', component: recruiter_promo_component_1.RecruiterPromoComponent },
                // Root
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ];
            // - Updated Export
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
