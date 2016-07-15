import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'businesses',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/businesses.component.html'
})

export class BusinessesComponent {
    businesses: any;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getBusinesses().subscribe((res: Response) => {
            __this.businesses = res.json();
        });
    }
}