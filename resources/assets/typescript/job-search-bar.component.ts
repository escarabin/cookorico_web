import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { JobService } from './job.service';
import { PostService } from './post.service';
import { ClubService } from './club.service';
import { ReferenceService } from './reference.service';

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
    jobNamings: any;

    contractTypeId: string;
    jobNamingId: string;
    stateId: string;

    constructor(private jobService: JobService,
                private postService: PostService,
                private clubService: ClubService,
                private referenceService: ReferenceService) {
        let __this = this;

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });
    }
}