import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';

@Injectable()
export class ClubService {
    allClubsListingUrl = '/clubs/all';
    showClubListingUrl = '/club/';
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