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
    public adress : Object;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private locationService: LocationService) {
        let __this = this;

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    submitBusiness() {
        console.log('submitting');
    }

    getAdress(place:Object) {
        this.adress = place['formatted_address'];
        var location = place['geometry']['location'];
        var lat =  location.lat();
        var lng = location.lng();
        console.log("Address Object", place);
    }
}