import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';

@Component({
    selector: 'matching-profiles',
    providers: [ UserService, ReferenceService ],
    templateUrl: '../templates/matching-profiles.component.html',
})

export class MatchingProfilesComponent {
    items: any = [];
    jobPosts: any = [];
    jobNamingId: number = 0;
    xpLevelId: number = 0;
    xpLevels: any = [];

    constructor(private userService: UserService,
                private referenceService: ReferenceService) {
        let __this = this;

        this.userService.getMatchingProfiles().subscribe((res: Response) => {
            __this.items = res.json();
        });

        this.userService.getJobPosts().subscribe((res: Response) => {
            __this.jobPosts = res.json();
        });

        this.referenceService.getAllJobXpLevels().subscribe((res: Response) => {
            __this.xpLevels = res.json();
        });
    }
}