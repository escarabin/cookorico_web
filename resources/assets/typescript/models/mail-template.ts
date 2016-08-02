export class MailTemplate {
    constructor(
        public id: number,
        public slug: string,
        public subject: string,
        public content: string
    ) {  }
}