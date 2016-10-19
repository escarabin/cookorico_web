import { Component } from '@angular/core';
import { Response } from '@angular/http'

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';

// Models
import { User } from './../../models/user';

@Component({
    providers: [ UserService, ReferenceService ],
    selector: 'candidate-sign-up',
    templateUrl: '../templates/candidate-sign-up.component.html',
})

export class CandidateSignUpComponent {
    user:User = new User();
    jobNamingGroups: any = [];
    civilities: any = [];
    firstLookingjobNamingId: number = 0;
    secondLookingjobNamingId: number = 0;
    thirdLookingjobNamingId: number = 0;
    is_cgu_accepted: boolean = false;
    /**
     * Google captcha vars
     */


    constructor(private referenceService: ReferenceService,
                private userService: UserService) {
        let __this = this;

        this.referenceService.getAllCivilities().subscribe((res: Response) => {
            __this.civilities = res.json();
        });

        referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });
    }

    signUp() {
        this.userService.createUser(this.user).subscribe((res: Response) => {
            console.log(res.json());
        });
    }

    parseAdress(place: Object, jobNamingIndex: number) {

    }
}