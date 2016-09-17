import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import appGlobals = require('./../globals');

@Injectable()
export class ClubService {
    allClubsListingUrl = appGlobals.apiUrl + '/clubs/all';
    showClubListingUrl = appGlobals.apiUrl + '/club/';
    clubId: number;

    constructor(private http: Http) {

    }

    /**
     * Listing all clubs
     * @returns {Observable<Response>}
     */
    getAllClubs() {
        let __this = this;

        return this.http.request(__this.allClubsListingUrl);
    }

    /**
     * Returns specific club
     * @param id
     */
    getClub(clubId) {
        let __this = this;

        return this.http.request(__this.showClubListingUrl + clubId);
    }
}