import { Component } from '@angular/core';
import { Response } from '@angular/http'

// Services
import { UserService } from '../services/user.service';
import { ReferenceService } from '../services/reference.service';

// Models
import { User } from '../models/user';

@Component({
    providers: [UserService, ReferenceService],
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
})

export class SignUpComponent {
    user:User = new User();
    civilities: any = [];

    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllCivilities().subscribe((res: Response) => {
            __this.civilities = res.json();
        });
    }

    signUp() {
        this.userService.createUser(this.user).subscribe((res: Response) => {
            console.log(res.json());
        });
    }
}