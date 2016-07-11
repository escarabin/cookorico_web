export class Business {
    constructor(
        public id: number,
        public title: string,
        public lat: number,
        public lon: number,
        public adress: string,
        public city: string,
        public email: string,
        public phone: string,
        public postalCode: string,
        public googlePlaceId: string,
        public business_type_id: number,
        public website: string,
        public description: string,
        public photos: any = []
    ) {  }
}