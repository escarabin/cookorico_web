import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { JobService } from './job.service';
import { PostService } from './post.service';
import { ClubService } from './club.service';

@Component({
    providers: [JobService,
                PostService,
                ClubService],
    directives: [RouterLink],
    selector: 'home',
    templateUrl: '../templates/home.component.html',
})

export class HomeComponent {
    jobs: any;
    posts: any;
    clubs: any;

    constructor(private jobService: JobService,
                private postService: PostService,
                private clubService: ClubService) {
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
    }
}