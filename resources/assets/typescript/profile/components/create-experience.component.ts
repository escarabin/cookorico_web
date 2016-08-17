import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouteParams, Router } from '@angular/router-deprecated';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Experience } from '../../models/experience';
import { Notification } from '../../models/notification';

// Components
import { BusinessSelectComponent } from '../../components/business-select.component';

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
                private routeParams: RouteParams,
                private router: Router) {
        let __this = this;

        this.experience.id = routeParams.get("experienceId");

        if (this.experience.id) {
            // Editing a specific experience, let's retrieve it's data
            this.userService.getExperience(__this.experience.id).subscribe((res: Response) => {
                __this.experience = res.json();
            });
        }

        this.referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        })
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
                    this.router.navigate(['/Profile/EditExperience', { experienceId: res.json()['id'] }])
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

    handleBusinessIdChange(businessId) {
        this.experience.business_id = businessId;
    }
}