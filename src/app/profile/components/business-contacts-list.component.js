"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('./../../models/notification');
var BusinessContactsListComponent = (function () {
    function BusinessContactsListComponent(referenceService, notificationService, businessService, route, userService) {
        var _this = this;
        this.referenceService = referenceService;
        this.notificationService = notificationService;
        this.businessService = businessService;
        this.route = route;
        this.userService = userService;
        this.civilities = [];
        this.user = { civility_id: 0 };
        this.loggedUser = {};
        this.contacts = [];
        this.business = {};
        this.businessUsersChanged = new core_1.EventEmitter();
        var __this = this;
        this.loggedUser = JSON.parse(localStorage.getItem('user'));
        this.referenceService.getAllCivilities().subscribe(function (res) {
            _this.civilities = res.json();
        });
        route.params.subscribe(function (params) {
            if (params) {
                __this.business.id = params["businessId"];
                if (__this.business.id) {
                    __this.userService.getBusiness(__this.business.id).subscribe(function (res) {
                        __this.business = res.json();
                    });
                }
            }
        });
    }
    /**
     * Detach specific contact from current business
     * @param userId
     */
    BusinessContactsListComponent.prototype.detachBusinessContact = function (userId) {
        var _this = this;
        this.businessService.detachUser(userId, this.business.id).subscribe(function (res) {
            for (var i = 0; i < _this.business.users.length; i++) {
                var user = _this.business.users[i];
                if (user.id == userId) {
                    _this.business.users.splice(i, 1);
                }
            }
            _this.businessUsersChanged.emit(_this.business.users);
            _this.notificationService.show(new notification_1.Notification('success', 'Ce contact ne fait plus partie de cet établissement'));
        });
    };
    /**
     * Attach specific contact to current business
     */
    BusinessContactsListComponent.prototype.createBusinessContact = function () {
        var _this = this;
        this.userService.createUser(this.user.email, this.user.password, 2, this.user.lastName, this.user.firstName, this.user.civility_id).subscribe(function (res) {
            if (res['_body'].length > 100) {
                /**
                 * User account successfully created
                 */
                var createdUser = res.json();
                _this.business.users.push(createdUser);
                _this.businessUsersChanged.emit(_this.business.users);
                _this.businessService.attachUser(createdUser.id, _this.business.id).subscribe(function (res) {
                    _this.notificationService.show(new notification_1.Notification('success', 'Votre contact a bien été crée'));
                });
                _this.error = null;
                _this.user = { civility_id: 0 };
            }
            else {
                _this.error = res['_body'];
            }
        });
    };
    __decorate([
        core_1.Output()
    ], BusinessContactsListComponent.prototype, "businessUsersChanged");
    BusinessContactsListComponent = __decorate([
        core_1.Component({
            selector: 'business-contacts-list',
            templateUrl: '../../../templates/business-contacts-list.component.html'
        })
    ], BusinessContactsListComponent);
    return BusinessContactsListComponent;
}());
exports.BusinessContactsListComponent = BusinessContactsListComponent;
