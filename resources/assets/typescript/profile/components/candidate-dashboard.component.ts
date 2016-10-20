import { Component, ChangeDetectorRef } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';

@Component({
    providers: [ UserService, ReferenceService ],
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

    constructor(private userService: UserService,
                private ref: ChangeDetectorRef,
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

        /**
         * Parse lookingForJobNamingList
         */
        for (let i = 0; i < this.user['looking_for_job_namings'].length; i++) {
            this.lookingForJobNamingList[i]['id'] = this.user['looking_for_job_namings'][i]['id'];

            /**
             * Get google maps data from placeId using reverse geocoding API
             */
            let geocoder = new google.maps.Geocoder;
            geocoder.geocode({'placeId': this.user['looking_for_job_naming_places'][i]['googlePlaceId']},
                function(results) {
                    let place = results[0];
                    __this.lookingForJobNamingList[i]['place'] = place;

                    __this.ref.detectChanges();
                }
            );
        }
    }

    parseAdress(place: Object, jobNamingIndex: number) {
        this.lookingForJobNamingList[jobNamingIndex]['place'] = place;
        this.ref.detectChanges();
    }

    submitUserInfos() {

    }
}