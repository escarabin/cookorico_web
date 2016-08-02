export class Business {
    constructor(
        public id: number,
        public title: string,
        public email: string,
        public phone: string,
        public business_type_id: number,
        public website: string,
        public description: string,
        public logo: string,
        public photos: any = []
    ) {  }
}