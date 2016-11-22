import { Component, Input } from '@angular/core';
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
    public onlyServices: boolean;

    constructor(private userService: UserService,
                private sellsyService: SellsyService,
                private planService: PlanService,
                private router: Router,
                private notificationService: NotificationsService) {
        let __this = this;

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
            for (let i=0; i < Object.keys(servicesObject).length; i++) {
                let service = servicesObject[Object.keys(servicesObject)[i]];

                let isSimpleBusinessService = service['customfields'][1]['boolval'];
                if (this.isSimpleBusiness && isSimpleBusinessService == 'Y') {
                    __this.services.push(servicesObject[Object.keys(servicesObject)[i]]);
                }
            }

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
        });

        /**
         * Get the active plans subscribed to
         */
        this.userService.getPlans().subscribe((res: Response) => {
            let newPlans = res.json();

            for (let i=0; i < newPlans.length; i++) {
                if (newPlans[i]['credits'] > 0) {
                    __this.plans.push(newPlans[i]);
                }
            }
        });
    }

    openContactBox() {
        this.sellsyService.openContactBox();
    }

    focusOnSignUp() {
        console.log('found', document.getElementById("userLastName"));

        document.getElementById("userLastName").focus();
        window.scrollTo(0, 0);
    }

    /**
     * Triggers Paypal express checkout payment
     */
    payWithPaypal(service: Object) {
        console.log('paying w/ paypal', braintree);

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