import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Study } from '../../models/study';
import { Notification } from '../../models/notification';

@Component({
    selector: 'create-experience',
    templateUrl: '../../../templates/create-study.component.html'
})

export class CreateStudyComponent {
    diplomas: any;
    isLoading: boolean = false;
    study:Study = new Study();
    user: any = {};

    constructor(private referenceService: ReferenceService,
                private notificationService: NotificationsService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {
        let __this = this;

        route.params.subscribe(params => {
            if (params) {
                __this.study.id = params["studyId"];

                if (__this.study.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getStudy(__this.study.id).subscribe((res: Response) => {
                        __this.study = res.json();
                    });
                }
            }
        });

        this.referenceService.getAllDiplomas().subscribe((res: Response) => {
            __this.diplomas = res.json();
        });
    }

    submitStudy() {
        this.isLoading = true;
        let __this = this;

        if (!this.study.id) {
            this.userService.createStudy(__this.study, __this.user.id).subscribe((res:Response) => {
                if (res['_body']) {
                    __this.notificationService.show(
                        new Notification('success', 'Votre formation a bien été créee')
                    );

                    // Redirect to profile-preview
                    this.router.navigate(['/profil/apercu'])
                }
                else {
                    __this.notificationService.show(
                        new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                    );
                }
                this.isLoading = false;
            })
        }
        else {
            this.userService.updateStudy(__this.study).subscribe((res:Response) => {
                if (res['_body']) {
                    __this.notificationService.show(
                        new Notification('success', 'Vos modifications ont bien été enregistrées')
                    );
                }
                else {
                    __this.notificationService.show(
                        new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                    );
                }
                this.isLoading = false;
            })
        }
    }

    handleBusinessIdChange(businessId: number) {
        this.study.business_id = businessId;
    }
}