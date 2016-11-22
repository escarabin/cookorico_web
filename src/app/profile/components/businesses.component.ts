import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { BusinessService } from '../../services/business.service';

// Pagination
import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component({
    selector: 'businesses',
    providers: [PaginationService],
    pipes: [PaginatePipe],
    templateUrl: '../../../templates/businesses.component.html'
})

export class BusinessesComponent {
    items: any = [];
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    user: any;
    searchText: string
    isLoading: boolean = true;

    constructor(private userService: UserService,
                private businessService: BusinessService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        if (this.user.user_type_id == 1) {
            this.businessService.getAll().subscribe((res: Response) => {
                __this.items = res.json();
               this.isLoading = false;
            });
        }
        else {
            this.userService.getBusinesses(this.user.id).subscribe((res: Response) => {
                __this.items = res.json();
                this.isLoading = false;
            });
        }
    }

    /**
     * Pagination triggers
     */
    pageChanged() {
        window.scrollTo(0, 100);
    }

    searchBusiness() {
        if (this.searchText) {
            this.businessService.search(this.searchText).subscribe((res: Response) => {
                this.items = res.json();
            });
        }
        else {
            this.businessService.getAll().subscribe((res: Response) => {
                __this.items = res.json();
            });
        }
    }
}