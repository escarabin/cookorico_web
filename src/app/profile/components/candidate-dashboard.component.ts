import { Component, ChangeDetectorRef } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Notification } from '../../models/notification';

@Component({
    selector: 'candidate-dashboard',
    templateUrl: '../../../templates/candidate-dashboard.component.html',
})

export class CandidateDashboardComponent {
    user: any = {};
    profilePercentage: number = 0;
    lookingForJobNamingList: any = [{'id': 0, 'place': {}},
        {'id': 0, 'place': {}},
        {'id': 0, 'place': {}}];
    jobNamingGroups: any = [];
    candidateStatuses: any = [];
    isSavingStatus: boolean = false;
    isSavingJobSeekingData: boolean = false;
    jobSeekingDataCorrect: boolean = true;
    alertFrequencies: any = [];

    constructor(private userService: UserService,
                private ref: ChangeDetectorRef,
                private notificationService: NotificationsService,
                private referenceService: ReferenceService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getUserInfos(this.user.id).subscribe((res: Response) => {
            console.log('user infos', res);
            this.user = res.json();
            localStorage.setItem('user', JSON.parse(this.user));
        });

        this.userService.getProfilePercentage(this.user.id).subscribe((res: Response) => {
            console.log('profile percentage', res);
            this.profilePercentage = res.json();
        });

        this.referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            console.log('job naming groups', res);
            this.jobNamingGroups = res.json();
        });

        this.referenceService.getAllCandidateStatuses().subscribe((res: Response) => {
            console.log('candidate statuses', res);
            this.candidateStatuses = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            console.log('alert frequencies', res);
            this.alertFrequencies = res.json();
        });

        /**
         * Parse lookingForJobNamingList
         */
        if (this.user['looking_for_job_namings']) {
            for (let i = 0; i < this.user['looking_for_job_namings'].length; i++) {

                if (this.lookingForJobNamingList[i]) {
                    this.lookingForJobNamingList[i]['id'] = this.user['looking_for_job_namings'][i]['id'];

                    /**
                     * PARSE GOOGLE MAPS DATA
                     * @type {google.maps.Geocoder}
                     */
                    if (this.user['looking_for_job_naming_places']) {
                        this.userService.getUserInfos(this.user.id).subscribe((res: Response) => {
                            this.user = res.json();

                            console.log('getting user infos');

                            let geocoder = new google.maps.Geocoder;
                            geocoder.geocode({'placeId': this.user['looking_for_job_naming_places'][i]['googlePlaceId']},
                                function(results) {
                                    console.log('getting results', results);

                                    if (results != null) {
                                        let place = results[0];
                                        console.log('getting place', place);
                                        __this.lookingForJobNamingList[i]['place'] = place;

                                        __this.ref.detectChanges();
                                    }
                                }
                            );
                        });
                    }
                }
            }
        }
    }

    parseAdress(place: Object, jobNamingIndex: number) {
        this.lookingForJobNamingList[jobNamingIndex]['place'] = place;
        this.ref.detectChanges();
    }

    saveUserStatus() {
        this.isSavingStatus = true;
        this.userService.updateInfo('user_status_id', this.user.user_status_id, this.user.id).subscribe((res: Response) => {
            this.isSavingStatus = false;

            this.notificationService.show(
                new Notification('success', 'Votre status a bien été modifié')
            );
        });
    }

    saveJobSeekingInfos() {
        this.isSavingJobSeekingData = true;

        for (let i = 0; i < this.lookingForJobNamingList.length; i++) {
            if (!this.lookingForJobNamingList[i]['place']) {
                this.jobSeekingDataCorrect = false;
            }
        }

        if (this.jobSeekingDataCorrect) {
            this.userService.saveJobSeekingData(this.lookingForJobNamingList, this.user.alert_frequency_id, this.user.id).subscribe((res: Response) => {
                this.isSavingJobSeekingData = false;

                this.userService.getUserInfos().subscribe((res: Response) => {
                    this.user = res.json();
                });

                this.notificationService.show(
                    new Notification('success', 'Vos informations ont été enregistrées')
                );
            });
        }
        else {
            this.notificationService.show(
                new Notification('success', 'Veuillez remplir tous les champs')
            );
        }
    }
}