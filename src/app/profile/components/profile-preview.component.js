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
// Models
var notification_1 = require('../../models/notification');
// Pipes
// import { SafePipe } from './../../pipes/safe.pipe';
var ProfilePreviewComponent = (function () {
    function ProfilePreviewComponent(userService, route, router, referenceService, notificationService) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.referenceService = referenceService;
        this.notificationService = notificationService;
        this.user = [];
        this.experiences = [];
        this.userLanguages = [];
        this.education = [];
        this.testimonials = [];
        this.isLoading = false;
        this.isSavingLanguages = false;
        this.languages = [];
        this.languageLevels = [];
        this.userLanguages = [{ 'language_id': 0, 'language_level_id': 0 }];
        this.editableProfile = false;
        this.editingItems = [];
        this.userInfosAccessible = true;
        this.profilePictureUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.resumeUploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.isSavingModal = false;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        router.events.subscribe(function (event) {
            /**
             * Show complete profile
             */
            if (event.url.indexOf('complet') != -1) {
                _this.userInfosAccessible = true;
            }
        });
        /**
         * GET reference data
         */
        this.referenceService.getAllLanguages().subscribe(function (res) {
            _this.languages = res.json();
        });
        this.referenceService.getAllLanguageLevels().subscribe(function (res) {
            _this.languageLevels = res.json();
        });
        /**
         * GET user spoken languages
         */
        this.userService.getSpokenLanguages(this.user.id).subscribe(function (res) {
            _this.userLanguages = res.json();
        });
        /**
         * If userId is defined, then show the profile of this user
         * else, get data from logged in user
         */
        route.params.subscribe(function (params) {
            if (params) {
                __this.userIdRouteParam = params['userId'];
                if (!__this.userIdRouteParam) {
                    __this.user = JSON.parse(localStorage.getItem('user'));
                    __this.userIdRouteParam = _this.user['id'];
                    /**
                     * If user is not a candidate, get him out of this place
                     */
                    if (_this.user.user_type_id == 2 || _this.user.user_type_id == 4 || _this.user.user_type_id == 5) {
                        _this.router.navigate(['/profil/annonces']);
                    }
                    else if (_this.user.user_type_id == 1) {
                        _this.router.navigate(['/profil/packs']);
                    }
                    // The profile is logged user and he is a candidate so he is able to edit it
                    if (_this.user.user_type_id == 3) {
                        __this.editableProfile = true;
                    }
                }
                else {
                    __this.user.id = __this.userIdRouteParam;
                    /**
                     * User is a recruiter
                     * Check out if he has access to current candidate infos
                     */
                    var recruiterUser = JSON.parse(localStorage.getItem('user'));
                    _this.userService.doRecruiterHasAccessToCandidate(__this.user.id, recruiterUser.id).subscribe(function (res) {
                        var response = res['_body'];
                        if (response == "true") {
                            __this.userInfosAccessible = true;
                        }
                    });
                }
                _this.userService.get(__this.user.id).subscribe(function (res) {
                    __this.user = res.json();
                    __this.userService.getExperiences(__this.user.id).subscribe(function (res) {
                        __this.experiences = res.json();
                    });
                    __this.userService.getEducation(__this.user.id).subscribe(function (res) {
                        __this.education = res.json();
                    });
                    __this.userService.getTestimonials(__this.user.id).subscribe(function (res) {
                        __this.testimonials = res.json();
                    });
                    __this.userService.getSpokenLanguages(__this.user.id).subscribe(function (res) {
                        __this.userLanguages = res.json();
                    });
                });
            }
            else {
                _this.userInfosAccessible = true;
            }
        });
        console.log('user acces is', this.editableProfile);
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
    }
    ProfilePreviewComponent.prototype.userHasNoExperience = function () {
        var _this = this;
        this.userService.noExperience(this.user.id).subscribe(function (res) {
            _this.user.no_experience = true;
            _this.notificationService.show(new notification_1.Notification('success', 'Votre information a bien été enregistrée'));
        });
    };
    ProfilePreviewComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProfilePreviewComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ProfilePreviewComponent.prototype.profilePictureFileDropped = function (e) {
        this.fileChangeListener(e);
    };
    ProfilePreviewComponent.prototype.resumeFileDropped = function (e) {
        this.resumeData = e[0];
        console.log('resume file dropped', this.resumeData);
        if (this.resumeData.type == "application/pdf"
            || this.resumeData.type == "application/msword"
            || this.resumeData.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.uploadResume();
        }
        else {
            this.notificationService.show(new notification_1.Notification('error', 'Seuls les fichiers de type PDF ou WORD sont acceptés'));
        }
    };
    /**
     * ng2-bootstrap issue workaround (11/10/16) v1.1.6
     * See https://github.com/valor-software/ng2-bootstrap/issues/986
     */
    ProfilePreviewComponent.prototype.openProfilePictureModal = function () {
        this.showModalBackdrop();
        document.getElementById("profile-picture-modal").style.display = "block";
    };
    ProfilePreviewComponent.prototype.hideProfilePictureModal = function () {
        this.hideModalBackdrop();
        document.getElementById("profile-picture-modal").style.display = "none";
    };
    ProfilePreviewComponent.prototype.openResumePreviewModal = function () {
        this.showModalBackdrop();
        document.getElementById("resume-preview-modal").style.display = "block";
    };
    ProfilePreviewComponent.prototype.hideResumePreviewModal = function () {
        this.hideModalBackdrop();
        document.getElementById("resume-preview-modal").style.display = "none";
    };
    ProfilePreviewComponent.prototype.openEditResumeModal = function () {
        this.showModalBackdrop();
        document.getElementById("edit-resume-modal").style.display = "block";
    };
    ProfilePreviewComponent.prototype.hideEditResumeModal = function () {
        this.hideModalBackdrop();
        document.getElementById("edit-resume-modal").style.display = "none";
    };
    ProfilePreviewComponent.prototype.openChangePasswordModal = function () {
        this.showModalBackdrop();
        document.getElementById("change-password-modal").style.display = "block";
    };
    ProfilePreviewComponent.prototype.hideChangePasswordModal = function () {
        this.hideModalBackdrop();
        document.getElementById("change-password-modal").style.display = "none";
    };
    ProfilePreviewComponent.prototype.showModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    };
    ProfilePreviewComponent.prototype.hideModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    };
    ProfilePreviewComponent.prototype.resumeFileChangeListener = function ($event) {
        console.log('resume file dropped', $event);
        this.resumeFileDropped($event.target.files);
    };
    ProfilePreviewComponent.prototype.fileChangeListener = function ($event) {
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
        /**
         * Do not accept files that are over 1MB
         */
        if (file.size < 1000000) {
            var myReader = new FileReader();
            var __this_1 = this;
            myReader.onloadend = function (loadEvent) {
                image.src = loadEvent.target.result;
                __this_1.cropper.setImage(image);
            };
            myReader.readAsDataURL(file);
        }
        else {
            this.notificationService.show(new notification_1.Notification('error', 'Votre photo doit faire moins d\'1 mo'));
        }
    };
    ProfilePreviewComponent.prototype.uploadProfilePicture = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.uploadProfilePicture(this.profilePictureData.image, this.user.id).subscribe(function (res) {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res['_body']) {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre photo de profil a bien été modifiée'));
                /**
                 * Close profile picture modal
                 */
                document.getElementById('close-profile-picture-modal').click();
            }
            _this.isLoading = false;
            /**
             * Full reloading of page because it appears to be a bug inside
             * this Angular's router function :
             * this.router.renavigate();
             */
            setTimeout(function () {
                location.reload();
            }, 1000);
        });
    };
    ProfilePreviewComponent.prototype.uploadResume = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.uploadResume(this.resumeData, this.user.id).subscribe(function (res) {
            /**
             * File has been successfully uploaded to AWS S3
             */
            if (res != 'error') {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre CV a bien été modifié'));
                _this.user.resumeUrl = res;
                /**
                 * Close resume modal
                 */
                _this.hideEditResumeModal();
            }
            else {
                _this.notificationService.show(new notification_1.Notification('error', 'Une erreur est survenue, veuillez réessayer'));
            }
            _this.isLoading = false;
        });
    };
    /**
     * Save edited profile info
     * @param key
     * @param value
     */
    ProfilePreviewComponent.prototype.saveProfileInfo = function (key, value) {
        var _this = this;
        this.userService.updateInfo(key, value, this.user.id).subscribe(function (res) {
            _this.editingItems[key] = false;
            if (key == 'new_email') {
                _this.notificationService.show(new notification_1.Notification('success', 'Un mail vient de vous être envoyé pour confirmer votre nouvelle adresse email'));
            }
            else {
                _this.notificationService.show(new notification_1.Notification('success', 'Vos modifications ont bien été enregistrées'));
            }
        });
    };
    /**
     * Disable currently logged user account
     */
    ProfilePreviewComponent.prototype.disableAccount = function () {
        var _this = this;
        this.userService.disableAccount().subscribe(function (res) {
            _this.userService.signOut().subscribe(function (res) {
                _this.router.navigate(['/']);
                _this.notificationService.show(new notification_1.Notification('success', 'Votre compte a bien été désactivé, vous allez recevoir un mail de confirmation'));
            });
        });
    };
    /**
     * Shows user data to a recruiter and subtracts
     * a daily contact from his plan
     */
    ProfilePreviewComponent.prototype.showUserInfos = function () {
        var _this = this;
        this.userService.makeCandidateAccessible(this.user.id).subscribe(function (res) {
            var response = res['_body'];
            /**
             * Check if user has some daily contacts credits left
             */
            if (response == "true") {
                _this.userInfosAccessible = true;
            }
        });
    };
    /**
     * Save new password
     */
    ProfilePreviewComponent.prototype.saveNewPassword = function () {
        var _this = this;
        this.isSavingModal = true;
        this.userService.changePassword(this.oldPassword, this.newPassword, this.user.id).subscribe(function (res) {
            _this.isSavingModal = false;
            _this.notificationService.show(new notification_1.Notification('success', 'Votre mot de passe a bien été modifié'));
            _this.hideChangePasswordModal();
        });
    };
    ProfilePreviewComponent.prototype.addNewSpokenLanguage = function () {
        this.userLanguages.push({ 'id': 0, 'language_level_id': 0 });
    };
    ProfilePreviewComponent.prototype.saveSpokenLanguages = function () {
        var _this = this;
        this.isSavingLanguages = true;
        var langDataIsCorrect = true;
        /**
         * Check if user has selected a level for each language
         * and a language for each level
         */
        for (var i = 0; i < this.userLanguages.length; i++) {
            var langData = this.userLanguages[i];
            if (langData.language_id == 0 || langData.language_level_id == 0) {
                langDataIsCorrect = false;
            }
        }
        if (langDataIsCorrect) {
            this.userService.saveSpokenLanguages(this.userLanguages, this.user.id).subscribe(function (res) {
                _this.isSavingLanguages = false;
                _this.notificationService.show(new notification_1.Notification('success', 'Vos informations ont été enregistrées'));
            });
        }
        else {
            this.isSavingLanguages = false;
            this.notificationService.show(new notification_1.Notification('error', 'Veuillez compléter tous les champs'));
        }
    };
    ProfilePreviewComponent.prototype.removeSpokenLanguage = function (spokenLanguageId) {
        this.userLanguages.splice(spokenLanguageId, 1);
    };
    ProfilePreviewComponent.prototype.startEditingDescription = function () {
        this.editingItems['description'] = true;
        setTimeout(function () {
            document.getElementById('candidate-description').focus();
        }, 100);
    };
    /**
     * Event fired on page scroll to adapt visual elements
     * @param event
     */
    ProfilePreviewComponent.prototype.onPageScroll = function (event) {
        this.scrollTop = event.target['scrollingElement']['scrollTop'];
    };
    __decorate([
        core_1.ViewChild('cropper', undefined)
    ], ProfilePreviewComponent.prototype, "cropper");
    __decorate([
        core_1.ViewChild('profilePictureModal')
    ], ProfilePreviewComponent.prototype, "profilePictureModal");
    ProfilePreviewComponent = __decorate([
        core_1.Component({
            selector: 'profile-preview',
            templateUrl: '../../../templates/profile-preview.component.html'
        })
    ], ProfilePreviewComponent);
    return ProfilePreviewComponent;
}());
exports.ProfilePreviewComponent = ProfilePreviewComponent;
