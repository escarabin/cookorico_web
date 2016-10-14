import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';

@Component({
    selector: 'create-testimonial',
    providers: [UserService],
    templateUrl: '../templates/create-testimonial.component.html'
})

export class CreateTestimonialComponent {
    testimonial: any = {employee: {}};
    isLoading: boolean = false;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {
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
        this.isLoading = true;

        this.userService.saveTestimonialReply(this.testimonial.id, this.testimonial.answer_content)
            .subscribe((res: Response) => {
                this.isLoading = false;
                this.router.navigate(['/profil/demandes_de_recommandation']);
        });
    }
}