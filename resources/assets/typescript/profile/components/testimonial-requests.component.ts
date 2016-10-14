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
    accepted_testimonial_requests: any = [];
    rejected_testimonial_requests: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getAskedTestimonials().subscribe((res: Response) => {
            let allTestimonials = res.json();

            for (let i = 0; i < allTestimonials.length; i++) {
                if (allTestimonials[i]['is_accepted']) {
                    __this.accepted_testimonial_requests.push(allTestimonials[i]);
                }
                else if (allTestimonials[i]['is_rejected']) {
                    __this.rejected_testimonial_requests.push(allTestimonials[i]);
                }
                else {
                    __this.testimonials.push(allTestimonials[i]);
                }
            }
        });
    }
}