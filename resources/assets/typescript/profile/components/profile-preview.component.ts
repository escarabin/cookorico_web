import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notification.service';

// Image cropping
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';

// File drop zone
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

// Models
import { Notification } from '../../models/notification';

// ng2-bootstrap necessary workaround (17/08/16)
import {ComponentsHelper} from
    'ng2-bootstrap/components/utils/components-helper.service';

@Component({
    providers: [UserService],
    selector: 'profile-preview',
    templateUrl: '../templates/profile-preview.component.html',
    viewProviders: [{provide: ComponentsHelper, useClass: ComponentsHelper}]
})

export class ProfilePreviewComponent {
    @ViewChild('cropper', undefined)
    cropper:ImageCropperComponent;
    @Output profilePictureChanged: EventEmitter = new EventEmitter();
    user: any = [];
    experiences: any = [];
    education: any = [];
    testimonials: any = [];
    profilePictureData: any;
    profilePictureUrl: string;
    resumeData: any;
    isLoading:boolean = false;
    editableProfile: boolean = false;
    cropperSettings: CropperSettings;
    editingItems: any = [];
    userIdRouteParam: string;
    public profilePictureUploader:FileUploader = new FileUploader({url: URL});
    public resumeUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private notificationService: NotificationsService) {
        let __this = this;

        /**
         * If userId is defined, then show the profile of this user
         * else, get data from logged in user
         */
        route.params.subscribe(params => {
            if (params) {
                __this.userIdRouteParam = params['id'];
            }
        });

        if (!this.userIdRouteParam) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.userIdRouteParam = this.user['id'];

            // The profile is logged user's one so he is able to edit it
            this.editableProfile = true;
        }

        this.userService.get(this.userIdRouteParam).subscribe((res: Response) => {
            __this.user = res.json();

            __this.userService.getExperiences(__this.user.id).subscribe((res: Response) => {
                __this.experiences = res.json();
            });

            __this.userService.getEducation(__this.user.id).subscribe((res: Response) => {
                __this.education = res.json();
            });

            __this.userService.getTestimonials(__this.user.id).subscribe((res: Response) => {
                __this.testimonials = res.json();
            });
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

    public resumeFileDropped(e:any):void {
        this.resumeData = e[0];

        if (this.resumeData.type == "application/pdf") {
            this.uploadResume();
        }
        else {
            this.notificationService.show(
                new Notification('error', 'Seuls les fichiers de type PDF sont acceptés')
            );
        }
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
        };

        myReader.readAsDataURL(file);
    }

    uploadProfilePicture() {
        this.isLoading = true;

        this.userService.uploadProfilePicture(this.profilePictureData.image).subscribe((res: Response) => {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                this.notificationService.show(
                    new Notification('success', 'Votre photo de profil a bien été modifiée')
                );

                /**
                 * Close profile picture modal
                 */
                document.getElementById('close-profile-picture-modal').click();
            }

            this.isLoading = false;

            this.profilePictureChanged.emit();

            /**
             * Full reloading of page because it appears to be a bug inside
             * this Angular's router function :
             * this.router.renavigate();
             */
            setTimeout(function() {
                location.reload();
            }, 1000);
        });
    }

    uploadResume() {
        this.isLoading = true;

        this.userService.uploadResume(this.resumeData).subscribe((res: Response) => {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                this.notificationService.show(
                    new Notification('success', 'Votre CV a bien été modifié')
                );

                /**
                 * Close resume modal
                 */
                document.getElementById('edit-resume-modal').click();
            }

            this.isLoading = false;
        });
    }

    /**
     * Save edited profile info
     * @param key
     * @param value
     */
    saveProfileInfo(key: string, value: string) {
        this.userService.updateInfo(key, value) .subscribe((res: Response) => {
            this.editingItems[key] = false;

            if (key == 'new_email') {
                this.notificationService.show(
                    new Notification('success', 'Un mail vient de vous être envoyé pour confirmer votre nouvelle adresse email')
                );
            }
            else {
                this.notificationService.show(
                    new Notification('success', 'Vos modifications ont bien été enregistrées')
                );
            }
        });
    }
}