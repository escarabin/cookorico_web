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

@Component({
    selector: 'create-business',
    providers: [ReferenceService,
                UserService,
                LocationService,
                BusinessService],
    directives: [RouterLink, GoogleplaceDirective],
    templateUrl: '../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    business:Business = new Business();
    place:Place = new Place();
    businessTypes: any;
    isLoading: boolean = false;
    public adress: Object;

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
         * Parse google maps API data into [business] & [place] objects
         */
        this.place = new Place();
        this.business = new Business();
        var location = place['geometry']['location'];
        this.place.lat =  location.lat();
        this.place.lon = location.lng();

        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.place.adress = place['formatted_address'];
        this.business.title = place['name'];
        this.business.photos = [];

        // Loop through photos to get url
        for (let i = 0; i < place['photos'].length; i++) {
            let photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });3
            this.business.photos.push({url: photoUrl});
        }

        // Get business's type
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

    deleteBusinessPhoto(photo) {
        let indexOfPhoto = this.business.photos.indexOf(photo);
        this.business.photos.splice(indexOfPhoto, 1);
    }
}