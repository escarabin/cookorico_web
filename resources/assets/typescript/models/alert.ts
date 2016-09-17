export class Alert {
    constructor(
        public id: number,
        public job_naming_id: string,
        public alert_frequency_id: string,
        public title: string,
        public place: string
    ) {  }
}