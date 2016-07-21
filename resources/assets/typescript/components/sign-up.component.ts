import { Component } from '@angular/core';

// Services
import { UserService } from './../services/user.service';
import { ReferenceService } from './../services/reference.service';

@Component({
    providers: [UserService, ReferenceService],
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
})

export class SignUpComponent {
    password: string;
    email: string;
    userTypeId: number;
    civilities: any = [];

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllCivilities().subscribe((res: Response) => {
            __this.civilities = res.json();
        });
    }
}