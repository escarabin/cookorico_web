import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Services
import { ReferenceService } from './../services/reference.service';

@Component({
    providers: [ReferenceService],
    selector: 'job-search-bar',
    templateUrl: '../templates/job-search-bar.component.html',
})

export class JobSearchBarComponent {
    places: any;
    jobNamingGroups: any;

    jobNamingId: number = 0;
    placeId: number = 0;

    constructor(private referenceService: ReferenceService) {
        let __this = this;

        referenceService.getAllStates().subscribe((res: Response) => {
            __this.places = res.json();
        });

        referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });
    }

    parseAdress(place: Object) {
        console.log(place);
    }
}