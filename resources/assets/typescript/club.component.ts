import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouteParams, RouterLink }
    from '@angular/router-deprecated';

// Services
import { ClubService } from './club.service';

@Component({
    providers: [ClubService],
    inputs: ['clubId'],
    selector: 'club',
    templateUrl: '../templates/club.component.html',
})

export class ClubComponent {
    clubId:string;
    club: any;

    constructor(private routeParams: RouteParams,
                private clubService: ClubService) {
        let __this = this;
        this.clubId = routeParams.get("clubId");

        clubService.getClub(__this.clubId).subscribe((res: Response) => {
            __this.club = res.json();
        });
    }
}