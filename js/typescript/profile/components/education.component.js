System.register(['@angular/core', '../../services/user.service', '../../services/notification.service', '../../models/notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, notification_service_1, notification_1;
    var EducationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            EducationComponent = (function () {
                function EducationComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getEducation().subscribe(function (res) {
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
                EducationComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteEducation(parsedListItemId).subscribe(function (res) {
                        __this.userService.getEducation().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces formations ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                EducationComponent = __decorate([
                    core_1.Component({
                        selector: 'education',
                        providers: [user_service_1.UserService],
                        templateUrl: '../templates/education.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
        }
    }
});
