import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { RouteParams } from '@angular/router-deprecated';

// Services
import { PostService } from './../../services/post.service';

@Component({
    inputs: ['postId'],
    selector: 'post',
    templateUrl: '../templates/post.component.html',
})

export class PostComponent {
    postId:string;
    post: any;

    constructor(private postService: PostService) {
        let __this = this;
        /* this.postId = routeParams.get("postId");

        postService.getPost(__this.postId).subscribe((res: Response) => {
            __this.post = res.json();
        }); */
    }
}