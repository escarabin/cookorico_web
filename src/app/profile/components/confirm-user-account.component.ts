import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'confirm-user-account',
    template: '<br /><br /><br /><br />Votre compte vient d\'être activé !'
})

export class ConfirmUserAccountComponent {
    user: any = {};
    constructor(router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));

        if (this.user.is_active) {
            router.navigate(['/profil']);
        }
        else {
            this.user.is_active = true;
            localStorage.setItem('user', JSON.stringify(this.user));
            location.reload();
        }
    }
}