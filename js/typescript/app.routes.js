System.register(['@angular/router', './components/home.component', './components/post.component', './components/club.component', './components/sign-up.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, post_component_1, club_component_1, sign_up_component_1;
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
            }],
        execute: function() {
            appRoutes = [
                // Child routing
                {
                    path: 'profile',
                    loadChildren: '/js/typescript/profile/profile.module#ProfileModule'
                },
                {
                    path: 'job-search',
                    loadChildren: '/js/typescript/job-search/job-search.module#JobSearchModule'
                },
                // Posts
                { path: 'post/:postId', component: post_component_1.PostComponent },
                // Clubs
                { path: 'club/:clubId', component: club_component_1.ClubComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                // User
                { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
                // Root
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ];
            // - Updated Export
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
