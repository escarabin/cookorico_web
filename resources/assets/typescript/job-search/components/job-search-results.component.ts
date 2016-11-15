import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { SearchService } from '../../services/search.service';
import { ReferenceService } from '../../services/reference.service';

// Pagination
import { PaginatePipe, PaginationService } from 'ng2-pagination';

import appGlobals = require('./../../globals');

@Component({
    selector: 'job-search-results',
    providers: [PaginationService, ReferenceService],
    pipes: [PaginatePipe],
    templateUrl: '../templates/job-search-results.component.html',
})

export class JobSearchResultsComponent {
    jobs: any = [];
    xpLevelId: string;
    contractTypeId: string;
    jobNamingId: string;
    searchText: string;
    isMapModeEnabled: boolean = false;
    parametersList: any = {};
    placeId: string;
    mapMarkers: any = [];
    map: any;
    jobNamings: any = [];

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 6;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    constructor(@Inject(SearchService) private searchService: SearchService,
                private ref: ChangeDetectorRef,
                private referenceService: ReferenceService,
                private route: ActivatedRoute) {
        let __this = this;

        /*let headContent = document.getElementsByTagName('head')[0].innerHTML;
        headContent = headContent.replace('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHar3rTVpUcvpFDj88PttAPy85Bk17R18&amp;libraries=places"></script>', '');
        document.getElementsByTagName('head')[0].innerHTML = headContent*/

        route.params.subscribe(params => {
            if (params) {
                __this.xpLevelId = params['xpLevelId'];
                __this.contractTypeId = params['contractTypeId'];
                __this.jobNamingId = params['jobNamingId'];
                __this.searchText = params['searchText'];
                __this.placeId = params['placeId'];

                this.parametersList['contractTypeList'] = {};
                this.parametersList['jobNamingList'] = {};
                this.parametersList['xpLevelList'] = {};

                referenceService.getAllJobNamings().subscribe((jobNamingList: Response) => {
                    __this.jobNamings = jobNamingList.json();

                    this.parametersList['jobNamingList'][this.jobNamingId] = this.getParamTitleFromId(__this.jobNamingId, 'jobNaming');
                    this.parametersList['contractTypeList'][0] = 0;
                    this.parametersList['xpLevelList'][0] = 0;

                    /**
                     * Get google maps data from placeId using reverse geocoding API
                     */
                    let geocoder = new google.maps.Geocoder;
                    geocoder.geocode({'placeId': __this.placeId}, function(results) {
                        let place = results[0];

                        __this.parametersList['place'] = place;

                        searchService.search(__this.parametersList);
                    });
                });
            }
        });

        /**
         * Subscribe to new search parameters coming from search.service
         */

        searchService.parametersEmitter.subscribe((params) => {
            this.parametersList = params;
        });

        /**
         * Subscribe to new search results coming from search.service
         */
        searchService.resultsEmitter.subscribe((results) => {
            __this.jobs = results.json();

            console.log('[job-search-results] new results', __this.jobs);

            // window.scrollTo(0, 100);

            /**
             * Clear map markers
            */
            for (let i = 0; i < __this.mapMarkers.length; i++) {
                __this.mapMarkers[i].setMap(null);
            }

            /**
             * Create new markers, append them to the map
             */
            for (let i = 0; i < __this.jobs.length; i++) {
                let jobLatLng = new google.maps.LatLng(
                    __this.jobs[i]['business']['place']['lat'],
                    __this.jobs[i]['business']['place']['lon']
                );

                let marker = new google.maps.Marker({
                    position : jobLatLng,
                    map      : this.map
                });

                let infoContentString = '<strong>' + __this.jobs[i]["title"] + '</strong><br /> ' +
                    '<p>' + __this.jobs[i]["business"]["title"] + '</p> ' +
                    '<p>' + __this.jobs[i]["business"]["place"]["city"] + '</p> ' +
                    '<a href="/#/recherche/annonce/' + __this.jobs[i]['id'] + '"><button class="btn btn-primary full-width">' +
                    'Voir l\'offre ' +
                    '</button></a>';

                let infowindow = new google.maps.InfoWindow({
                    content: infoContentString
                });

                marker.addListener('click', function() {
                    infowindow.open(__this.map, marker);
                });

                this.mapMarkers.push(marker);
            }
        });

        /**
         * Subscribe to map mode emitter
         */
        searchService.mapModeEmitter.subscribe((place) => {
            this.isMapModeEnabled = !this.isMapModeEnabled;

            if (place) {
                let latLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                this.map.panTo(latLng);
                this.map.setZoom(8);

                this.parametersList['place'] = place;
                this.mapLat = place['geometry']['location'].lat();
                this.mapLng = place['geometry']['location'].lng();
                this.zoom = 8;
            }
        });
    }

    ngAfterViewInit() {
        let latLng = new google.maps.LatLng(this.mapLat, this.mapLng);

        let myOptions = {
            zoom      : this.zoom,
            center    : latLng,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            maxZoom   : 20
        };

        console.log('setting up map');

        if (!this.map) {
            this.map  = new google.maps.Map(document.getElementById('google-map-results'), myOptions);
            this.map.setOptions({styles: appGlobals.googleMapStyles});
        }
    }

    /**
     * Function used to flush place object and emit event to other components
     */
    resetPlace() {
        this.parametersList['place'] = null;
        this.searchService.search(this.parametersList);
    }

    /**
     * Function called from search.component
     * after user changed the search parameters
     * @param searchParameters

    updateSearchResults(searchParameters: any) {
        let __this = this;

        __this.jobs = [];
    }*/

    /**
     * Pagination triggers
     */
    pageChanged() {
        window.scrollTo(0, 100);
    }


    /**
     * Get parameter title from its id
     * @param parameterId
     * @param parameterType
     */
    getParamTitleFromId(parameterId: number, parameterType: string) {
        for (let i = 0; i < this.jobNamings.length; i++) {
            if (this.jobNamings[i].id == parameterId) {
                return this.jobNamings[i]['title'];
            }
        }
    }
}