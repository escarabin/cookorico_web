import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';

@Component({
    templateUrl: '../templates/search.component.html',
    providers: [ UserService ],
    selector: 'search',
})

export class SearchComponent {
    placeId: string;
    jobNamingId: number;
    contractTypeId: number;
    studyLevelId: number;
    searchParameters: any = [];
    user: any;

    constructor(private route: ActivatedRoute,
                private userService: UserService) {
        this.userService.getUserInfos().subscribe((res: Response) => {
            if (res.text().length > 10) {
                this.user = res.json();
            }
        });

        route.params.subscribe(params => {
            if (params) {
                this.placeId = params['placeId'];
                this.jobNamingId = parseInt(params['jobNamingId']);
                this.contractTypeId = parseInt(params['contractTypeId']);
                this.studyLevelId = parseInt(params['studyLevelId']);
            }
        });
    }
}