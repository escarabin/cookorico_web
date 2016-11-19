import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';
import { ApplicationService } from '../../services/application.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'applicants',
    templateUrl: '../../../templates/applicants.component.html'
})

export class ApplicantsComponent {
    items: any = [];
    jobPosts: any = [];
    jobPostId: number = null;
    allItemsChecked: boolean;
    checkedItemsList: any = [];
    user: any = {};

    constructor(private userService: UserService,
                private notificationService: NotificationsService,
                private applicationService: ApplicationService,
                private route: ActivatedRoute) {
        let __this = this;

        this.user = localStorage.getItem('user');

        this.userService.getJobPosts(this.user.id).subscribe((res: Response) => {
            __this.jobPosts = res.json();
        });

        this.retrieveApplicants();

        /**
         * Get current jobPostId
         */
        route.params.subscribe(params => {
            if (params) {
                __this.jobPostId = parseInt(params["jobPostId"]);
            }
        });
    }

    retrieveApplicants() {
        let __this = this;
        this.items = [];

        this.userService.getApplicants(this.user.id).subscribe((res: Response) => {
            console.log('res is', res.json());

            let allApplicants = res.json();

            for (let i = 0; i < allApplicants.length; i++) {
                let application = allApplicants[i];

                application['acceptedTemplate'] = "Un mail sera envoyé à <u><br/>" + application['user']['email'] + "</u>" +
                    "<br/><br/>Votre candidature intéresse l'établissement " +
                    "<strong>" + application['job']['business']['title'] + "</strong> " +
                    "(" + application['job']['business']['place']['postalCode'] + " " +
                    "" + application['job']['business']['place']['city'] + ") pour le poste de : " +
                    "<strong>" + application['job']['jobNaming']['title'] + "</strong>.<br/><br/>" +
                    "Merci de bien vouloir prendre contact directement avec eux.";

                application['rejectedTemplate'] = "Un mail sera envoyé à <u><br/>" + application['user']['email'] + "</u>" +
                    "<br/><br/>Bonjour,<br/><br/>" +
                    "Votre candidature n'a pas été retenue pour le poste de : " +
                    "<strong>" + application['job']['jobNaming']['title'] + "</strong> dans l'établissement " +
                    "<strong>" + application['job']['business']['title'] + "</strong> (" + application['job']['business']['place']['postalCode'] + "" +
                    " " + application['job']['business']['place']['city'] + ").<br/><br/>" +
                    "Postulez à une nouvelle offre d'emploi sur " +
                    "<a href=http://cookorico.fr/>http://cookorico.fr/</a>.";

                if (!application.is_rejected) {
                    __this.items.push(application);
                }
            }
        });
    }

    /**
     * Accept specific application
     * @param applicationId
     */
    acceptApplication(applicationId: number) {
        let __this = this;

        this.applicationService.accept(applicationId).subscribe(res => {
            __this.notificationService.show(
                new Notification('success', 'Le candidat a été alerté de votre intérêt')
            );

            this.retrieveApplicants();
        });
    }

    /**
     * Reject specific application
     * @param applicationId
     */
    rejectApplication(applicationId: number) {
        let __this = this;

        this.applicationService.reject(applicationId).subscribe(res => {
            __this.notificationService.show(
                new Notification('success', 'Le candidat a été alerté que sa candidature n\'a pas été retenue')
            );

            this.retrieveApplicants();
        });
    }
}