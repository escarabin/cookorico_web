import { Component, Inject } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { JobService } from './../../services/job.service';
import { SearchService } from './../../services/search.service';
import { UserService } from './../../services/user.service';
import { BusinessService } from './../../services/business.service';

let appGlobals = require('./../../globals');

@Component({
    selector: 'home',
    providers: [ SearchService ],
    templateUrl: '../../../templates/home.component.html',
})

export class HomeComponent {
    jobs: any = [];
    jobsPreviewList: any = [];
    innerHeight: number;
    public map: any;
    mapMarkers: any = [];
    parametersList: any = {};
    candidatesCount: number;
    businessesCount: number;

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 4;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    constructor(private jobService: JobService,
                private userService: UserService,
                private businessService: BusinessService,
                @Inject(SearchService) private searchService: SearchService,) {
        let __this = this;

        /**
         * Retrieve data for counters banner
         */
        this.userService.getCandidatesCount().subscribe((res: Response) => {
            this.candidatesCount = res['_body'];
        });

        this.businessService.getAllCount().subscribe((res: Response) => {
            this.businessesCount = res['_body'];
        });

        this.getLocation();

        jobService.getAllJobs().subscribe((res: Response) => {
            this.jobs = res.json();

            /**
             * Keep only 10 first jobs
             */
            for (let i = 0; i < this.jobs.length; i++) {
                if (i <= 5) {
                    __this.jobsPreviewList.push(this.jobs[i]);
                }
            }

            for (let i = 0; i < __this.jobs.length; i++) {
                if (__this.jobs[i]['business']['place']) {
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
            }
        });

        searchService.resultsEmitter.subscribe((results) => {
            let newJobs = results.json();
            __this.jobsPreviewList = [];

            for (let i = 0; i < newJobs.length; i++) {
                if (i <= 5) {
                    __this.jobsPreviewList.push(newJobs[i]);
                }
            }
        });
    }

    ngOnInit(event) {
        this.fitMainDivToWindow();
    }

    ngAfterViewInit() {
        /**
         * Init Google Map
         */
        let latLng = new google.maps.LatLng(this.mapLat, this.mapLng);
        let myOptions = {
            zoom      : this.zoom,
            center    : latLng,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            maxZoom   : 20,
            zoomControl: true,
            streetViewControl: false,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            disableDoubleClickZoom: true
        };
        this.map = new google.maps.Map(document.getElementById('google-map'), myOptions);

        this.map.setOptions({styles: appGlobals.googleMapStyles});
    }

    fitMainDivToWindow() {
        if (window.innerHeight > 400) {
            this.innerHeight = window.innerHeight;
        }
        else {
            this.innerHeight = 300;
        }

        document.getElementById('home-heading').setAttribute("style","height:" + this.innerHeight + "px;");
        document.getElementById('home-heading-title').setAttribute("style","margin-top:" + this.innerHeight / 11 + "px;");
    }

    centerMapOnLocation(position) {
        let __this = this;

        let panPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(panPoint);
        this.map.setZoom(10);

        /**
         * Get google maps data from coords using reverse geocoding
         */
        let geocoder = new google.maps.Geocoder;
        let latlng = {lat: position.coords.latitude, lng: position.coords.longitude};

        geocoder.geocode({'location': latlng}, function(results) {
            let place = results[0];

            place.geometry.viewport.north = place.geometry.viewport.b.b - 0.01;
            place.geometry.viewport.south = place.geometry.viewport.b.f + 0.01;
            place.geometry.viewport.west = place.geometry.viewport.f.b - 0.01;
            place.geometry.viewport.east = place.geometry.viewport.f.f + 0.01;

            console.log('place is', place);

            __this.parametersList['place'] = place;

            // __this.searchService.search(__this.parametersList);
        });
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.centerMapOnLocation.bind(this));
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}