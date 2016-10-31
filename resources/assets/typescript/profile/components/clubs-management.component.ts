import { Component, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { ClubService } from '../../services/club.service';

// Image cropping
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';

// File drop zone
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'clubs-management',
    providers: [ClubService],
    templateUrl: '../templates/clubs-management.component.html'
})

export class ClubsManagementComponent {
    clubs: any = [];
    club: any = {};
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    cropper:ImageCropperComponent;
    public profilePictureUploader:FileUploader = new FileUploader({url: URL});
    cropperSettings: CropperSettings;
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;
    profilePictureData: any;
    isSavingClub: boolean = false;
    isGroupEdtingMode: boolean = false;
    groupSpacesAmount: number;

    constructor(private clubService: ClubService,
                private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            if (params['type'] == 'groupes') {
                this.isGroupEdtingMode = true;
                this.clubService.getAllGroups().subscribe((clubs:Response) => {
                    this.clubs = clubs.json();
                });
            }
            else {
                this.clubService.getAllClubs().subscribe((clubs:Response) => {
                    this.clubs = clubs.json();
                });
            }
        });

        /**
         * Image cropper settings
         * @type {CropperSettings}
         */
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.profilePictureData = {};
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public profilePictureFileDropped(e:any):void {
        this.fileChangeListener(e);
    }

    public fileChangeListener($event) {
        var image:any = new Image();

        /**
         * File was chosen via input[type=file]
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
            __this.cropper.setImage(image);
            __this.club.profilePictureUrl = image.src;
        };

        myReader.readAsDataURL(file);
    }

    /**
     * Function fired after business-select returns a place / business
     * @param clubId
     * @param businessId
     */
    handleBusinessIdChange(businessId: number, clubId: number) {
        this.clubService.attachBusiness(clubId, businessId).subscribe((res:Response) => {
            this.refreshData();
        });
    }

    parseAdress(place: Object) {
        this.club.place = place;
    }

    detachBusinessFromClub(clubId: number, businessId: number) {
        this.clubService.detachBusiness(clubId, businessId).subscribe((res:Response) => {
            this.refreshData();
        });
    }

    saveClub() {
        this.isSavingClub = true;

        this.clubService.create(this.club, this.isGroupEdtingMode, this.groupSpacesAmount).subscribe((club:Response) => {
            this.isSavingClub = false;
            this.club = {};
            this.profilePictureData = {};
            this.refreshData();
        });
    }

    deleteClub(clubId: number) {
        this.clubService.deleteClub(clubId).subscribe((club:Response) => {
            this.refreshData();
        });
    }


    refreshData() {
        /**
         * Reload clubs
         */
        if (this.isGroupEdtingMode) {
            this.clubService.getAllGroups().subscribe((clubs:Response) => {
                this.clubs = clubs.json();
            });
        }
        else {
            this.clubService.getAllClubs().subscribe((clubs:Response) => {
                this.clubs = clubs.json();
            });
        }
    }
}