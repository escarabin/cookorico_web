import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { LocationService } from './../services/location.service';
import { BusinessService } from './../services/business.service';
import { FileUploadService } from './../services/file-upload.service';

import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

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
    businessTypes: any;
    businessTypeId: number;
    phone: string;
    city: string;
    postalCode: string;
    email: string;
    fullAdress: string;
    website: string;
    description: string;
    lat: number;
    lon: number;
    photos = [];
    public adress: Object;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private businessService: BusinessService,
                private fileUploadService: FileUploadService,
                private locationService: LocationService) {
        let __this = this;

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    getAdress(place:Object) {
        var location = place['geometry']['location'];
        this.lat =  location.lat();
        this.lon = location.lng();

        this.phone = place['formatted_phone_number'];
        this.website = place['website'];
        this.fullAdress = place['formatted_address'];
        this.adress = place['name'];

        // Loop through photos to get url
        for (let i = 0; i < place['photos'].length; i++) {
            let photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
            this.photos.push(photoUrl);
        }

        // Get business's type
        if (place['types'].indexOf('restaurant')) {
            this.businessTypeId = 2;
        }
        else if (place['types'].indexOf('lodging')) {
            this.businessTypeId = 1;
        }
        else if (place['types'].indexOf('campground')) {
            this.businessTypeId = 6;
        }
        else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
            this.businessTypeId = 8;
        }
        else {
            this.businessTypeId = 9;
        }

        this.city = place['address_components'][2]['long_name'];
    }

    submitBusiness() {
        let __this = this;
        this.businessService.create(__this.adress,
            __this.lat,
            __this.lon,
            __this.fullAdress,
            __this.postalCode,
            __this.city,
            // Encode url in order to pass it as a parameter
            __this.website.replace('/', '--'),
            __this.businessTypeId,
            __this.phone,
            __this.email,
            __this.description).subscribe((res: Response) => {
            console.log(res.json());
        })
    }
}