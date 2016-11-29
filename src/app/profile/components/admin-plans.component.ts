import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

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
    currentPlan: any;

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
                private router: Router,
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

    updatePlan() {
        let __this = this;
        this.planService.update(this.currentPlan.id,
            this.currentPlan.credits,
            this.currentPlan.daily_contacts,
            this.currentPlan.spaces,
            this.currentPlan.pull_up_credits,
            this.currentPlan.duration,
            this.currentPlan.is_unlimited,
            this.currentPlan.ends_at).subscribe((res: Response) => {
            __this.retrievePlans();

            __this.notificationService.show(
                new Notification('success', 'Cet abonnement a bien été modifié')
            );

            __this.hidePlanModal();
        });
    }

    public openModalWithPlan(plan: any) {
        this.currentPlan = plan;
        this.showModalBackdrop();
        document.getElementById("plan-settings-modal").style.display = "block";
    }
    public hidePlanModal() {
        this.hideModalBackdrop();
        document.getElementById("plan-settings-modal").style.display = "none";
    }
    public showModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    }
    public hideModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    }

    loginUsingId(userId: number) {
        this.userService.loginUsingId(userId).subscribe((user: Response) => {
            localStorage.setItem('user', JSON.stringify(user.json()));
            this.router.navigate(['/accueil']);
        });
    }
}