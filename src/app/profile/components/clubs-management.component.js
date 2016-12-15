"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Image cropping
var ng2_img_cropper_1 = require('ng2-img-cropper');
// File drop zone
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var ClubsManagementComponent = (function () {
    function ClubsManagementComponent(clubService, userService, route) {
        var _this = this;
        this.clubService = clubService;
        this.userService = userService;
        this.route = route;
        this.clubs = [];
        this.club = { 'plans': [{}] };
        this.profilePictureUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.businessIdList = [];
        this.isSavingClub = false;
        this.isGroupEdtingMode = false;
        this.isMemberCollapsed = [];
        this.isBusinessesCollapsed = [];
        this.newClubMember = {};
        this.route.params.subscribe(function (params) {
            if (params['type'] == 'groupes') {
                _this.isGroupEdtingMode = true;
            }
        });
        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.profilePictureData = {};
        this.retrieveClubListing();
    }
    ClubsManagementComponent.prototype.retrieveClubListing = function () {
        var _this = this;
        if (this.isGroupEdtingMode == true) {
            this.isGroupEdtingMode = true;
            this.clubService.getAllGroups().subscribe(function (clubs) {
                _this.clubs = clubs.json();
                console.log('get all clubs', _this.clubs);
            });
        }
        else {
            this.clubService.getAllClubs().subscribe(function (clubs) {
                _this.clubs = clubs.json();
            });
        }
    };
    ClubsManagementComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ClubsManagementComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ClubsManagementComponent.prototype.profilePictureFileDropped = function (e) {
        this.fileChangeListener(e);
    };
    ClubsManagementComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        /**
         * File was chosen via input[type=file]
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
            __this.cropper.setImage(image);
            __this.club.profilePictureUrl = image.src;
        };
        myReader.readAsDataURL(file);
    };
    /**
     * Function fired after business-select returns a place / business
     * @param clubId
     * @param businessId
     */
    ClubsManagementComponent.prototype.handleBusinessIdChange = function (businessId, clubId) {
        var _this = this;
        this.clubService.attachBusiness(clubId, businessId).subscribe(function (res) {
            _this.refreshData();
        });
    };
    ClubsManagementComponent.prototype.parseAdress = function (place) {
        this.club.place = place;
    };
    ClubsManagementComponent.prototype.detachBusinessFromClub = function (clubId, businessId) {
        var _this = this;
        this.clubService.detachBusiness(clubId, businessId).subscribe(function (res) {
            _this.refreshData();
        });
    };
    ClubsManagementComponent.prototype.saveClub = function () {
        var _this = this;
        this.isSavingClub = true;
        this.clubService.create(this.club, this.isGroupEdtingMode, this.groupSpacesAmount).subscribe(function (club) {
            _this.isSavingClub = false;
            _this.club = {};
            _this.profilePictureData = {};
            _this.refreshData();
        });
    };
    ClubsManagementComponent.prototype.deleteClub = function (clubId) {
        var _this = this;
        this.clubService.deleteClub(clubId).subscribe(function (club) {
            _this.refreshData();
        });
    };
    ClubsManagementComponent.prototype.openClubContactModal = function () {
        this.showModalBackdrop();
        document.getElementById("club-contact-modal").style.display = "block";
    };
    ClubsManagementComponent.prototype.hideClubContactModal = function () {
        this.hideModalBackdrop();
        document.getElementById("club-contact-modal").style.display = "none";
    };
    ClubsManagementComponent.prototype.showModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    };
    ClubsManagementComponent.prototype.hideModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    };
    ClubsManagementComponent.prototype.editClub = function (clubToEdit) {
        this.club = clubToEdit;
    };
    ClubsManagementComponent.prototype.refreshData = function () {
        var _this = this;
        /**
         * Reload clubs
         */
        if (this.isGroupEdtingMode) {
            this.clubService.getAllGroups().subscribe(function (clubs) {
                _this.clubs = clubs.json();
            });
        }
        else {
            this.clubService.getAllClubs().subscribe(function (clubs) {
                _this.clubs = clubs.json();
            });
        }
    };
    ClubsManagementComponent.prototype.loginUsingId = function (userId) {
        this.userService.loginUsingId(userId).subscribe(function (user) {
            localStorage.setItem('user', JSON.stringify(user.json()));
            document.location.hash = '/';
        });
    };
    /**
     * Create a new member & attach him to a club
     * @param clubId
     */
    ClubsManagementComponent.prototype.createClubMember = function (clubId) {
        var _this = this;
        this.clubService.createClubMember(this.newClubMember, clubId).subscribe(function (res) {
            _this.retrieveClubListing();
        });
    };
    ClubsManagementComponent.prototype.deleteClubMember = function (clubMemberId) {
        var _this = this;
        this.clubService.deleteClubMember(clubMemberId).subscribe(function (res) {
            _this.retrieveClubListing();
        });
    };
    __decorate([
        core_1.ViewChild('cropper', undefined)
    ], ClubsManagementComponent.prototype, "cropper");
    ClubsManagementComponent = __decorate([
        core_1.Component({
            selector: 'clubs-management',
            templateUrl: '../../../templates/clubs-management.component.html'
        })
    ], ClubsManagementComponent);
    return ClubsManagementComponent;
}());
exports.ClubsManagementComponent = ClubsManagementComponent;
