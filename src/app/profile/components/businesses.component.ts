import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { BusinessService } from '../../services/business.service';

@Component({
    selector: 'businesses',
    templateUrl: '../../../templates/businesses.component.html'
})

export class BusinessesComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    user: any;

    constructor(private userService: UserService,
                private businessService: BusinessService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        if (this.user.user_type_id == 1) {
            this.businessService.getAll().subscribe((res: Response) => {
                __this.items = res.json();
            });
        }
        else {
            this.userService.getBusinesses(this.user.id).subscribe((res: Response) => {
                __this.items = res.json();
            });
        }
    }
}