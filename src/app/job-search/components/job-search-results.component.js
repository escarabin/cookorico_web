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
var search_service_1 = require('../../services/search.service');
// Pagination
var ng2_pagination_1 = require('ng2-pagination');
var appGlobals = require('./../../globals');
var JobSearchResultsComponent = (function () {
    function JobSearchResultsComponent(searchService, referenceService, ref, route) {
        var _this = this;
        this.searchService = searchService;
        this.referenceService = referenceService;
        this.ref = ref;
        this.route = route;
        this.jobs = [];
        this.isMapModeEnabled = false;
        this.parametersList = {};
        this.mapMarkers = [];
        this.jobNamings = [];
        this.isLoadingJobs = true;
        /**
         * By default, populate place object with France coords
         */
        this.zoom = 6;
        this.mapLat = 46.227638;
        this.mapLng = 2.213749;
        var __this = this;
        /**
         * Retrieve search params from route
         */
        route.params.subscribe(function (params) {
            if (params) {
                __this.xpLevelId = params['xpLevelId'];
                __this.contractTypeId = params['contractTypeId'];
                __this.jobNamingId = params['jobNamingId'];
                __this.searchText = params['searchText'];
                __this.placeId = params['placeId'];
                _this.parametersList['contractTypeList'] = {};
                _this.parametersList['jobNamingList'] = {};
                _this.parametersList['xpLevelList'] = {};
                referenceService.getAllJobNamings().subscribe(function (jobNamingList) {
                    __this.jobNamings = jobNamingList.json();
                    _this.parametersList['jobNamingList'][_this.jobNamingId] = _this.getParamTitleFromId(__this.jobNamingId, 'jobNaming');
                    _this.parametersList['contractTypeList'][0] = 0;
                    _this.parametersList['xpLevelList'][0] = 0;
                    /**
                     * Get google maps data from placeId using reverse geocoding API
                     */
                    var geocoder = new google.maps.Geocoder;
                    geocoder.geocode({ 'placeId': __this.placeId }, function (results) {
                        var place = results[0];
                        __this.parametersList['place'] = place;
                        searchService.search(__this.parametersList);
                    });
                });
            }
        });
        /**
         * Subscribe to new search parameters coming from search.service
         */
        searchService.parametersEmitter.subscribe(function (params) {
            console.log('[job-search-results] new params', params);
            _this.parametersList = params;
        });
        /**
         * Subscribe to new search results coming from search.service
         */
        searchService.resultsEmitter.subscribe(function (results) {
            __this.jobs = Object.values(results.json());
            __this.isLoadingJobs = false;
            console.log('[job-search-results] new results', __this.jobs, __this.jobs.length);
            window.scrollTo(0, 100);
            /**
             * Clear map markers
            */
            for (var i = 0; i < __this.mapMarkers.length; i++) {
                __this.mapMarkers[i].setMap(null);
            }
            /**
             * Create new markers, append them to the map
             */
            var _loop_1 = function(i) {
                var jobLatLng = new google.maps.LatLng(__this.jobs[i]['business']['place']['lat'], __this.jobs[i]['business']['place']['lon']);
                var marker = new google.maps.Marker({
                    position: jobLatLng,
                    map: _this.map
                });
                var infoContentString = '<strong>' + __this.jobs[i]["title"] + '</strong><br /> ' +
                    '<p>' + __this.jobs[i]["business"]["title"] + '</p> ' +
                    '<p>' + __this.jobs[i]["business"]["place"]["city"] + '</p> ' +
                    '<a routerLink="/recherche/annonce/' + __this.jobs[i]['id'] + '"><button class="btn btn-primary full-width">' +
                    'Voir l\'offre ' +
                    '</button></a>';
                var infowindow = new google.maps.InfoWindow({
                    content: infoContentString
                });
                marker.addListener('click', function () {
                    infowindow.open(__this.map, marker);
                });
                _this.mapMarkers.push(marker);
            };
            for (var i = 0; i < __this.jobs.length; i++) {
                _loop_1(i);
            }
        });
        /**
         * Subscribe to map mode emitter
         */
        searchService.mapModeEmitter.subscribe(function (place) {
            _this.isMapModeEnabled = !_this.isMapModeEnabled;
            if (place) {
                var latLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                _this.map.panTo(latLng);
                _this.map.setZoom(8);
                _this.parametersList['place'] = place;
                _this.mapLat = place['geometry']['location'].lat();
                _this.mapLng = place['geometry']['location'].lng();
                _this.zoom = 8;
            }
        });
    }
    JobSearchResultsComponent.prototype.ngAfterViewInit = function () {
        var latLng = new google.maps.LatLng(this.mapLat, this.mapLng);
        var myOptions = {
            zoom: this.zoom,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            maxZoom: 20
        };
        if (!this.map) {
            this.map = new google.maps.Map(document.getElementById('google-map-results'), myOptions);
            this.map.setOptions({ styles: appGlobals.googleMapStyles });
        }
    };
    /**
     * Function used to flush place object and emit event to other components
     */
    JobSearchResultsComponent.prototype.resetPlace = function () {
        this.parametersList['place'] = null;
        this.searchService.search(this.parametersList);
    };
    /**
     * Pagination triggers
     */
    JobSearchResultsComponent.prototype.pageChanged = function () {
        window.scrollTo(0, 100);
    };
    /**
     * Get parameter title from its id
     * @param parameterId
     * @param parameterType
     */
    JobSearchResultsComponent.prototype.getParamTitleFromId = function (parameterId, parameterType) {
        for (var i = 0; i < this.jobNamings.length; i++) {
            if (this.jobNamings[i].id == parameterId) {
                return this.jobNamings[i]['title'];
            }
        }
    };
    JobSearchResultsComponent = __decorate([
        core_1.Component({
            selector: 'job-search-results',
            providers: [ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe],
            templateUrl: '../../../templates/job-search-results.component.html'
        }),
        __param(0, core_1.Inject(search_service_1.SearchService))
    ], JobSearchResultsComponent);
    return JobSearchResultsComponent;
}());
exports.JobSearchResultsComponent = JobSearchResultsComponent;
