import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
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

import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';


// Pipes
// import { SafePipe } from './../../pipes/safe.pipe';

@Component({
    selector: 'profile-preview',
    templateUrl: '../../../templates/profile-preview.component.html',
    // pipes: [ SafePipe ]
})

export class ProfilePreviewComponent {
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    @ViewChild('profilePictureModal') public profilePictureModal: ModalDirective;
    cropper:ImageCropperComponent;
    user: any = [];
    experiences: any = [];
    userLanguages: any = [];
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
    scrollTop: number;
    userInfosAccessible: boolean = true;
    public profilePictureUploader:FileUploader = new FileUploader({url: URL});
    public resumeUploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    /**
     * Change password modal inputs
     */
    oldPassword: string;
    newPassword: string;
    isSavingModal: boolean = false;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationsService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        router.events.subscribe((event) => {
            /**
             * Show complete profile
             */
            if (event.url.indexOf('complet') != -1) {
                this.userInfosAccessible = true;
            }
        });

        /**
         * If userId is defined, then show the profile of this user
         * else, get data from logged in user
         */
        route.params.subscribe(params => {
            if (params) {
                __this.userIdRouteParam = params['userId'];

                if (!__this.userIdRouteParam) {
                    __this.user = JSON.parse(localStorage.getItem('user'));
                    __this.userIdRouteParam = this.user['id'];

                    /**
                     * If user is not a candidate, get him out of this place
                     */
                    if (this.user.user_type_id == 2) {
                        this.router.navigate(['/profil/annonces']);
                    }
                    else if (this.user.user_type_id == 1) {
                        this.router.navigate(['/profil/website-editor']);
                    }

                    // The profile is logged user's one so he is able to edit it
                    __this.editableProfile = true;
                }
                else {
                    __this.user.id = __this.userIdRouteParam;

                    /**
                     * User is a recruiter
                     * Check out if he has access to current candidate infos
                     */
                    this.userService.doRecruiterHasAccessToCandidate(__this.user.id).subscribe((res: Response) => {
                        let response = res['_body'];

                        if (response == "true") {
                            __this.userInfosAccessible = true;
                        }
                    });
                }

                this.userService.get(__this.user.id).subscribe((res: Response) => {
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

                    __this.userService.getSpokenLanguages(__this.user.id).subscribe((res: Response) => {
                        __this.userLanguages = res.json();
                    });
                });
            }
            else {
                this.userInfosAccessible = true;
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

    public userHasNoExperience() {
        this.userService.noExperience(this.user.id).subscribe((res: Response) => {
            this.user.no_experience = true;

            this.notificationService.show(
                new Notification('success', 'Votre information a bien été enregistrée')
            );
        });
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

    /**
     * ng2-bootstrap issue workaround (11/10/16) v1.1.6
     * See https://github.com/valor-software/ng2-bootstrap/issues/986
     */
    public openProfilePictureModal() {
        this.showModalBackdrop();
        document.getElementById("profile-picture-modal").style.display = "block";
    }
    public hideProfilePictureModal() {
        this.hideModalBackdrop();
        document.getElementById("profile-picture-modal").style.display = "none";
    }
    public openResumePreviewModal() {
        this.showModalBackdrop();
        document.getElementById("resume-preview-modal").style.display = "block";
    }
    public hideResumePreviewModal() {
        this.hideModalBackdrop();
        document.getElementById("resume-preview-modal").style.display = "none";
    }
    public openEditResumeModal() {
        this.showModalBackdrop();
        document.getElementById("edit-resume-modal").style.display = "block";
    }
    public hideEditResumeModal() {
        this.hideModalBackdrop();
        document.getElementById("edit-resume-modal").style.display = "none";
    }
    public openChangePasswordModal() {
        this.showModalBackdrop();
        document.getElementById("change-password-modal").style.display = "block";
    }
    public hideChangePasswordModal() {
        this.hideModalBackdrop();
        document.getElementById("change-password-modal").style.display = "none";
    }
    public showModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    }
    public hideModalBackdrop() {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    }

    public resumeFileChangeListener($event) {
        console.log('resume file dropped', $event);

        this.resumeFileDropped($event.target.files);
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

        this.userService.uploadResume(this.resumeData, this.user.id).subscribe((res: Response) => {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res != 'error') {
                this.notificationService.show(
                    new Notification('success', 'Votre CV a bien été modifié')
                );

                this.user.resumeUrl = res;

                /**
                 * Close resume modal
                 */
                this.hideEditResumeModal();
            }
            else {
                this.notificationService.show(
                    new Notification('error', 'Une erreur est survenue, veuillez réessayer')
                );
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
        this.userService.updateInfo(key, value).subscribe((res: Response) => {
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

    /**
     * Disable currently logged user account
     */
    disableAccount() {
        this.userService.disableAccount().subscribe((res: Response) => {
            this.userService.signOut().subscribe((res: Response) => {
                this.router.navigate(['/']);

                this.notificationService.show(
                    new Notification('success', 'Votre compte a bien été désactivé, vous allez recevoir un mail de confirmation')
                );
            });
        });
    }

    /**
     * Shows user data to a recruiter and subtracts
     * a daily contact from his plan
     */
    showUserInfos() {
        this.userService.makeCandidateAccessible(this.user.id).subscribe((res: Response) => {
            let response = res['_body'];

            /**
             * Check if user has some daily contacts credits left
             */
            if (response == "true") {
                this.userInfosAccessible = true;
            }
        });
    }

    /**
     * Save new password
     */
    saveNewPassword() {
        this.isSavingModal = true;

        this.userService.changePassword(this.oldPassword, this.newPassword).subscribe((res: Response) => {
            this.isSavingModal = false;

            this.notificationService.show(
                new Notification('success', 'Votre mot de passe a bien été modifié')
            );
        });
    }

    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    onPageScroll(event: any) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    }
}