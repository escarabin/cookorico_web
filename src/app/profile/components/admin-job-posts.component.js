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
var AdminJobPostsComponent = (function () {
    function AdminJobPostsComponent(userService, jobService, notificationService) {
        this.userService = userService;
        this.jobService = jobService;
        this.notificationService = notificationService;
        this.acceptedItems = [];
        this.itemsToReview = [];
        this.rejectedItems = [];
        this.expiredItems = [];
        this.checkedItemsList = [];
        this.jobPlacementsLeftNum = [];
        this.postStatusFilter = "0";
    }
    AdminJobPostsComponent.prototype.ngAfterViewInit = function () {
        this.retrieveJobPosts();
    };
    AdminJobPostsComponent.prototype.retrieveJobPosts = function () {
        var _this = this;
        /**
         * Flush all existing data
         */
        this.acceptedItems = [];
        this.rejectedItems = [];
        this.itemsToReview = [];
        this.expiredItems = [];
        this.jobService.getAllJobs(true).subscribe(function (res) {
            for (var i = 0; i < res.json().length; i++) {
                if (res.json()[i]['is_accepted']) {
                    _this.acceptedItems.push(res.json()[i]);
                }
                else if (res.json()[i]['is_rejected']) {
                    _this.rejectedItems.push(res.json()[i]);
                }
                if (res.json()[i]['is_active'] && !res.json()[i]['is_accepted'] && !res.json()[i]['is_rejected']) {
                    _this.itemsToReview.push(res.json()[i]);
                }
            }
        });
    };
    AdminJobPostsComponent.prototype.acceptJobPost = function (jobPostId) {
        var _this = this;
        var __this = this;
        this.userService.acceptJobPost(jobPostId).subscribe(function (res) {
            __this.notificationService.show(new notification_1.Notification('success', 'Cette annonce a bien été accepté et est en ligne'));
            _this.retrieveJobPosts();
        });
    };
    AdminJobPostsComponent.prototype.rejectJobPost = function (jobPostId) {
        var _this = this;
        var __this = this;
        this.userService.rejectJobPost(jobPostId).subscribe(function (res) {
            __this.notificationService.show(new notification_1.Notification('warning', 'Cette annonce a bien été refusée et ne sera pas en ligne'));
            _this.retrieveJobPosts();
        });
    };
    AdminJobPostsComponent = __decorate([
        core_1.Component({
            selector: 'admin-job-posts',
            templateUrl: '../../../templates/admin-job-posts.component.html'
        })
    ], AdminJobPostsComponent);
    return AdminJobPostsComponent;
}());
exports.AdminJobPostsComponent = AdminJobPostsComponent;
