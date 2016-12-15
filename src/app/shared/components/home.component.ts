import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { JobService } from './../../services/job.service';

let appGlobals = require('./../../globals');

@Component({
    selector: 'home',
    templateUrl: '../../../templates/home.component.html',
})

export class HomeComponent {
    jobs: any = [];
    jobsPreviewList: any = [];
    innerHeight: number;
    public map: any;
    mapMarkers: any = [];

    /**
     * By default, populate place object with France coords
     */
    zoom: number = 4;
    mapLat: number = 46.227638;
    mapLng: number = 2.213749;

    constructor(private jobService: JobService) {
        let __this = this;

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
        let panPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(panPoint);
        this.map.setZoom(10);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.centerMapOnLocation.bind(this));
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}