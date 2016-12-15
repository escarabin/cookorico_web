"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var business_1 = require('../../models/business');
var place_1 = require('../../models/place');
var notification_1 = require('../../models/notification');
// File drop zone
var ng2_file_upload_1 = require('ng2-file-upload');
var CreateBusinessComponent = (function () {
    function CreateBusinessComponent(referenceService, userService, notificationService, businessService, ref, router, route) {
        this.referenceService = referenceService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.businessService = businessService;
        this.ref = ref;
        this.router = router;
        this.route = route;
        this.business = new business_1.Business();
        this.place = new place_1.Place();
        this.isLoading = false;
        this.isIntepretingFile = false;
        this.lockLocationData = false;
        this.isAddressParsed = false;
        this.isManualCreation = false;
        this.photoUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.user = [];
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * By default, get user's email and set it as business's email
         */
        this.business.email = this.user.email;
        route.params.subscribe(function (params) {
            if (params) {
                __this.business.id = params["businessId"];
                if (__this.business.id) {
                    // Editing a specific item, let's retrieve it's data
                    __this.isAddressParsed = true;
                    __this.userService.getBusiness(__this.business.id).subscribe(function (res) {
                        __this.business = res.json();
                    });
                }
            }
        });
        this.referenceService.getAllBusinessTypes().subscribe(function (res) {
            __this.businessTypes = res.json();
        });
    }
    /**
     * This code is here to prevent form from submitting
     * after user hits [ENTER] key, which can cause errors
     * if form is not correctly completed
     * @param event
     */
    CreateBusinessComponent.prototype.onKey = function (event) {
        var key = event.key;
        if (key == "Enter") {
            event.preventDefault();
            window.stop(); // Works in all browsers but IE
            document.execCommand("Stop"); // Works in IE
        }
    };
    /**
     * Reset form after adress has been parsed
     */
    CreateBusinessComponent.prototype.resetForm = function () {
        this.isAddressParsed = false;
        this.business = new business_1.Business();
        this.place = new place_1.Place();
    };
    CreateBusinessComponent.prototype.parseAdress = function (place, keepTitle) {
        this.isAddressParsed = true;
        this.lockLocationData = true;
        /**
         * Parse google maps API data into [business] object
         */
        var location = place['geometry']['location'];
        this.business.place.lat = location.lat();
        this.business.place.lon = location.lng();
        /**
         * Parse google maps API data into [place] object
         */
        this.business.phone = place['formatted_phone_number'];
        this.business.website = place['website'];
        this.business.place.adress = place['formatted_address'];
        if (!keepTitle) {
            this.business.title = place['name'];
        }
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
            for (var i = 0; i < place['photos'].length; i++) {
                var photoUrl = place['photos'][i].getUrl({ 'maxWidth': 1500, 'maxHeight': 1500 });
                3;
                this.business.photos.splice(0, 0, { url: photoUrl, fromGoogle: true });
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
        this.ref.detectChanges();
    };
    CreateBusinessComponent.prototype.submitBusiness = function () {
        var _this = this;
        var __this = this;
        this.isLoading = true;
        this.businessService.create(__this.business, __this.business.place, __this.user.id).subscribe(function (res) {
            if (res['_body']) {
                /**
                 * Parsing business id from response
                 */
                var createdBusiness = res['_body'];
                var indexOfBusinessId = createdBusiness.indexOf('"id":');
                var createdBusinessId = createdBusiness.slice(indexOfBusinessId);
                createdBusinessId = createdBusinessId.replace('"id":', '');
                var indexOfComma = createdBusinessId.indexOf(',');
                createdBusinessId = createdBusinessId.slice(0, indexOfComma);
                if (__this.business.id) {
                    __this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
                }
                else {
                    __this.notificationService.show(new notification_1.Notification('success', 'Votre établissement a bien été créee'));
                    location.reload();
                    if (!__this.user.is_active) {
                        __this.router.navigate(['/profil/annonce/creer/' + createdBusinessId]);
                    }
                    else {
                        __this.router.navigate(['/profil/etablissements']);
                    }
                }
            }
            else {
                __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
            }
            _this.isLoading = false;
        });
    };
    CreateBusinessComponent.prototype.deleteBusinessPhoto = function (photoUrl) {
        for (var i = 0; i < this.business.photos.length; i++) {
            if (this.business.photos[i]['url'] == photoUrl) {
                this.business.photos.splice(i, 1);
            }
        }
    };
    CreateBusinessComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        /**
         * File was selected via input[type=file]
         */
        var file;
        if ($event.target) {
            file = $event.target.files[0];
        }
        else {
            file = $event[0];
        }
        var myReader = new FileReader();
        var __this = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            __this.business.photos.splice(0, 0, { url: image.src });
            if (__this.business.photos.length == 1) {
                __this.business.logo = image.src;
            }
            __this.isIntepretingFile = false;
        };
        myReader.readAsDataURL(file);
    };
    CreateBusinessComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CreateBusinessComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    CreateBusinessComponent.prototype.photoFileDropped = function (e) {
        this.isIntepretingFile = true;
        this.fileChangeListener(e);
    };
    CreateBusinessComponent = __decorate([
        core_1.Component({
            selector: 'create-business',
            templateUrl: '../../../templates/create-business.component.html'
        })
    ], CreateBusinessComponent);
    return CreateBusinessComponent;
}());
exports.CreateBusinessComponent = CreateBusinessComponent;
