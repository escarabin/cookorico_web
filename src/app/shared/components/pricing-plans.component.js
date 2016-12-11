"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Models
var notification_1 = require('./../../models/notification');
var PricingPlansComponent = (function () {
    function PricingPlansComponent(userService, sellsyService, planService, router, notificationService) {
        var _this = this;
        this.userService = userService;
        this.sellsyService = sellsyService;
        this.planService = planService;
        this.router = router;
        this.notificationService = notificationService;
        this.services = [];
        this.plans = [];
        this.isSimpleBusiness = true;
        this.isPricingTableDisplayed = false;
        this.onlyServices = false;
        this.user = {};
        var __this = this;
        router.events.subscribe(function (event) {
            if (event.url == "/profil/confirmation-paiement/false") {
                _this.notificationService.show(new notification_1.Notification('error', 'Erreur de paiement, merci de nous contacter à hello@cookorico.com ou au 02 97 21 59 23', 'Contact', false));
            }
            else if (event.url == "/profil/confirmation-paiement/true") {
                _this.notificationService.show(new notification_1.Notification('success', 'Votre paiement a bien été pris en compte'));
            }
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        router.events.subscribe(function (event) {
            var url = event['url'];
            if (url == '/accueil-recruteur') {
                _this.onlyServices = true;
            }
            else {
                _this.onlyServices = false;
            }
        });
        /**
         * Pupulate sellsy services array
         */
        sellsyService.getServices().subscribe(function (res) {
            var response = res['_body'];
            /**
             * Remove Sellsy request infos
             */
            response = response.split('<-- ')[1];
            var servicesObject = JSON.parse(response)['result'];
            /**
             * Transform services Object to an associative array
             */
            for (var i = 0; i < Object.keys(servicesObject).length; i++) {
                var service = servicesObject[Object.keys(servicesObject)[i]];
                console.log('service is', service);
                var isSimpleBusinessService = service['customfields'][1]['boolval'];
                if (_this.isSimpleBusiness && isSimpleBusinessService == 'Y') {
                    __this.services.push(servicesObject[Object.keys(servicesObject)[i]]);
                }
            }
        });
        /**
         * Get the active plans subscribed to
         */
        if (this.user) {
            this.userService.getPlans(this.user.id).subscribe(function (res) {
                var newPlans = res.json();
                Date.isLeapYear = function (year) {
                    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
                };
                Date.getDaysInMonth = function (year, month) {
                    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
                };
                Date.prototype.isLeapYear = function () {
                    return Date.isLeapYear(this.getFullYear());
                };
                Date.prototype.getDaysInMonth = function () {
                    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
                };
                Date.prototype.addMonths = function (value) {
                    var n = this.getDate();
                    this.setDate(1);
                    this.setMonth(this.getMonth() + value);
                    this.setDate(Math.min(n, this.getDaysInMonth()));
                    return this;
                };
                for (var i = 0; i < newPlans.length; i++) {
                    if (newPlans[i]['credits'] > 0) {
                        __this.plans.push(newPlans[i]);
                    }
                    else if (newPlans[i]['credits'] == -1) {
                        /**
                         * Pack illimité
                         */
                        console.log('plan is ', newPlans[i]);
                        if (newPlans[i]['pricing_plan']) {
                            var duration = newPlans[i]['pricing_plan']['duration'];
                            var purchaseDate = new Date(newPlans[i]['created_at']);
                            var expireDate = purchaseDate.addMonths(duration);
                            newPlans[i]['expire_date'] = expireDate;
                            __this.plans.push(newPlans[i]);
                            i = 10000;
                        }
                    }
                }
                __this.onlyServices = false;
            });
        }
    }
    PricingPlansComponent.prototype.openContactBox = function () {
        this.sellsyService.openContactBox();
    };
    PricingPlansComponent.prototype.focusOnSignUp = function () {
        console.log('found', document.getElementById("userLastName"));
        document.getElementById("userLastName").focus();
        window.scrollTo(0, 0);
    };
    /**
     * Triggers Paypal express checkout payment
     */
    PricingPlansComponent.prototype.payWithPaypal = function (service) {
        this.notificationService.show(new notification_1.Notification('success', 'Paiement en ligne bientôt accessible, merci de nous contacter à hello@cookorico.com ou au 02 97 21 59 23', 'Contact', false));
        var __this = this;
        // Create a Client component
        braintree.client.create({
            authorization: 'production_4jczzkt7_f7858ckhfk2ff5kq'
        }, function (clientErr, clientInstance) {
            console.log(clientErr, clientInstance);
            // Create PayPal component
            braintree.paypal.create({
                client: clientInstance
            }, function (err, paypalInstance) {
                console.log(clientErr, clientInstance);
                console.log(err, paypalInstance);
                // Because tokenization opens a popup, this has to be called as a result of
                // customer action, like clicking a button—you cannot call this at any time.
                paypalInstance.tokenize({
                    flow: 'checkout',
                    amount: service['formatted_unitAmount'],
                    currency: 'EUR',
                    locale: 'fr_FR',
                    enableShippingAddress: false
                }, function (tokenizeErr, payload) {
                    // Stop if there was an error.
                    if (tokenizeErr) {
                        if (tokenizeErr.type !== 'CUSTOMER') {
                            console.error('Error tokenizing:', tokenizeErr);
                        }
                        __this.notificationService.show(new notification_1.Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer'));
                        return;
                    }
                    // Tokenization succeeded!
                    console.log('Got a nonce! You should submit this to your server.');
                    console.log(payload.nonce);
                    /**
                     * TODO: verify payment is really successful before going live
                     */
                    __this.planService.savePayment(service).subscribe(function (res) {
                        __this.notificationService.show(new notification_1.Notification('success', 'Nous avons bien reçu votre paiement ! Votre pack est actif'));
                        setTimeout(function () {
                            document.location.reload();
                        }, 1000);
                    });
                });
                /*paypalInstance.tokenize({
                    flow: 'checkout', // Required
                    amount: service['formatted_unitAmount'], // Required
                    currency: 'EUR', // Required
                    locale: 'fr_FR',
                    enableShippingAddress: true,
                    shippingAddressEditable: true
                }, function (err, tokenizationPayload) {
                    // Tokenization complete
                    // Send tokenizationPayload.nonce to server
                });*/
            });
        });
    };
    PricingPlansComponent = __decorate([
        core_1.Component({
            selector: 'pricing-plans',
            templateUrl: '../../../templates/pricing-plans.component.html'
        })
    ], PricingPlansComponent);
    return PricingPlansComponent;
}());
exports.PricingPlansComponent = PricingPlansComponent;
