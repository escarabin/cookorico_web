import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { BusinessService } from './../services/business.service';

@Component({
    selector: 'business-select',
    providers: [BusinessService],
    templateUrl: '../templates/business-select.component.html',
    inputs: ['businessId']
})

export class BusinessSelectComponent {
    businesses = [];
    @Input public businessId: number;

    constructor(private businessService: BusinessService) {
        let __this = this;

        businessService.getAll().subscribe((res: Response) => {
            __this.businesses = res.json();
        })
    }
}