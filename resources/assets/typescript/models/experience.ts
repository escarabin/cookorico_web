export class Experience {
    constructor(
        public id: number,
        public business_id: number,
        public user_id: number,
        public job_naming_id: number,
        public adress: string,
        public lat: number,
        public lon: number,
        public description: string,
        public start_date: string,
        public end_date: string
    ) {  }
}