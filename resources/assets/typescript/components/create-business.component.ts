import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { LocationService } from './../services/location.service';
import { BusinessService } from './../services/business.service';
import { FileUploadService } from './../services/file-upload.service';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

// Models
import { Business } from './../models/business'
import { Place } from './../models/place'

@Component({
    selector: 'create-business',
    providers: [ReferenceService,
                UserService,
                LocationService,
                BusinessService,
                FileUploadService],
    directives: [RouterLink, GoogleplaceDirective],
    templateUrl: '../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    business:Business = new Business();
    place:Place = new Place();
    businessTypes: any;
    public adress: Object;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private businessService: BusinessService,
                private fileUploadService: FileUploadService,
                private locationService: LocationService,
                private routeParams: RouteParams) {
        let __this = this;

        this.business.id = routeParams.get("businessId");

        if (this.business.id) {
            // Editing a specific business, let's retrieve it's data
            this.userService.getBusiness(__this.business.id).subscribe((res: Response) => {
                __this.business = res.json();
            });
        }

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    parseAdress(place:Object) {
        var location = place['geometry']['location'];
        this.place.lat =  location.lat();
        this.place.lon = location.lng();

        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.place.adress = place['formatted_address'];
        this.business.title = place['name'];

        console.log('getting photos');
        // Loop through photos to get url
        for (let i = 0; i < place['photos'].length; i++) {
            console.log('found a photo');
            let photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
            this.business.photos.push(photoUrl);
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

        this.place.city = place['address_components'][2]['long_name'];
        this.place.postalCode = place['address_components'][6]['long_name'];
    }

    submitBusiness() {
        let __this = this;
        this.businessService.create(__this.business.title,
            __this.place.lat,
            __this.place.lon,
            __this.place.adress,
            __this.place.postalCode,
            __this.place.city,
            // Encode url in order to pass it as a parameter
            __this.business.website.replace('/', '--'),
            __this.business.business_type_id,
            __this.business.phone,
            __this.business.email,
            __this.business.description).subscribe((res: Response) => {
            console.log(res.json());
        })
    }
}