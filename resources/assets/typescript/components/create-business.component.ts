import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams, Router } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { LocationService } from './../services/location.service';
import { BusinessService } from './../services/business.service';
import { NotificationsService } from './../services/notification.service';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// Models
import { Business } from './../models/business'
import { Place } from './../models/place'
import { Notification } from './../models/notification';

// File drop zone
import { FileSelectDirective,
    FileDropDirective,
    FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'create-business',
    providers: [ReferenceService,
                UserService,
                LocationService,
                BusinessService],
    directives: [RouterLink,
                GoogleplaceDirective,
                FileDropDirective,
                FileSelectDirective],
    templateUrl: '../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    business:Business = new Business();
    place:Place = new Place();
    businessTypes: any;
    isLoading: boolean = false;
    isIntepretingFile: boolean = false;
    public adress: Object;
    public photoUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private businessService: BusinessService,
                private locationService: LocationService,
                private router: Router,
                private routeParams: RouteParams) {
        let __this = this;

        this.business.id = parseInt(routeParams.get("businessId"));

        if (this.business.id) {
            // Editing a specific business, let's retrieve it's data
            this.userService.getBusiness(__this.business.id).subscribe((res: Response) => {
                __this.business = res.json();
                __this.place = res.json()['place'];
            });
        }

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    parseAdress(place:Object) {
        /**
         * Parse google maps API data into [business] object
         */
        var location = place['geometry']['location'];
        this.place.lat =  location.lat();
        this.place.lon = location.lng();

        /**
         * Parse google maps API data into [place] object
         */
        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.place.adress = place['formatted_address'];
        this.business.title = place['name'];

        /**
         * Loop through existing photos to remove
         * only the ones we got from Google API

        for (let i = 0; i < this.business.photos.length; i++) {
            console.log('photos are : ', this.business.photos);
            if (this.business.photos[i]['fromGoogle']) {
                delete this.business.photos["fromGoogle"];
            }
        }*/

        /**
         * Loop through photos to save urls
         */
        for (let i = 0; i < place['photos'].length; i++) {
            let photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });3
            this.business.photos.splice(0, 0, {url: photoUrl, fromGoogle: true});
        }

        /**
         * Parse business type
         */
        if (place['types'].indexOf('restaurant')) {
            this.business.business_type_id = 2;
        }
        else if (place['types'].indexOf('lodging')) {
            this.business.business_type_id = 1;
        }
        else if (place['types'].indexOf('campground')) {
            this.business.business_type_id = 6;
        }
        else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
            this.business.business_type_id = 8;
        }
        else {
            this.business.business_type_id = 9;
        }

        /**
         * Verifying if city and postalCode are given via Google API
         */
        this.place.googlePlaceId = place['place_id'];
        if (place['address_components'][2]) {
            this.place.city = place['address_components'][2]['long_name'];
        }
        if (place['address_components'][6]) {
            this.place.postalCode = place['address_components'][6]['long_name'];
        }
    }

    submitBusiness() {
        let __this = this;
        this.businessService.create(__this.business, __this.place).subscribe((res:Response) => {
            if (res['_body']) {
                if (__this.business.id) {
                    __this.notificationService.show(
                        new Notification('success', 'Vos modifications ont bien été enregistrées')
                    );
                }
                else {
                    __this.notificationService.show(
                        new Notification('success', 'Votre établissement a bien été créee')
                    );
                }

                // Redirect to experience edition
                __this.router.navigate(['/Profile/EditBusiness', {businessId: res.json()['id']}])
            }
            else {
                __this.notificationService.show(
                    new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                );
            }
            this.isLoading = false;
        })
    }

    deleteBusinessPhoto(photoUrl) {
        for (let i = 0; i < this.business.photos.length; i++) {
            if (this.business.photos[i]['url'] == photoUrl) {
                this.business.photos.splice(i, 1);
            }
        }
    }

    public fileChangeListener($event) {
        var image:any = new Image();

        /**
         * File was selected via input[type=file]
         */
        var file:File;
        if ($event.target) {
            file = $event.target.files[0];
        }
        /**
         * File was dropped on [ng2FileDrop] zone
         */
        else {
            file = $event[0];
        }
        var myReader:FileReader = new FileReader();
        let __this = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            __this.business.photos.splice(0, 0, {url: image.src});
            __this.isIntepretingFile = false;
        };

        myReader.readAsDataURL(file);
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public photoFileDropped(e:any):void {
        this.isIntepretingFile = true;
        this.fileChangeListener(e);
    }
}