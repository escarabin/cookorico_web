import { Component, ChangeDetectorRef } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ReferenceService } from '../../services/reference.service';
import { UserService } from '../../services/user.service';
import { BusinessService } from '../../services/business.service';
import { NotificationsService } from '../../services/notification.service';

// Models
import { Business } from '../../models/business'
import { Place } from '../../models/place'
import { Notification } from '../../models/notification';

// File drop zone
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'create-business',
    templateUrl: '../../../templates/create-business.component.html'
})

export class CreateBusinessComponent {
    business:any = new Business();
    place:Place = new Place();
    businessTypes: any;
    isLoading: boolean = false;
    isIntepretingFile: boolean = false;
    lockLocationData: boolean = false;
    isAddressParsed: boolean = false;
    public adress: Object;
    public photoUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;
    user: any = [];

    constructor(private referenceService: ReferenceService,
                private userService: UserService,
                private notificationService: NotificationsService,
                private businessService: BusinessService,
                private ref: ChangeDetectorRef,
                private router: Router,
                private route: ActivatedRoute) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * By default, get user's email and set it as business's email
         */
        this.business.email = this.user.email;

        route.params.subscribe(params => {
            if (params) {
                __this.business.id = params["businessId"];

                if (__this.business.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.isAddressParsed = true;

                    __this.userService.getBusiness(__this.business.id).subscribe((res: Response) => {
                        __this.business = res.json();
                    });
                }
            }
        });

        this.referenceService.getAllBusinessTypes().subscribe((res: Response) => {
            __this.businessTypes = res.json();
        })
    }

    /**
     * This code is here to prevent form from submitting
     * after user hits [ENTER] key, which can cause errors
     * if form is not correctly completed
     * @param event
     */
    onKey(event:any) {
        let key = event.key;

        if (key == "Enter") {
            event.preventDefault()
            window.stop(); // Works in all browsers but IE
            document.execCommand("Stop"); // Works in IE
        }
    }

    /**
     * Reset form after adress has been parsed
     */
    resetForm() {
        this.isAddressParsed = false;
        this.business = new Business();
        this.place = new Place();
    }

    parseAdress(place:Object) {
        this.isAddressParsed = true;
        this.lockLocationData = true;

        /**
         * Parse google maps API data into [business] object
         */
        var location = place['geometry']['location'];
        this.business.place.lat =  location.lat();
        this.business.place.lon = location.lng();

        /**
         * Parse google maps API data into [place] object
         */
        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.business.place.adress = place['formatted_address'];
        this.business.title = place['name'];

        /**
         * Loop through existing photos to remove
         * only the ones we got from Google API

        for (let i = 0; i < this.business.photos.length; i++) {
            console.log('photos are : ', this.business.photos);
            if (this.business.photos[i]['fromGoogle']) {
                delete this.business.photos["fromGoogle"];
            }
        }*/

        /**
         * Loop through photos to save urls
         */
        if (place['photos']) {
            for (let i = 0; i < place['photos'].length; i++) {
                let photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });3
                this.business.photos.splice(0, 0, {url: photoUrl, fromGoogle: true});
            }
        }

        /**
         * Parse business type
         */
        if (place['types'].indexOf('restaurant')) {
            this.business.business_type_id = 2;
        }
        else if (place['types'].indexOf('lodging')) {
            this.business.business_type_id = 1;
        }
        else if (place['types'].indexOf('campground')) {
            this.business.business_type_id = 6;
        }
        else if (place['types'].indexOf('cafe') || place['types'].indexOf('bar')) {
            this.business.business_type_id = 8;
        }
        else {
            this.business.business_type_id = 9;
        }

        /**
         * Verifying if city and postalCode are given via Google API
         */
        this.business.place.googlePlaceId = place['place_id'];
        if (place['address_components'][2]) {
            this.business.place.city = place['address_components'][2]['long_name'];
        }
        if (place['address_components'][6]) {
            this.business.place.postalCode = place['address_components'][6]['long_name'];
        }

        /**
         * Force Angular 2 to detect [business] & [place] objects changes
         * After a lot of research, this is the only workaround found yet
         * to fix the bug causing the inputs not to be filled with new data
         */
        this.ref.detectChanges()
    }

    submitBusiness() {
        let __this = this;
        this.isLoading = true;

        this.businessService.create(__this.business, __this.business.place, __this.user.id).subscribe((res:Response) => {
            if (res['_body']) {
                /**
                 * Parsing business id from response
                 */
                let createdBusiness = res['_body'];

                let indexOfBusinessId = createdBusiness.indexOf('"id":');
                var createdBusinessId = createdBusiness.slice(indexOfBusinessId);

                createdBusinessId = createdBusinessId.replace('"id":', '');
                let indexOfComma = createdBusinessId.indexOf(',');
                createdBusinessId = createdBusinessId.slice(0, indexOfComma);

                if (__this.business.id) {
                    __this.notificationService.show(
                        new Notification('success', 'Vos modifications ont bien été enregistrées')
                    );
                }
                else {
                    __this.notificationService.show(
                        new Notification('success', 'Votre établissement a bien été créee')
                    );

                    location.reload();

                    if (!__this.user.is_active) {
                        __this.router.navigate(['/profil/annonce/creer/' + createdBusinessId]);
                    }
                    else {
                        __this.router.navigate(['/profil/etablissements']);
                    }
                }
                // Redirect to item edition
                // __this.router.navigate(['/profile/business/edit/' + res.json()['id']]);
            }
            else {
                __this.notificationService.show(
                    new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                );
            }
            this.isLoading = false;
        })
    }

    deleteBusinessPhoto(photoUrl) {
        for (let i = 0; i < this.business.photos.length; i++) {
            if (this.business.photos[i]['url'] == photoUrl) {
                this.business.photos.splice(i, 1);
            }
        }
    }

    public fileChangeListener($event) {
        var image:any = new Image();

        /**
         * File was selected via input[type=file]
         */
        var file:File;
        if ($event.target) {
            file = $event.target.files[0];
        }
        /**
         * File was dropped on [ng2FileDrop] zone
         */
        else {
            file = $event[0];
        }
        var myReader:FileReader = new FileReader();
        let __this = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            __this.business.photos.splice(0, 0, {url: image.src});
            __this.isIntepretingFile = false;
        };

        myReader.readAsDataURL(file);
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public photoFileDropped(e:any):void {
        this.isIntepretingFile = true;
        this.fileChangeListener(e);
    }
}