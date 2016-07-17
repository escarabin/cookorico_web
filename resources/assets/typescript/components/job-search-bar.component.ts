import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { JobService } from './../services/job.service';
import { PostService } from './../services/post.service';
import { ClubService } from './../services/club.service';
import { ReferenceService } from './../services/reference.service';

@Component({
    providers: [JobService,
        PostService,
        ClubService,
        ReferenceService],
    directives: [RouterLink],
    selector: 'job-search-bar',
    templateUrl: '../templates/job-search-bar.component.html',
})

export class JobSearchBarComponent {
    states: any;
    contractTypes: any;
    jobNamingGroups: any;

    contractTypeId: string;
    jobNamingId: string;
    stateId: string;

    constructor(private jobService: JobService,
                private postService: PostService,
                private clubService: ClubService,
                private referenceService: ReferenceService) {
        let __this = this;

        referenceService.getAllStates().subscribe((res: Response) => {
            __this.states = res.json();
        });

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });
    }
}