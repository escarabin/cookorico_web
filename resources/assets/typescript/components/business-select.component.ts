import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { BusinessService } from './../services/business.service';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

@Component({
    selector: 'business-select',
    providers: [BusinessService],
    directives: [GoogleplaceDirective],
    templateUrl: '../templates/business-select.component.html',
    inputs: ['businessId']
})

export class BusinessSelectComponent {
    businesses = [];
    @Input public businessId: number;
    public adress: Object;

    constructor(private businessService: BusinessService) {
        let __this = this;

        businessService.getAll().subscribe((res: Response) => {
            __this.businesses = res.json();
        })
    }

    parseAdress(place: Object) {

    }
}