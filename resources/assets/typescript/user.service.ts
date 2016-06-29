import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';
    getApplicationsUrl = '/applications/all';

    constructor(private http: Http) {

    }

    /**
     * Sign user in
     * @param email
     * @param password
     * @returns {Observable<Response>}
     */

    login(email, password) {
        let __this = this;

        console.log(__this.signInUrl + email + '/' + password);
        return this.http.get(__this.signInUrl + email + '/' + password);
    }

    /**
     * Get user's job applications
     * @param userId
     */
    getApplications() {
        let __this = this;

        return this.http.get(__this.getApplicationsUrl);
    }
}