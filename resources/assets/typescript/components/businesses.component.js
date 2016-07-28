"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// Services
var user_service_1 = require('./../services/user.service');
var notification_service_1 = require('./../services/notification.service');
// Models
var notification_1 = require('./../models/notification');
var BusinessesComponent = (function () {
    function BusinessesComponent(userService, notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.items = [];
        this.checkedItemsList = [];
        var __this = this;
        this.userService.getBusinesses().subscribe(function (res) {
            __this.items = res.json();
        });
    }
    BusinessesComponent.prototype.toggleAllItems = function () {
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
    BusinessesComponent.prototype.saveCheckedItem = function (itemId) {
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
    BusinessesComponent.prototype.deleteSelectedItems = function () {
        var _this = this;
        var __this = this;
        var parsedListItemId = this.checkedItemsList.join(',');
        this.userService.deleteBusinesses(parsedListItemId).subscribe(function (res) {
            __this.userService.getBusinesses().subscribe(function (res) {
                __this.items = res.json();
                __this.notificationService.show(new notification_1.Notification('success', 'Ces établissements ont bien été supprimées'));
                _this.checkedItemsList = [];
                _this.allItemsChecked = false;
            });
        });
    };
    BusinessesComponent = __decorate([
        core_1.Component({
            selector: 'businesses',
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.RouterLink],
            templateUrl: '../templates/businesses.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
    ], BusinessesComponent);
    return BusinessesComponent;
}());
exports.BusinessesComponent = BusinessesComponent;
//# sourceMappingURL=businesses.component.js.map