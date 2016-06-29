import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class UserService {
    signInUrl = '/sign-in/';
    getApplicationsUrl = '/applications/all';
    getExperiencesUrl = '/experiences/all';
    getEducationUrl = '/education/all';

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
     */
    getApplications() {
        let __this = this;

        return this.http.get(__this.getApplicationsUrl);
    }

    /**
     * Get user's work experiences
     */
    getExperiences() {
        let __this = this;

        return this.http.get(__this.getExperiencesUrl);
    }

    /**
     * Get user's work experiences
     */
    getEducation() {
        let __this = this;

        return this.http.get(__this.getEducationUrl);
    }
}