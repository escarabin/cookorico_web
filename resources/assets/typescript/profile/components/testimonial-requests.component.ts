import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'testimonial-requests',
    providers: [UserService],
    templateUrl: '../templates/testimonial-requests.component.html'
})

export class TestimonialRequestsComponent {
    testimonials: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getAskedTestimonials().subscribe((res: Response) => {
            __this.testimonials = res.json();
        });
    }
}