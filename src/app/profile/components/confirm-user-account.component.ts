import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';

@Component({
    selector: 'confirm-user-account',
    template: '<br /><br /><br /><br />Votre compte vient d\'être activé !'
})

export class ConfirmUserAccountComponent {
    user: any = {};
    constructor(router: Router,
                angulartics2: Angulartics2) {
        this.user = JSON.parse(localStorage.getItem('user'));

        if (this.user.user_type_id == 2) {
            console.log('inscription recruteur');
            angulartics2.eventTrack.next({ action: 'inscription-recruteur'});
        }
        else {
            console.log('inscription candidat');
            angulartics2.eventTrack.next({ action: 'inscription-candidat'});
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
}