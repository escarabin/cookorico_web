import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink, RouteParams } from '@angular/router-deprecated';

// Services
import { ReferenceService } from './../services/reference.service';
import { UserService } from './../services/user.service';
import { NotificationsService } from './../services/notification.service';

// Models
import { Experience } from './../models/experience';
import { Notification } from './../models/notification';

// Components
import { BusinessSelectComponent } from './business-select.component';

@Component({
    selector: 'create-experience',
    providers: [ReferenceService, UserService],
    directives: [RouterLink, BusinessSelectComponent],
    templateUrl: '../templates/create-experience.component.html'
})

export class CreateExperienceComponent {
    jobNamings: any;
    public adress: Object;
    experience:Experience = new Experience();

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private routeParams: RouteParams) {
        let __this = this;

        this.experience.id = routeParams.get("experienceId");

        if (this.experience.id) {
            // Editing a specific experience, let's retrieve it's data
            this.userService.getExperience(__this.experience.id).subscribe((res: Response) => {
                __this.experience = res.json();
            });
        }

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        })
    }

    submitExperience() {
        let __this = this;

        if (!this.experience.id) {
            this.userService.createExperience(__this.experience.job_naming_id,
                __this.experience.business_id,
                __this.experience.start_date,
                __this.experience.end_date,
                __this.experience.description).subscribe((res: Response) => {
                __this.notificationService.show(
                    new Notification('success', 'Votre expérience a bien été crée')
                );
            });
        }
        else {
            this.userService.updateExperience(__this.experience.id,
                __this.experience.job_naming_id,
                __this.experience.business_id,
                __this.experience.start_date,
                __this.experience.end_date,
                __this.experience.description).subscribe((res: Response) => {
                __this.notificationService.show(
                    new Notification('success', 'Vos modifications ont bien été enregistrées')
                );
            });
        }
    }

    handleBusinessIdChange(businessId) {
        this.experience.business_id = businessId;
        console.log('Business id changed', businessId);
    }
}