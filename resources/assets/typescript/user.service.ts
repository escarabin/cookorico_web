import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';

    constructor(private http: Http) {

    }

    /**
     * Sign user in
     * @param email
     * @param password
     * @returns {Observable<Response>}
     */

    signIn(email, password) {
        let __this = this;

        return this.http.request(__this.signInUrl + email + '/' + password);
    }
}