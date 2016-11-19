import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../globals';

@Injectable()
export class ClubService {
    allClubsListingUrl = apiUrl + '/clubs/all';
    allGroupsListingUrl = apiUrl + '/groups/all';
    showClubListingUrl = apiUrl + '/club';
    createClubUrl = apiUrl + '/club/create';
    detachBusinessFromClubUrl = apiUrl + '/club/detach-business';
    deleteClubUrl = apiUrl + '/club/delete';
    attachBusinessToClubUrl = apiUrl + '/club/attach-business';
    postRequestHeaders = new Headers({ 'Content-Type': 'application/json' });
    postRequestOptions = new RequestOptions({ headers: this.postRequestHeaders });

    constructor(private http: Http) {

    }

    /**
     * Listing all clubs
     * @returns {Observable<Response>}
     */
    getAllClubs() {
        return this.http.request(this.allClubsListingUrl);
    }

    /**
     * Listing all groups
     * @returns {Observable<Response>}
     */
    getAllGroups() {
        return this.http.request(this.allGroupsListingUrl);
    }

    /**
     * Returns specific club
     * @param id
     * @returns {Observable<Response>}
     */
    getClub(id) {
        return this.http.request(this.showClubListingUrl + '/' + id);
    }

    /**
     * Create a new club
     * @param club
     * @param isGroup
     * @param groupSpacesAmount
     * @returns {Observable<Response>}
     */
    create(club, isGroup: boolean = false, groupSpacesAmount: number = 0) {
        let requestBody = JSON.stringify({ club, isGroup, groupSpacesAmount });

        return this.http.post(this.createClubUrl, requestBody, this.postRequestOptions);
    }

    /**
     * Detach business from specific club
     * @param clubId
     * @param businessId
     * @returns {Observable<Response>}
     */
    detachBusiness(clubId: number, businessId: number) {
        return this.http.request(this.detachBusinessFromClubUrl + '/' + clubId + '/' + businessId);
    }


    /**
     * Attach business from specific club
     * @param clubId
     * @param businessId
     * @returns {Observable<Response>}
     */
    attachBusiness(clubId: number, businessId: number) {
        return this.http.request(this.attachBusinessToClubUrl + '/' + clubId + '/' + businessId);
    }

    /**
     * Delete specific club
     * @param clubId
     * @returns {Observable<Response>}
     */
    deleteClub(clubId: number) {
        return this.http.request(this.deleteClubUrl + '/' + clubId);
    }
}