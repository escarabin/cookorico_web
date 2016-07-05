import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'alerts',
    providers: [UserService],
    directives: [RouterLink],
    templateUrl: '../templates/alerts.component.html'
})

export class AlertsComponent {
    alerts: any;

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getAlerts().subscribe((res: Response) => {
            __this.alerts = res.json();
        });
    }
}