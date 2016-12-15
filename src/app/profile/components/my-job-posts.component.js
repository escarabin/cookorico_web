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
var MyJobPostsComponent = (function () {
    function MyJobPostsComponent(userService, jobPostService, sellsyService, router, notificationService) {
        this.userService = userService;
        this.jobPostService = jobPostService;
        this.sellsyService = sellsyService;
        this.router = router;
        this.notificationService = notificationService;
        this.items = [];
        this.postStatus = null;
        this.checkedItemsList = [];
        this.jobPlacementsLeftNum = [];
        this.postStatus = 'is_accepted';
        this.userCanPullUpJobPost = false;
        this.userCanPostJob = false;
        this.user = {};
        this.businessId = 0;
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getBusinesses(this.user.id).subscribe(function (res) {
            __this.userBusinesses = res.json();
        });
        this.retrieveJobPosts();
    }
    MyJobPostsComponent.prototype.retrieveJobPosts = function () {
        var _this = this;
        var __this = this;
        this.userService.getJobPosts(this.user.id).subscribe(function (res) {
            __this.items = res.json();
            /**
             * Get how many expired job posts are in DB
             * (created_at more than 30 days ago)
             */
            var activeItems = [];
            var todayDate = new Date();
            for (var i = 0; i < __this.items.length; i++) {
                var job = __this.items[i];
                var createDate = new Date(job['created_at']);
                var dayDiff = Math.round((todayDate - createDate) / (1000 * 60 * 60 * 24));
                __this.items[i]['dayDiff'] = dayDiff;
                if (dayDiff < 30) {
                    activeItems.push(job);
                }
            }
            _this.userService.getPlans(_this.user.id).subscribe(function (res) {
                var plans = res.json();
                /**
                 * Loop through plans to see if user is able to pull up job post
                 */
                var numberOfSpaces = 0;
                for (var i = 0; i < plans.length; i++) {
                    var plan = plans[i];
                    if (plan.spaces > numberOfSpaces) {
                        numberOfSpaces = plan.spaces;
                    }
                    if (plan.pull_up_job_credits < 0 || plan.pull_up_job_credits > 0) {
                        __this.userCanPullUpJobPost = true;
                    }
                    if (plan.credits > 0 || plan.credits == -1) {
                        __this.userCanPostJob = true;
                    }
                }
                /**
                 * Defined how many job posts the user is now able to post
                 */
                for (var i = 0; i < (numberOfSpaces - activeItems.length); i++) {
                    _this.jobPlacementsLeftNum.push(1);
                }
                /**
                 * TODO remove it
                 */
                if (_this.jobPlacementsLeftNum == 0) {
                    _this.jobPlacementsLeftNum.push(1);
                    _this.jobPlacementsLeftNum.push(1);
                    _this.jobPlacementsLeftNum.push(1);
                    _this.jobPlacementsLeftNum.push(1);
                    _this.jobPlacementsLeftNum.push(1);
                }
            });
        });
    };
    MyJobPostsComponent.prototype.toggleAllItems = function () {
        this.allItemsChecked = !this.allItemsChecked;
        if (this.allItemsChecked) {
            var checkedItemsListId = [];
            for (var i = 0; i < this.items.length; i++) {
                checkedItemsListId.push(this.items[i].id);
            }
            this.checkedItemsList = checkedItemsListId;
        }
        else {
            this.checkedItemsList = [];
        }
    };
    MyJobPostsComponent.prototype.saveCheckedItem = function (itemId) {
        var indexOfItemId = this.checkedItemsList.indexOf(itemId);
        if (indexOfItemId == -1) {
            this.checkedItemsList.push(itemId);
        }
        else {
            this.checkedItemsList.splice(indexOfItemId, 1);
        }
        if (this.checkedItemsList.length != this.items.length) {
            this.allItemsChecked = false;
        }
        else {
            this.allItemsChecked = true;
        }
    };
    MyJobPostsComponent.prototype.pullUpJobPost = function (jobPostId) {
        var _this = this;
        this.jobPostService.pullUpJobPost(jobPostId).subscribe(function (post) {
            _this.retrieveJobPosts();
            _this.notificationService.show(new notification_1.Notification('success', 'Votre annonce a bien été remontée en haut de liste'));
        });
    };
    MyJobPostsComponent.prototype.deactivateJobPost = function (jobPostId) {
        var _this = this;
        this.jobPostService.deactivate(jobPostId).subscribe(function (post) {
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i]['id'] == jobPostId) {
                    _this.items[i]['is_active'] = false;
                }
            }
            _this.notificationService.show(new notification_1.Notification('success', 'Votre annonce a bien été désactivée'));
        });
    };
    MyJobPostsComponent.prototype.activateJobPost = function (jobPostId) {
        var _this = this;
        this.jobPostService.activate(jobPostId).subscribe(function (post) {
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i]['id'] == jobPostId) {
                    _this.items[i]['is_active'] = true;
                }
            }
            _this.notificationService.show(new notification_1.Notification('success', 'Votre annonce a bien été ré-activée'));
        });
    };
    MyJobPostsComponent.prototype.createJobPost = function () {
        if (this.userCanPostJob || this.user.user_type_id == 4 || this.user.user_type_id == 5) {
            this.router.navigate(['/profil/annonce/creer']);
        }
        else {
            this.router.navigate(['/profil/mon_abonnement']);
            this.notificationService.show(new notification_1.Notification('error', 'Veuillez souscrire à un pack pour poster une annonce'));
        }
    };
    MyJobPostsComponent.prototype.openContactBox = function () {
        this.sellsyService.openContactBox();
    };
    MyJobPostsComponent.prototype.getJobPostsCount = function (statusTitle) {
        var count = 0;
        var todayDate = new Date();
        for (var i = 0; i < this.items.length; i++) {
            if (this.businessId == 0 || this.businessId == this.items[i]['business_id']) {
                if (statusTitle == "is_accepted") {
                    if (this.items[i]['dayDiff'] < 30 && this.items[i]['is_accepted'] && this.items[i]['is_active']) {
                        count += 1;
                    }
                }
                else if (statusTitle == "is_reviewing") {
                    if (!this.items[i]['is_accepted'] && !this.items[i]['is_rejected'] && this.items[i]['dayDiff'] < 30) {
                        count += 1;
                    }
                }
                else if (statusTitle == "is_expired") {
                    if (this.items[i]['dayDiff'] > 30) {
                        count += 1;
                    }
                }
                else if (statusTitle == "is_inactive") {
                    if (this.items[i]['is_accepted'] && this.items[i]['dayDiff'] < 30 && !this.items[i]['is_active']) {
                        count += 1;
                    }
                }
                else if (this.items[i][statusTitle]) {
                    count += 1;
                }
            }
        }
        return count;
    };
    MyJobPostsComponent = __decorate([
        core_1.Component({
            selector: 'my-job-posts',
            templateUrl: '../../../templates/my-job-posts.component.html'
        })
    ], MyJobPostsComponent);
    return MyJobPostsComponent;
}());
exports.MyJobPostsComponent = MyJobPostsComponent;
