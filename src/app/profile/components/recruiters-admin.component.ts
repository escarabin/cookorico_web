import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'recruiters-admin',
    templateUrl: '../../../templates/recruiters-admin.component.html'
})

export class RecruitersAdminComponent {
    recruiterUsers: any = [];
    searchEmail: string;

    constructor(private userService: UserService,
                private router: Router) {
        this.userService.getAllRecruiters().subscribe((res: Response) => {
            this.recruiterUsers = res.json();
        });
    }

    searchRecruiter() {
        this.userService.searchRecruiters(this.searchEmail).subscribe((res: Response) => {
            this.recruiterUsers = res.json();
        });
    }

    loginUsingId(userId: number) {
        this.userService.loginUsingId(userId).subscribe((user: Response) => {
            localStorage.setItem('user', JSON.stringify(user.json()));
            document.location.hash = '/';
        });
    }
}