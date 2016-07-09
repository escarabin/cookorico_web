import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { LocationService } from './../services/location.service';

import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

@Component({
    selector: 'create-business',
    providers: [ReferenceService, UserService, LocationService],
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
    public adress: Object;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private locationService: LocationService) {
        let __this = this;

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    submitBusiness() {

    }

    getAdress(place:Object) {
        var location = place['geometry']['location'];
        this.lat =  location.lat();
        this.lon = location.lng();

        this.phone = place['formatted_phone_number'];
        this.website = place['website'];
        this.fullAdress = place['formatted_address'];
        this.city = place['address_components'][2]['long_name'];
        this.adress = place['name'];

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
    }
}