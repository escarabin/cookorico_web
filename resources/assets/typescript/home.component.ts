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
    selector: 'home',
    templateUrl: '../templates/home.component.html',
})

export class HomeComponent {
    jobs: any;
    posts: any;
    clubs: any;
    states: any;
    contractTypes: any;
    jobNamings: any;
    innerHeight: number;

    contractTypeId: string;
    jobNamingId: string;
    stateId: string;

    constructor(private jobService: JobService,
                private postService: PostService,
                private clubService: ClubService,
                private referenceService: ReferenceService) {
        let __this = this;

        jobService.getAllJobs().subscribe((res: Response) => {
            __this.jobs = res.json();
        });

        postService.getAllPosts().subscribe((res: Response) => {
            __this.posts = res.json();
        });

        clubService.getAllClubs().subscribe((res: Response) => {
            __this.clubs = res.json();
        });

        referenceService.getAllContractTypes().subscribe((res: Response) => {
            __this.contractTypes = res.json();
        });

        referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });
    }

    logVars() {
        console.log(this.contractTypeId, this.jobNamingId, this.stateId);
    }

    ngOnInit(event) {
        this.fitMainDivToWindow();
    }
    fitMainDivToWindow() {
        if (window.innerHeight > 400) {
            this.innerHeight = window.innerHeight;
        }
        else {
            this.innerHeight = 300;
        }
    }
}