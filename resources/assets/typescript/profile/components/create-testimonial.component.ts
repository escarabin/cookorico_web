import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'create-testimonial',
    providers: [UserService],
    templateUrl: '../templates/create-testimonial.component.html'
})

export class CreteTestimonialComponent {
    testimonial: any = {employee: {}};

    constructor(private userService: UserService,
                private route: ActivatedRoute) {
        let __this = this;

        route.params.subscribe(params => {
            __this.testimonial.id = params["testimonialId"];

            if (params) {
                this.userService.getTestimonial(this.testimonial.id).subscribe((res: Response) => {
                    __this.testimonial = res.json();
                });
            }
        });
    }

    submitTestimonial() {
        let __this = this;

        this.userService.saveTestimonialReply(this.testimonial.id, this.testimonial.answer_content)
            .subscribe((res: Response) => {
            console.log('this is', res);
        });
    }
}