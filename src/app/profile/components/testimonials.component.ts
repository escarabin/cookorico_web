import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'testimonials',
    templateUrl: '../../../templates/testimonials.component.html'
})

export class TestimonialsComponent {
    testimonials: any = [];
    user: any = {};

    constructor(private userService: UserService) {
        let __this = this;

        this.user = JSON.parse(localStorage.getItem('user'));

        this.userService.getTestimonials(this.user.id).subscribe((res: Response) => {
            __this.testimonials = res.json();
        });
    }
}