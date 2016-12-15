"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ConfirmUserAccountComponent = (function () {
    function ConfirmUserAccountComponent(router, angulartics2) {
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.user_type_id == 2) {
            console.log('inscription recruteur');
            angulartics2.eventTrack.next({ action: 'inscription-recruteur' });
        }
        else {
            console.log('inscription candidat');
            angulartics2.eventTrack.next({ action: 'inscription-candidat' });
        }
        if (this.user.is_active) {
            router.navigate(['/profil']);
        }
        else {
            this.user.is_active = true;
            localStorage.setItem('user', JSON.stringify(this.user));
            location.reload();
        }
    }
    ConfirmUserAccountComponent = __decorate([
        core_1.Component({
            selector: 'confirm-user-account',
            template: '<br /><br /><br /><br />Votre compte vient d\'être activé !'
        })
    ], ConfirmUserAccountComponent);
    return ConfirmUserAccountComponent;
}());
exports.ConfirmUserAccountComponent = ConfirmUserAccountComponent;
