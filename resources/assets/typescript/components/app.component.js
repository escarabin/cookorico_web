"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Components
var home_component_1 = require('./home.component');
var post_component_1 = require('./post.component');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var profile_component_1 = require('./profile.component');
var club_component_1 = require('./club.component');
var sign_up_component_1 = require('./sign-up.component');
var search_component_1 = require('./search.component');
var notification_component_1 = require('./notification.component');
var AppComponent = (function () {
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
                notification_component_1.NotificationsComponent],
            selector: 'app',
            templateUrl: '/templates/app.component.html'
        }),
        router_deprecated_1.RouteConfig([
            // Root
            { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            // Posts
            { path: '/post/:postId/', name: 'ShowPost', component: post_component_1.PostComponent },
            // Clubs
            { path: '/club/:clubId', name: 'ShowClub', component: club_component_1.ClubComponent },
            // User
            { path: '/sign-up/', name: 'SignUp', component: sign_up_component_1.SignUpComponent },
            { path: '/profile/...', name: 'Profile', component: profile_component_1.ProfileComponent },
            { path: '/job-search/...', name: 'JobSearch', component: search_component_1.SearchComponent }
        ]), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map