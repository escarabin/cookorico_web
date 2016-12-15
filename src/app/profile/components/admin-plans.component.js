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
var AdminPlansComponent = (function () {
    function AdminPlansComponent(userService, planService, router, notificationService) {
        var _this = this;
        this.userService = userService;
        this.planService = planService;
        this.router = router;
        this.notificationService = notificationService;
        this.plans = [];
        this.planCredits = 0;
        this.planContacts = 0;
        this.planSpaces = 0;
        this.planPullUpPost = 0;
        this.planIsUnlimited = 0;
        this.planPricingId = 0;
        this.retrievePlans();
        this.planService.getAllPricingPlans().subscribe(function (res) {
            _this.pricingPlans = res.json();
        });
    }
    AdminPlansComponent.prototype.search = function () {
        var _this = this;
        if (!this.searchId && !this.searchEmail && !this.searchName) {
            this.retrievePlans();
        }
        else {
            this.planService.search(this.searchId, this.searchName, this.searchEmail).subscribe(function (res) {
                _this.plans = res.json();
            });
        }
    };
    AdminPlansComponent.prototype.retrievePlans = function () {
        var _this = this;
        this.planService.getAll().subscribe(function (res) {
            _this.plans = res.json();
            console.log('plans are ', _this.plans);
        });
    };
    AdminPlansComponent.prototype.createNewPlan = function () {
        var _this = this;
        this.planService.create(this.planEmail, this.planCredits, this.planContacts, this.planSpaces, this.planPullUpPost, this.planIsUnlimited, this.planEndsAt, this.planPricingId).subscribe(function (res) {
            _this.retrievePlans();
            _this.notificationService.show(new notification_1.Notification('success', 'Cet abonnement a bien été crée'));
        });
    };
    AdminPlansComponent.prototype.deletePlan = function (planId) {
        var _this = this;
        this.planService.deletePlan(planId).subscribe(function (res) {
            _this.retrievePlans();
            _this.notificationService.show(new notification_1.Notification('success', 'Cet abonnement a bien été supprimé'));
        });
    };
    AdminPlansComponent.prototype.updatePlan = function () {
        var __this = this;
        this.planService.update(this.currentPlan.id, this.currentPlan.credits, this.currentPlan.daily_contacts, this.currentPlan.spaces, this.currentPlan.pull_up_credits, this.currentPlan.duration, this.currentPlan.is_unlimited, this.currentPlan.ends_at, this.currentPlan.pricing_plan_id).subscribe(function (res) {
            __this.retrievePlans();
            __this.notificationService.show(new notification_1.Notification('success', 'Cet abonnement a bien été modifié'));
            __this.hidePlanModal();
        });
    };
    AdminPlansComponent.prototype.openModalWithPlan = function (plan) {
        this.currentPlan = plan;
        this.showModalBackdrop();
        document.getElementById("plan-settings-modal").style.display = "block";
    };
    AdminPlansComponent.prototype.hidePlanModal = function () {
        this.hideModalBackdrop();
        document.getElementById("plan-settings-modal").style.display = "none";
    };
    AdminPlansComponent.prototype.showModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "block";
    };
    AdminPlansComponent.prototype.hideModalBackdrop = function () {
        document.getElementById("modal-backdrop-replacement").style.display = "none";
    };
    AdminPlansComponent.prototype.loginUsingId = function (userId) {
        var _this = this;
        this.userService.loginUsingId(userId).subscribe(function (user) {
            localStorage.setItem('user', JSON.stringify(user.json()));
            _this.router.navigate(['/accueil']);
        });
    };
    AdminPlansComponent = __decorate([
        core_1.Component({
            selector: 'admin-plans',
            templateUrl: '../../../templates/admin-plans.component.html'
        })
    ], AdminPlansComponent);
    return AdminPlansComponent;
}());
exports.AdminPlansComponent = AdminPlansComponent;
