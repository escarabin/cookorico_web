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
var EducationComponent = (function () {
    function EducationComponent(userService, notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.items = [];
        this.checkedItemsList = [];
        this.user = {};
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getEducation(this.user.id).subscribe(function (res) {
            __this.items = res.json();
        });
    }
    EducationComponent.prototype.toggleAllItems = function () {
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
    EducationComponent.prototype.saveCheckedItem = function (itemId) {
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
    EducationComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        var __this = this;
        this.userService.deleteEducation([itemId]).subscribe(function (res) {
            __this.userService.getEducation(__this.user.id).subscribe(function (res) {
                __this.items = res.json();
                __this.notificationService.show(new notification_1.Notification('success', 'Cette formation a bien été supprimée'));
                _this.checkedItemsList = [];
                _this.allItemsChecked = false;
            });
        });
    };
    EducationComponent = __decorate([
        core_1.Component({
            selector: 'education',
            templateUrl: '../../../templates/education.component.html'
        })
    ], EducationComponent);
    return EducationComponent;
}());
exports.EducationComponent = EducationComponent;
