"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('../../models/notification');
var CandidateDashboardComponent = (function () {
    function CandidateDashboardComponent(userService, ref, notificationService, referenceService) {
        var _this = this;
        this.userService = userService;
        this.ref = ref;
        this.notificationService = notificationService;
        this.referenceService = referenceService;
        this.user = {};
        this.profilePercentage = 0;
        this.lookingForJobNamingList = [{ 'id': 0, 'place': {} },
            { 'id': 0, 'place': {} },
            { 'id': 0, 'place': {} }];
        this.jobNamingGroups = [];
        this.candidateStatuses = [];
        this.isSavingStatus = false;
        this.isSavingJobSeekingData = false;
        this.jobSeekingDataCorrect = true;
        this.alertFrequencies = [];
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getUserInfos(this.user.id).subscribe(function (res) {
            console.log('user infos', res);
            _this.user = res.json();
            localStorage.setItem('user', JSON.parse(_this.user));
        });
        this.userService.getProfilePercentage(this.user.id).subscribe(function (res) {
            console.log('profile percentage', res);
            _this.profilePercentage = res.json();
        });
        this.referenceService.getAllJobNamingGroups().subscribe(function (res) {
            console.log('job naming groups', res);
            _this.jobNamingGroups = res.json();
        });
        this.referenceService.getAllCandidateStatuses().subscribe(function (res) {
            console.log('candidate statuses', res);
            _this.candidateStatuses = res.json();
        });
        this.referenceService.getAllAlertFrequencies().subscribe(function (res) {
            console.log('alert frequencies', res);
            _this.alertFrequencies = res.json();
        });
        /**
         * Parse lookingForJobNamingList
         */
        if (this.user['looking_for_job_namings']) {
            var _loop_1 = function(i) {
                if (this_1.lookingForJobNamingList[i]) {
                    this_1.lookingForJobNamingList[i]['id'] = this_1.user['looking_for_job_namings'][i]['id'];
                    /**
                     * PARSE GOOGLE MAPS DATA
                     * @type {google.maps.Geocoder}
                     */
                    if (this_1.user['looking_for_job_naming_places']) {
                        this_1.userService.getUserInfos(this_1.user.id).subscribe(function (res) {
                            _this.user = res.json();
                            console.log('getting user infos');
                            var geocoder = new google.maps.Geocoder;
                            geocoder.geocode({ 'placeId': _this.user['looking_for_job_naming_places'][i]['googlePlaceId'] }, function (results) {
                                console.log('getting results', results);
                                if (results != null) {
                                    var place = results[0];
                                    console.log('getting place', place);
                                    __this.lookingForJobNamingList[i]['place'] = place;
                                    __this.ref.detectChanges();
                                }
                            });
                        });
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.user['looking_for_job_namings'].length; i++) {
                _loop_1(i);
            }
        }
    }
    CandidateDashboardComponent.prototype.parseAdress = function (place, jobNamingIndex) {
        this.lookingForJobNamingList[jobNamingIndex]['place'] = place;
        this.ref.detectChanges();
    };
    CandidateDashboardComponent.prototype.saveUserStatus = function () {
        var _this = this;
        this.isSavingStatus = true;
        this.userService.updateInfo('user_status_id', this.user.user_status_id, this.user.id).subscribe(function (res) {
            _this.isSavingStatus = false;
            _this.notificationService.show(new notification_1.Notification('success', 'Votre status a bien été modifié'));
        });
    };
    CandidateDashboardComponent.prototype.saveJobSeekingInfos = function () {
        var _this = this;
        this.isSavingJobSeekingData = true;
        for (var i = 0; i < this.lookingForJobNamingList.length; i++) {
            if (!this.lookingForJobNamingList[i]['place']) {
                this.jobSeekingDataCorrect = false;
            }
        }
        if (this.jobSeekingDataCorrect) {
            this.userService.saveJobSeekingData(this.lookingForJobNamingList, this.user.alert_frequency_id, this.user.id).subscribe(function (res) {
                _this.isSavingJobSeekingData = false;
                _this.userService.getUserInfos().subscribe(function (res) {
                    _this.user = res.json();
                });
                _this.notificationService.show(new notification_1.Notification('success', 'Vos informations ont été enregistrées'));
            });
        }
        else {
            this.notificationService.show(new notification_1.Notification('success', 'Veuillez remplir tous les champs'));
        }
    };
    CandidateDashboardComponent = __decorate([
        core_1.Component({
            selector: 'candidate-dashboard',
            templateUrl: '../../../templates/candidate-dashboard.component.html'
        })
    ], CandidateDashboardComponent);
    return CandidateDashboardComponent;
}());
exports.CandidateDashboardComponent = CandidateDashboardComponent;
