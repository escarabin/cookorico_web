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
var JobComponent = (function () {
    function JobComponent(route, notificationService, router, metaService, jobService) {
        var _this = this;
        this.route = route;
        this.notificationService = notificationService;
        this.router = router;
        this.metaService = metaService;
        this.jobService = jobService;
        this.user = {};
        /**
         * Retrieve user Object
         * @type {any}
         */
        this.user = JSON.parse(localStorage.getItem('user'));
        /**
         * Get jobId from route params
         */
        route.params.subscribe(function (params) {
            if (params) {
                _this.jobId = params["jobId"];
            }
        });
        /**
         * GET job data
         */
        jobService.getJob(this.jobId).subscribe(function (res) {
            _this.job = res.json();
            _this.metaService.setTitle(_this.job.title + ' - ' + _this.job.business.title);
            if (_this.job.description) {
                _this.metaService.setTag('description', _this.job.description.replace(/<\/?[^>]+(>|$)/g, ""));
            }
        });
    }
    /**
     * Deactivate specific job post
     */
    JobComponent.prototype.deactivateJobPost = function () {
        var _this = this;
        this.jobService.deactivateJobPost(this.jobId).subscribe(function (res) {
            _this.notificationService.show(new notification_1.Notification('success', 'Votre offre a bien été désactivée'));
            _this.router.navigate(['/profil/annonces']);
        });
    };
    JobComponent.prototype.signIn = function () {
        this.hideSignInOrUpModal();
        document.getElementById('main-login-btn').click();
    };
    JobComponent.prototype.signUp = function () {
        this.hideSignInOrUpModal();
        this.router.navigate(['/inscription-candidat']);
    };
    /**
     * ng2-bootstrap issue workaround (11/10/16) v1.1.6
     * See https://github.com/valor-software/ng2-bootstrap/issues/986
     */
    JobComponent.prototype.openSignInOrUpModal = function () {
        this.showModalBackdrop();
        document.getElementById("sign-in-or-up-modal").style.display = "block";
    };
    JobComponent.prototype.hideSignInOrUpModal = function () {
        this.hideModalBackdrop();
        document.getElementById("sign-in-or-up-modal").style.display = "none";
    };
    JobComponent.prototype.showModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    };
    JobComponent.prototype.hideModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    };
    JobComponent = __decorate([
        core_1.Component({
            inputs: ['jobId'],
            selector: 'job',
            templateUrl: '../../../templates/job.component.html'
        })
    ], JobComponent);
    return JobComponent;
}());
exports.JobComponent = JobComponent;
