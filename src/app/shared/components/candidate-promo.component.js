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
var CandidatePromoComponent = (function () {
    function CandidatePromoComponent(userService, router, notificationService, businessService, referenceService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.notificationService = notificationService;
        this.businessService = businessService;
        this.referenceService = referenceService;
        this.userCivilityId = 1;
        this.civilities = [];
        this.businesses = [];
        this.isAlreadySignedUp = false;
        this.referenceService.getAllCivilities().subscribe(function (res) {
            _this.civilities = res.json();
        });
    }
    CandidatePromoComponent.prototype.signUp = function () {
        var _this = this;
        var __this = this;
        var userTypeId = 2;
        this.userService.createUser(this.email, this.password, userTypeId, this.userLastName, this.userFirstName, this.userCivilityId).subscribe(function (res) {
            if (res['_body'].length > 100) {
                /**
                 * User account successfully created
                 */
                __this.error = null;
                __this.notificationService.show(new notification_1.Notification('success', "Votre compte a bien été crée, plus qu'une étape avant de pouvoir l'utiliser !"));
                console.log(res['_body']);
                var newUser_1 = res.json();
                /**
                 * Navigate to business creation after confirming account
                 */
                _this.userService.confirmEmailAddress(newUser_1.id).subscribe(function (res) {
                    __this.userService.loginUsingId(newUser_1.id).subscribe(function (userInfos) {
                        localStorage.setItem('user', JSON.stringify(newUser_1));
                        if (newUser_1.user_type_id == 2) {
                            _this.router.navigate(['/profil/etablissement/creer']);
                        }
                    });
                });
            }
            else {
                /**
                 * Something not supposed to happen actually happened
                 * "Oh my..."
                 */
                __this.error = res['_body'];
                __this.notificationService.show(new notification_1.Notification('error', __this.error));
            }
        });
    };
    CandidatePromoComponent.prototype.signIn = function () {
        document.getElementById('main-login-btn').click();
    };
    CandidatePromoComponent = __decorate([
        core_1.Component({
            selector: 'candidate-promo',
            templateUrl: '../../../templates/candidate-promo.component.html'
        })
    ], CandidatePromoComponent);
    return CandidatePromoComponent;
}());
exports.CandidatePromoComponent = CandidatePromoComponent;
