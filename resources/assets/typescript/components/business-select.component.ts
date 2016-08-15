import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { BusinessService } from './../services/business.service';
import { PlaceService } from './../services/place.service';
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

@Component({
    selector: 'business-select',
    providers: [BusinessService, PlaceService, UserService, NotificationsService],
    templateUrl: '../templates/business-select.component.html',
    inputs: ['businessId', 'onlyUserBusinesses', 'isRequired']
})

export class BusinessSelectComponent {
    businesses = [];
    isGooglePlaceInput: boolean = false;
    @Input public businessId: number;
    @Input public onlyUserBusinesses: boolean;
    @Input public isRequired: boolean;
    @Output() businessIdChange: EventEmitter = new EventEmitter();
    public adress: Object;

    constructor(private businessService: BusinessService,
                private placeService: PlaceService,
                private notificationService: NotificationsService,
                private userService: UserService) {
        let __this = this;

        /**
         * Check if we have to show only user's businesses in select options
         */
        if (this.onlyUserBusinesses) {
            userService.getBusinesses().subscribe((res: Response) => {
                __this.businesses = res.json();
            })
        }
        else {
            businessService.getAll().subscribe((res: Response) => {
                __this.businesses = res.json();
            })
        }
    }

    parseAdress(place: Object) {
        let __this = this;

        console.log(place);

        // Save selected place data for further use
        this.placeService.save(place).subscribe((res: Response) => {
            console.log(res.json());

            __this.businessId = res.json()['id'];
            __this.businessIdChanged();
            __this.businessService.getAll().subscribe((res1: Response) => {
                __this.businesses = res1.json();
                __this.isGooglePlaceInput = false;
            })
        });
    }

    businessIdChanged(newBusinessId) {
        this.businessIdChange.emit(newBusinessId);
    }
}