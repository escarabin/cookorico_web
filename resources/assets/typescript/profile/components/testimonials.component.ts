import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'testimonials',
    providers: [UserService],
    templateUrl: '../templates/testimonials.component.html'
})

export class TestimonialsComponent {
    testimonials: any = [];

    constructor(private userService: UserService) {
        let __this = this;

        this.userService.getTestimonials().subscribe((res: Response) => {
            __this.testimonials = res.json();
        });
    }
}