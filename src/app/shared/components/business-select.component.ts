import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { BusinessService } from './../../services/business.service';
import { PlaceService } from './../../services/place.service';
import { PlaceService } from './../../services/place.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'business-select',
    providers: [ BusinessService, PlaceService ],
    templateUrl: '../../../templates/business-select.component.html',
    inputs: ['businessId', 'onlyUserBusinesses', 'isRequired', 'isMultiple']
})

export class BusinessSelectComponent {
    businesses: any = [];
    businessInputText: string = "";
    isGooglePlaceInput: boolean = true;
    @Input businessId: number;
    @Input public onlyUserBusinesses: boolean;
    @Input public isRequired: boolean;
    @Input public isMultiple: boolean;
    @Output() businessIdChange: EventEmitter = new EventEmitter();
    public adress: Object;
    isViewInit: boolean = false;
    error: boolean = false;

    constructor(private businessService: BusinessService,
                private notificationService: NotificationsService,
                private placeService: PlaceService) {

    }

    ngAfterViewChecked() {
        let __this = this;

        if (this.businessId && !this.isViewInit) {
            /**
             * Retrieve business infos
             */
            if (this.businessId) {
                this.businessService.get(this.businessId).subscribe((res: Response) => {
                    __this.businessInputText = res.json()['title'];

                    this.createBusinessesOptionsText();
                });
            }

            this.isViewInit = true;
        }
    }

    createBusinessesOptionsText() {
        /**
         * Property ['text'] is used by ng2-select to display option titles
         */
        for (let i = 0; i < this.businesses.length; i++) {
            this.businesses[i]['text'] = this.businesses[i]['title'];
        }
    }

    parseAdress(place: Object) {
        let __this = this;

        // Save selected place data for further use
        this.placeService.save(place).subscribe((res: Response) => {
            let jsonRes = res.json();

            if (!jsonRes['googlePlaceId']) {
                __this.businessId = res.json()['id'];
                __this.businessIdHasChanged();
                __this.error = false;
            }
            else {
                __this.error = true;
                __this.notificationService.show(
                    new Notification('error', 'Ceci ne semble pas être un établissement, veuillez réessayer')
                );
            }
        });
    }

    /**
     * Function fired when user types something in business input
     * @param newText
     */
    businessInputTextHasChanged(newText: any) {
        this.businessInputText = newText;
    }

    businessIdHasChanged() {
        this.businessIdChange.emit(this.businessId);
    }
}