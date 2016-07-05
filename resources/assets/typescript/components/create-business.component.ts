import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';

@Component({
    selector: 'create-business',
    providers: [ReferenceService, UserService],
    directives: [RouterLink],
    templateUrl: '../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    businessTypes: any;

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    submitBusiness() {

    }
}