export class Notification {
    constructor(public type: string = '',
                public message: string = '',
                public linkTitle: string = '',
                public linkRoute: string = '') {
    }
}