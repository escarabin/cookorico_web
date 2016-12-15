"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CreateTestimonialComponent = (function () {
    function CreateTestimonialComponent(userService, route, router) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.testimonial = { employee: {} };
        this.isLoading = false;
        var __this = this;
        route.params.subscribe(function (params) {
            __this.testimonial.id = params["testimonialId"];
            if (params) {
                _this.userService.getTestimonial(_this.testimonial.id).subscribe(function (res) {
                    __this.testimonial = res.json();
                });
            }
        });
    }
    CreateTestimonialComponent.prototype.submitTestimonial = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.saveTestimonialReply(this.testimonial.id, this.testimonial.answer_content)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.router.navigate(['/profil/demandes_de_recommandation']);
        });
    };
    CreateTestimonialComponent = __decorate([
        core_1.Component({
            selector: 'create-testimonial',
            templateUrl: '../../../templates/create-testimonial.component.html'
        })
    ], CreateTestimonialComponent);
    return CreateTestimonialComponent;
}());
exports.CreateTestimonialComponent = CreateTestimonialComponent;
