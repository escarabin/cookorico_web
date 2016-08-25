import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { JobService } from './../../services/job.service';
import { PostService } from './../../services/post.service';
import { ClubService } from './../../services/club.service';

@Component({
    providers: [JobService,
                PostService,
                ClubService],
    selector: 'home',
    templateUrl: '../templates/home.component.html',
})

export class HomeComponent {
    jobs: any;
    posts: any;
    clubs: any;
    innerHeight: number;

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