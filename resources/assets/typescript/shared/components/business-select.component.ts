import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { BusinessService } from './../../services/business.service';
import { PlaceService } from './../../services/place.service';
import { UserService } from './../../services/user.service';

@Component({
    selector: 'business-select',
    providers: [BusinessService, PlaceService, UserService],
    templateUrl: '../templates/business-select.component.html',
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

    constructor(private businessService: BusinessService,
                private placeService: PlaceService,
                private userService: UserService) {

    }

    ngAfterViewChecked() {
        let __this = this;

        if (this.businessId && !this.isViewInit) {
            /**
             * Check if we have to show only user's businesses in select options
             */
            if (this.onlyUserBusinesses) {
                this.userService.getBusinesses().subscribe((res: Response) => {
                    __this.businesses = res.json();

                    this.createBusinessesOptionsText();
                })
            }
            else {
                this.businessService.getAll().subscribe((res: Response) => {
                    __this.businesses = res.json();

                    this.createBusinessesOptionsText();
                });
            }

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
            console.log('--> place has been saved', res.json());

            __this.businessId = res.json()['id'];

            __this.businessIdHasChanged();
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