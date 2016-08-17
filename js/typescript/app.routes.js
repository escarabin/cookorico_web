System.register(['@angular/router', './components/home.component', './components/post.component', './components/profile.component', './components/club.component', './components/sign-up.component', './components/search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, post_component_1, profile_component_1, club_component_1, sign_up_component_1, search_component_1;
    var routes, routing;
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
            }],
        execute: function() {
            routes = [
                // Root
                { path: '', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                // Posts
                { path: 'post/:postId/', name: 'ShowPost', component: post_component_1.PostComponent },
                // Clubs
                { path: 'club/:clubId', name: 'ShowClub', component: club_component_1.ClubComponent },
                // User
                { path: 'sign-up/', name: 'SignUp', component: sign_up_component_1.SignUpComponent },
                { path: 'profile/...', name: 'Profile', component: profile_component_1.ProfileComponent },
                { path: 'job-search/...', name: 'JobSearch', component: search_component_1.SearchComponent }
            ];
            // - Updated Export
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
