import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';

@Component({
    selector: 'matching-profiles',
    providers: [ UserService ],
    templateUrl: '../templates/matching-profiles.component.html',
})

export class MatchingProfilesComponent {
    items: any = [];
    jobPosts: any = [];
    jobPostId: number = 0;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getMatchingProfiles().subscribe((res: Response) => {
            __this.items = res.json();
        });

        this.userService.getJobPosts().subscribe((res: Response) => {
            __this.jobPosts = res.json();
        });
    }
}