import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Services
import { ReferenceService } from '../../services/reference.service';

@Component({
    selector: 'job-search-bar',
    templateUrl: '../../../templates/job-search-bar.component.html',
})

export class JobSearchBarComponent {
    jobNamingGroups: any;
    jobNamingId: number = 0;
    place: any = {place_id: 0};

    constructor(private referenceService: ReferenceService,
                private ref: ChangeDetectorRef) {
        let __this = this;

        referenceService.getAllJobNamingGroups().subscribe((res: Response) => {
            __this.jobNamingGroups = res.json();
        });
    }

    parseAdress(place: Object) {
        this.place = place;

        this.ref.detectChanges();
    }
}