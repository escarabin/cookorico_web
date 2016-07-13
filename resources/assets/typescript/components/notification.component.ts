import { Component } from '@angular/core';

import { NotificationsService } from './../services/notification.service';
import { Notification } from './../models/notification';

@Component({
    selector: 'notifications',
    templateUrl: '../templates/notification.component.html'
})

export class NotificationsComponent {
    private _notes: Notification[];

    constructor(private _notifications: NotificationsService) {
        this._notes = new Array<Notification>();

        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 3000);
        });
    }

    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
}