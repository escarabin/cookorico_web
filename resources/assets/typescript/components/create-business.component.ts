import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { LocationService } from './../services/location.service';

@Component({
    selector: 'create-business',
    providers: [ReferenceService, UserService, LocationService],
    directives: [RouterLink],
    templateUrl: '../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    businessTypes: any;
    adress: string;

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

    getGoogleMapsAdress() {
        this.locationService.autocompleteAdress(this.adress).subscribe((res: Response) => {
            console.log(res.json());
        })
    }
}