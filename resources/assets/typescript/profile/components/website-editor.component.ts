import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Response } from '@angular/http';

// Services
import { WebsiteEditorService } from './../../services/website-editor.service';
import { ReferenceService } from './../../services/reference.service';

// Models
import { Option } from './../../models/option';

@Component({
    selector: 'website-editor',
    directives: [CORE_DIRECTIVES,
                 FORM_DIRECTIVES],
    providers: [ WebsiteEditorService, ReferenceService ],
    templateUrl: '../templates/website-editor.component.html',
})

export class WebsiteEditorComponent {
    homePartnersIdList:any;
    homeBannerHtmlContent: string;
    jobNamings: any = [];
    trafficDrivenCats: any = [];
    isLoading: boolean = false;

    constructor(private websiteEditorService: WebsiteEditorService,
                private referenceService: ReferenceService) {
        let __this = this;

        this.referenceService.getAllJobNamings().subscribe((res: Response) => {
            __this.jobNamings = res.json();
        });

        let geocoder = new google.maps.Geocoder;

        this.websiteEditorService.getTraficDrivenCategories().subscribe((res: Response) => {
            let htaccessList = res.json();

            for (let i = 1; i < Object.keys(htaccessList).length + 1; i++) {
                let urlParams = htaccessList[i];
                if (urlParams) {
                    let urlTitleAndDesc = urlParams.split('#');
                    urlParams = urlParams.split(' ');
                    delete urlParams[0];

                    let placeId = urlParams[2].split('/')[2];
                    let jobNamingId = urlParams[2].split('/')[3];

                    /**
                     * Get google maps data from placeId using reverse geocoding API
                     */
                    geocoder.geocode({'placeId': placeId}, function(results) {
                        let place = results[0];

                        urlParams = { title: urlTitleAndDesc[1], description: urlTitleAndDesc[2], path: urlParams[1], jobNamingId: jobNamingId, place: place };
                        __this.trafficDrivenCats.push(urlParams);
                    });
                }
            }
        });
    }

    saveTrafficDrivenCategories() {
        this.isLoading = true;
        
        console.log("we are saving", this.trafficDrivenCats);
        this.websiteEditorService.saveTraficDrivenCategories(this.trafficDrivenCats).subscribe((res: Response) => {
            this.isLoading = false;
        });
    }

    /**
     * Triggered after a change in home banner changed
     * @param newPromoContent
     */
    homeBannerHtmlChanged(newPromoContent) {
        this.homeBannerHtmlContent = newPromoContent;
    }

    /**
     * Save home banner HTML content from tinyMCE editor
     */
    saveHomeBannerHtml() {
        let option = new Option('home_banner_content', this.homeBannerHtmlContent);
        
        this.websiteEditorService.saveOption(option).subscribe((res: Response) => {
            console.log(res.json());
        });
    }

    /**
     * Save partners displayed on home page
     */
    saveHomePartners() {
        console.log('partners', this.homePartnersIdList);
    }

    /**
     * Triggered after a change on business-select
     * @param businessIdList
     */
    handleBusinessIdListChange(businessIdList) {
        this.homePartnersIdList = businessIdList;
    }

    /**
     * Remove specific SEO traffic driven category
     * @param catId
     */
    removeTrafficDriventCat(catId: number) {
        delete this.trafficDrivenCats[catId];
    }

    /**
        Function fired after user clicked on a google place
    */
    parseAdress(place: Object, catId: number) {
        this.trafficDrivenCats[catId]['place'] = place;
    }
}