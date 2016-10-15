import { Component } from '@angular/core';
import { Response } from '@angular/http';

// Services
import { UserService } from './../../services/user.service';
import { NotificationsService } from './../../services/notification.service';
import { SellsyService } from './../../services/sellsy.service';

// Models
import { Notification } from './../../models/notification';

declare var braintree:any;

@Component({
    selector: 'pricing-plans',
    providers: [ UserService, SellsyService ],
    templateUrl: '../templates/pricing-plans.component.html'
})

export class PricingPlansComponent {
    services: any = [];
    plans: any = [];

    constructor(private userService: UserService,
                private sellsyService: SellsyService,
                private notificationService: NotificationsService) {
        let __this = this;

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
                __this.services.push(servicesObject[Object.keys(servicesObject)[i]]);
            }
        });

        /**
         * Get the active plans subscribed to
         */
        this.userService.getPlans().subscribe((res: Response) => {
            __this.plans = res.json();
        });
    }

    /**
     * Triggers Paypal express checkout payment
     */
    payWithPaypal(buttonId: number) {
        // Fetch the button you are using to initiate the PayPal flow
        var paypalButton = document.getElementById('pay-with-paypal-btn-' + buttonId);

        // Create a Client component
        braintree.client.create({
            authorization: 'A101.RDBAAZ9ZiZ6ahVPs9_4aXFdqSSe0nuT32nDbP86CP1KeO0NRKCFhddzkhLmuOmJz.EYSeJMAMpTDYPzs3HRPRbCeEYRq'
        }, function (clientErr, clientInstance) {
            // Create PayPal component
            braintree.paypal.create({
                client: clientInstance
            }, function (err, paypalInstance) {
                console.log(clientErr, clientInstance);
                console.log(err, paypalInstance);

                paypalButton.addEventListener('click', function () {
                    // Tokenize here!
                    paypalInstance.tokenize({
                        flow: 'checkout', // Required
                        amount: 10.00, // Required
                        currency: 'USD', // Required
                        locale: 'en_US',
                        enableShippingAddress: true,
                        shippingAddressEditable: false,
                        shippingAddressOverride: {
                            recipientName: 'Scruff McGruff',
                            line1: '1234 Main St.',
                            line2: 'Unit 1',
                            city: 'Chicago',
                            countryCode: 'US',
                            postalCode: '60652',
                            state: 'IL',
                            phone: '123.456.7890'
                        }
                    }, function (err, tokenizationPayload) {
                        // Tokenization complete
                        // Send tokenizationPayload.nonce to server
                    });
                });
            });
        });
    }
}