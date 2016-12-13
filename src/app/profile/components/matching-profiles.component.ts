import { Component, ChangeDetectorRef } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { ReferenceService } from './../../services/reference.service';

@Component({
    selector: 'matching-profiles',
    templateUrl: '../../../templates/matching-profiles.component.html',
})

export class MatchingProfilesComponent {
    items: any = [];
    jobPosts: any = [];
    jobNamingId: number = 0;
    xpLevelId: number = 0;
    xpLevels: any = [];
    isLoadingProfiles: boolean = true;
    user: any = {};

    constructor(private userService: UserService,
                private ref: ChangeDetectorRef,
                private referenceService: ReferenceService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getJobPosts(this.user.id, false).subscribe((res: Response) => {
            __this.jobPosts = res.json();

            if (__this.jobPosts.length > 0) {
                this.userService.getMatchingProfiles(this.user.id).subscribe((res: Response) => {
                    __this.items = res.json();
                    __this.isLoadingProfiles = false;

                    this.ref.detectChanges();

                    /**
                     * By default, select first option if only one is available

                    if (__this.jobPosts.length == 1) {
                        __this.jobNamingId = __this.jobPosts[0].job_naming_id;
                    }*/
                });
            }
        });

        this.referenceService.getAllJobXpLevels().subscribe((res: Response) => {
            __this.xpLevels = res.json();
        });
    }
}