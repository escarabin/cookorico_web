"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
// Services
var user_service_1 = require('./../../services/user.service');
var search_service_1 = require('./../../services/search.service');
var SearchComponent = (function () {
    function SearchComponent(route, router, userService, SearchService, searchService, notificationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.searchService = searchService;
        this.notificationService = notificationService;
        this.searchParameters = [];
        this.scrollTop = 0;
        this.routeSegments = [];
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        route.params.subscribe(function (params) {
            if (params) {
                _this.placeId = params['placeId'];
                _this.jobNamingId = parseInt(params['jobNamingId']);
                _this.contractTypeId = parseInt(params['contractTypeId']);
                _this.studyLevelId = parseInt(params['studyLevelId']);
            }
        });
        SearchService.parametersEmitter.subscribe(function (params) {
            if (params['place']) {
                __this.locationName = params['place']['formatted_address'];
                __this.routeSegments = [];
                __this.routeSegments.push({ title: 'Recherche', link: '/recherche' });
                __this.routeSegments.push({ title: _this.locationName, link: '' });
            }
        });
        /**
         * Subscribe to route change to display components regarding current route
         * (ex: Home page is different and does not show child component 'profile-sub-header')
         */
        router.events.subscribe(function (event) {
            _this.routeSegments = [];
            var segments = event.url.split('/');
            var link = "/";
            _this.searchService.getSeoDataFromPath(event.url).subscribe(function (res) {
                if (res['_body'].length > 10) {
                    _this.seoRouteData = res.json();
                }
            });
            for (var i = 1; i < segments.length; i++) {
                link += segments[i] + "/";
                /**
                 * Avoid appending ids (numbers) to route segments
                 */
                if (isNaN(segments[i])) {
                    _this.routeSegments.push({ title: segments[i], link: link });
                }
            }
        });
    }
    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    SearchComponent.prototype.onPageScroll = function (event) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    };
    SearchComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/search.component.html',
            providers: [user_service_1.UserService],
            selector: 'search'
        }),
        __param(3, core_1.Inject(search_service_1.SearchService))
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
