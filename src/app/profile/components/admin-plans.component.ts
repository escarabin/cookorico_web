import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';
import { PlanService } from '../../services/plan.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'admin-plans',
    templateUrl: '../../../templates/admin-plans.component.html'
})

export class AdminPlansComponent {
    plans: any = [];
    searchEmail: string;
    searchId: string;
    searchName: string;

    /**
     * New plan data
     */
    planEmail: string;
    planEndsAt: string;
    planCredits: number = 0;
    planContacts: number = 0;
    planSpaces: number = 0;
    planPullUpPost: number = 0;
    planIsUnlimited: boolean = 0;

    constructor(private userService: UserService,
                private planService: PlanService,
                private notificationService: NotificationsService) {
        this.retrievePlans();
    }

    search() {
        if (!this.searchId && !this.searchEmail && ! this.searchName) {
            this.retrievePlans();
        }
        else {
            this.planService.search(this.searchId, this.searchName, this.searchEmail).subscribe((res: Response) => {
                this.plans = res.json();
            });
        }
    }

    retrievePlans() {
        this.planService.getAll().subscribe((res: Response) => {
            this.plans = res.json();

            console.log('plans are ', this.plans);
        });
    }

    createNewPlan() {
        this.planService.create(this.planEmail,
                                this.planCredits,
                                this.planContacts,
                                this.planSpaces,
                                this.planPullUpPost,
                                this.planIsUnlimited,
                                this.planEndsAt).subscribe((res: Response) => {
            this.retrievePlans();

            this.notificationService.show(
                new Notification('success', 'Cet abonnement a bien été crée')
            );
        });
    }

    deletePlan(planId: number) {
        this.planService.deletePlan(planId).subscribe((res: Response) => {
            this.retrievePlans();

            this.notificationService.show(
                new Notification('success', 'Cet abonnement a bien été supprimé')
            );
        });
    }

    updatePlan(planId: number,
               credits: number,
               contacts: number,
               spaces: number,
               pullUpCredits: number,
               duration: number,
               isUnlimited: boolean,
               endsAt: string) {
        console.log('plan ends at ' + endsAt);

        let __this = this;
        this.planService.update(planId,
            credits,
            contacts,
            spaces,
            pullUpCredits,
            duration,
            isUnlimited,
            endsAt).subscribe((res: Response) => {
            console.log('updated');

            __this.retrievePlans();

            __this.notificationService.show(
                new Notification('success', 'Cet abonnement a bien été modifié')
            );
        });
    }
}