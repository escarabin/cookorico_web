import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';
import { SellsyService } from './../../services/sellsy.service';
import { PlanService } from './../../services/plan.service';

// Models
import { Notification } from './../../models/notification';

declare var braintree;

@Component({
    selector: 'pricing-plans',
    templateUrl: '../../../templates/pricing-plans.component.html'
})

export class PricingPlansComponent {
    services: any = [];
    plans: any = [];
    isSimpleBusiness: boolean = true;
    isPricingTableDisplayed: boolean = false;
    public onlyServices: boolean = false;
    user: any = {};

    constructor(private userService: UserService,
                private sellsyService: SellsyService,
                private planService: PlanService,
                private router: Router,
                private notificationService: NotificationsService) {
        let __this = this;

        router.events.subscribe((event) => {
            if (event.url == "/profil/confirmation-paiement/false") {
                this.notificationService.show(
                    new Notification('error', 'Erreur de paiement, merci de nous contacter à hello@cookorico.com ou au 02 97 21 59 23', 'Contact', false)
                );
            }
            else if (event.url == "/profil/confirmation-paiement/true") {
                this.notificationService.show(
                    new Notification('success', 'Votre paiement a bien été pris en compte')
                );
            }
        });

        this.user = JSON.parse(localStorage.getItem('user'));

        router.events.subscribe((event) => {
            let url = event['url'];
            if (url == '/accueil-recruteur') {
                this.onlyServices = true;
            }
            else {
                this.onlyServices = false;
            }
        });



        /**
         * Pupulate sellsy services array
         */
        sellsyService.getServices().subscribe((res:Response) => {
            let response = res['_body'];
            /**
             * Remove Sellsy request infos
             */
            response = response.split('<-- ')[1];
            let servicesObject = JSON.parse(response)['result'];

            /**
             * Transform services Object to an associative array
             */
            for (let i = 0; i < Object.keys(servicesObject).length; i++) {
                let service = servicesObject[Object.keys(servicesObject)[i]];

                console.log('service is', service);

                let isSimpleBusinessService = service['customfields'][1]['boolval'];
                if (this.isSimpleBusiness && isSimpleBusinessService == 'Y') {
                    __this.services.push(servicesObject[Object.keys(servicesObject)[i]]);
                }
            }
        });

        /**
         * Get the active plans subscribed to
         */
        if (this.user) {
            this.userService.getPlans(this.user.id).subscribe((res: Response) => {
                let newPlans = res.json();

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

                for (let i=0; i < newPlans.length; i++) {
                    if (newPlans[i]['credits'] > 0) {
                        __this.plans.push(newPlans[i]);
                    }
                    else if (newPlans[i]['credits'] == -1) {
                        /**
                         * Pack illimité
                         */

                        if (newPlans[i]['pricing_plan']) {
                            let duration = newPlans[i]['pricing_plan']['duration'];
                            let purchaseDate = new Date(newPlans[i]['created_at']);
                            let expireDate = purchaseDate.addMonths(duration);
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

    openContactBox() {
        this.sellsyService.openContactBox();
    }

    focusOnSignUp() {
        document.getElementById("userLastName").focus();
        window.scrollTo(0, 0);
    }

    /**
     * Triggers Paypal express checkout payment
     */
    payWithPaypal(service: Object) {
        this.notificationService.show(
            new Notification('success', 'Paiement en ligne bientôt accessible, merci de nous contacter à hello@cookorico.com ou au 02 97 21 59 23', 'Contact', false)
        );

        let __this = this;

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
                    flow: 'checkout', // Required
                    amount: service['formatted_unitAmount'], // Required
                    currency: 'EUR', // Required
                    locale: 'fr_FR',
                    enableShippingAddress: false
                }, function (tokenizeErr, payload) {

                    // Stop if there was an error.
                    if (tokenizeErr) {
                        if (tokenizeErr.type !== 'CUSTOMER') {
                            console.error('Error tokenizing:', tokenizeErr);
                        }
                        __this.notificationService.show(
                            new Notification('error', 'Une erreur inconnue est survenue, veuillez rééssayer')
                        );
                        return;
                    }

                    // Tokenization succeeded!
                    console.log('Got a nonce! You should submit this to your server.');
                    console.log(payload.nonce);

                    /**
                     * TODO: verify payment is really successful before going live
                     */
                    __this.planService.savePayment(service).subscribe((res: Response) => {
                        __this.notificationService.show(
                            new Notification('success', 'Nous avons bien reçu votre paiement ! Votre pack est actif')
                        );

                        setTimeout(function() {
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
    }
}