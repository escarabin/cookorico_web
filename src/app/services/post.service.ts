import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { apiUrl } from '../globals';

@Injectable()
export class PostService {
    allPostsListingUrl = apiUrl + '/posts/all';
    showPostListingUrl = apiUrl + '/post/';
    postId: number;

    constructor(private http: Http) {

    }

    /**
     * Listing all posts
     * @returns {Observable<Response>}
     */
    getAllPosts() {
        let __this = this;

        return this.http.request(__this.allPostsListingUrl);
    }

    /**
     * Returns specific post
     * @param id
     */
    getPost(postId) {
        let __this = this;

        return this.http.request(__this.showPostListingUrl + postId);
    }
}