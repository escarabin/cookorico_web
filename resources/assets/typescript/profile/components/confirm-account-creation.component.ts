import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';
import { PlaceService } from './../../services/place.service';

// Models
import { User } from './../../models/user';

@Component({
    templateUrl: '../templates/confirm-account-creation.component.html',
    providers: [ ReferenceService, PlaceService ],
    selector: 'confirm-account-creation',
})

export class ConfirmAccountCreationComponent {
    user:User = new User();
    lookingForJobNamingIdList: any = [];
    jobNamings: any = [];

    constructor (private route: ActivatedRoute,
                 private router: Router,
                 @Inject(UserService) UserService,
                 private userService: UserService,
                 private placeService: PlaceService,
                 private referenceService: ReferenceService) {
        let __this = this;

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        route.params.subscribe(params => {
            if (params) {
                let userId = params['userId'];

                UserService.confirmEmailAddress(userId).subscribe((res:Response) => {
                    __this.userService.loginUsingId(userId).subscribe((userInfos:Response) => {
                        __this.user = userInfos.json();

                        localStorage.setItem('user', JSON.stringify(__this.user));

                        if (__this.user.user_type_id == 2) {
                            this.router.navigate(['/profil/etablissement/creer']);
                        }
                    });
                });
            }
        });
    }

    parseAdress(place:Object) {
        this.placeService.save(place).subscribe((res:Response) => {
            let placeObject = res.json();
            this.user.place_id = placeObject.id;
        });
    }

    submitCandidateInfos() {
        this.userService.createCandidate(this.user, this.lookingForJobNamingIdList).subscribe((res:Response) => {
            localStorage.setItem('user', JSON.stringify(res.json()));
            this.userService.loginUsingId(res.json()['id']);
            this.router.navigate(['/profile/show'])
        });
    }
}