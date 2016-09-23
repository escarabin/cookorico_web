import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Experience } from '../../models/experience';
import { Notification } from '../../models/notification';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService, UserService],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    jobNamingGroups: any;
    public adress: Object;
    experience:Experience = new Experience();
    isLoading: boolean = false;

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private route: ActivatedRoute,
                private router: Router) {
        this.referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            this.jobNamingGroups = res.json();
        })
    }

    ngAfterViewInit() {
        let __this = this;

        this.route.params.subscribe(params => {
            if (params) {
                __this.experience.id = params["experienceId"];

                if (__this.experience.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.userService.getExperience(__this.experience.id).subscribe((res: Response) => {
                        __this.experience = res.json();
                    });
                }
            }
        });
    }

    submitExperience() {
        this.isLoading = true;
        let __this = this;

        if (!this.experience.id) {
            this.userService.createExperience(__this.experience).subscribe((res: Response) => {
                if (res['_body']) {
                    __this.notificationService.show(
                        new Notification('success', 'Votre expérience a bien été créee')
                    );

                    // Redirect to experience edition
                    this.router.navigate(['/profil/experience/editer/' + res.json()['id']])
                }
                else {
                    __this.notificationService.show(
                        new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                    );
                }
                this.isLoading = false;
            });
        }
        else {
            this.userService.updateExperience(__this.experience).subscribe((res: Response) => {
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
            });
        }
    }

    handleBusinessIdChange(businessId: number) {
        console.log('business id has changed', businessId);

        this.experience.business_id = businessId;
    }
}