import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated'
import { Response } from '@angular/http';

// Services
import { UserService } from './../services/user.service';

@Component({
    providers: [UserService],
    directives: [RouterLink],
    selector: 'profile-preview',
    templateUrl: '../templates/profile-preview.component.html',
})

export class ProfilePreviewComponent {
    user: any = [];
    experiences: any = [];
    education: any = [];
    testimonials: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        console.log('user is ', this.user);

        this.userService.getExperiences().subscribe((res: Response) => {
            __this.experiences = res.json();
        });

        this.userService.getEducation().subscribe((res: Response) => {
            __this.education = res.json();
        });

        this.userService.getTestimonials().subscribe((res: Response) => {
            __this.testimonials = res.json();
        });
    }
}