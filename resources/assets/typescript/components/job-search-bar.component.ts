import { Component } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Directives
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import { SELECT_DIRECTIVES } from 'ng2-select';

// Services
import { ReferenceService } from './../services/reference.service';

@Component({
    providers: [ReferenceService],
    directives: [RouterLink,
                 GoogleplaceDirective,
                 NgClass,
                 CORE_DIRECTIVES,
                 FORM_DIRECTIVES,
                 BUTTON_DIRECTIVES,
                 SELECT_DIRECTIVES],
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