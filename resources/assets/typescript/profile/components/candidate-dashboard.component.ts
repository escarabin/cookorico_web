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
    templateUrl: '../templates/candidate-dashboard.component.html',
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
    isSavingLanguages: boolean = false;
    languages: any = [];
    alertFrequencies: any = [];
    languageLevels: any = [];
    userLanguages: any = [{'language_id': 0, 'language_level_id': 0}];

    constructor(private userService: UserService,
                private ref: ChangeDetectorRef,
                private notificationService: NotificationsService,
                private referenceService: ReferenceService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getProfilePercentage().subscribe((res: Response) => {
            this.profilePercentage = res.json();
        });

        this.referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            this.jobNamingGroups = res.json();
        });

        this.referenceService.getAllCandidateStatuses().subscribe((res: Response) => {
            this.candidateStatuses = res.json();
        });

        this.referenceService.getAllLanguages().subscribe((res: Response) => {
            this.languages = res.json();
        });

        this.referenceService.getAllAlertFrequencies().subscribe((res: Response) => {
            this.alertFrequencies = res.json();
        });

        this.referenceService.getAllLanguageLevels().subscribe((res: Response) => {
            this.languageLevels = res.json();
        });

        this.userService.getSpokenLanguages().subscribe((res: Response) => {
            this.userLanguages = res.json();
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
                    let geocoder = new google.maps.Geocoder;
                    geocoder.geocode({'placeId': this.user['looking_for_job_naming_places'][i]['googlePlaceId']},
                        function(results) {
                            if (results != null) {
                                let place = results[0];
                                __this.lookingForJobNamingList[i]['place'] = place;

                                __this.ref.detectChanges();
                            }
                        }
                    );
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
        this.userService.updateInfo('user_status_id', this.user.user_status_id).subscribe((res: Response) => {
            this.isSavingStatus = false;

            this.notificationService.show(
                new Notification('success', 'Votre status a bien été modifié')
            );
        });
    }

    addNewSpokenLanguage() {
        this.userLanguages.push({'id': 0, 'language_level_id': 0});
    }

    saveSpokenLanguages() {
        this.isSavingLanguages = true;

        this.userService.saveSpokenLanguages(this.userLanguages).subscribe((res: Response) => {
            this.isSavingLanguages = false;

            this.notificationService.show(
                new Notification('success', 'Vos informations ont bien été enregistrées')
            );
        });
    }

    removeSpokenLanguage(spokenLanguageId: number) {
        this.userLanguages.splice(spokenLanguageId, 1);
    }

    saveJobSeekingInfos() {
        this.isSavingJobSeekingData = true;
        this.userService.saveJobSeekingData(this.lookingForJobNamingList, this.user.alert_frequency_id).subscribe((res: Response) => {
            this.isSavingJobSeekingData = false;

            this.userService.getUserInfos().subscribe((res: Response) => {
                this.user = res.json();
            });

            this.notificationService.show(
                new Notification('success', 'Vos informations ont bien été enregistrées')
            );
        });
    }
}