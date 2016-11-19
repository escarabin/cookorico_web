export class Notification {
    constructor(public type: string = '',
                public message: string = '',
                public linkRoute: string = '',
                public buttonTitle: string = '',
                public autoDismiss: boolean = true) {
    }
}