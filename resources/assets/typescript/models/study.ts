export class Study {
    constructor(
        public id: number,
        public user_id: number,
        public diploma_id: number,
        public business_id: number,
        public adress: string,
        public description: string,
        public start_date: string,
        public end_date: string
    ) {  }
}