"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TestimonialRequestsComponent = (function () {
    function TestimonialRequestsComponent(userService) {
        this.userService = userService;
        this.testimonials = [];
        this.user = {};
        this.accepted_testimonial_requests = [];
        this.rejected_testimonial_requests = [];
        var __this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userService.getAskedTestimonials(this.user.id).subscribe(function (res) {
            var allTestimonials = res.json();
            for (var i = 0; i < allTestimonials.length; i++) {
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
    /**
     * Accept specific testimonial request
     * @param testimonialId
     */
    TestimonialRequestsComponent.prototype.acceptRequest = function (testimonialId) {
        var __this = this;
        this.userService.saveTestimonialReply(testimonialId, '').subscribe(function (res) {
            for (var i = 0; i < __this.testimonials.length; i++) {
                if (__this.testimonials[i]['id'] == testimonialId) {
                    __this.accepted_testimonial_requests.push(__this.testimonials[i]);
                    __this.testimonials.splice(i, 1);
                }
            }
        });
    };
    /**
     * Reject specific testimonial request
     * @param testimonialId
     */
    TestimonialRequestsComponent.prototype.rejectRequest = function (testimonialId) {
        var __this = this;
        this.userService.rejectTestimonialRequest(testimonialId).subscribe(function (res) {
            for (var i = 0; i < __this.testimonials.length; i++) {
                if (__this.testimonials[i]['id'] == testimonialId) {
                    __this.rejected_testimonial_requests.push(__this.testimonials[i]);
                    __this.testimonials.splice(i, 1);
                }
            }
        });
    };
    TestimonialRequestsComponent = __decorate([
        core_1.Component({
            selector: 'testimonial-requests',
            templateUrl: '../../../templates/testimonial-requests.component.html'
        })
    ], TestimonialRequestsComponent);
    return TestimonialRequestsComponent;
}());
exports.TestimonialRequestsComponent = TestimonialRequestsComponent;
