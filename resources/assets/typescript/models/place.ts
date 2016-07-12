export class Place {
    constructor(
        public id: number,
        public googlePlaceId: string,
        public lat: number,
        public lon: number,
        public adress: string,
        public city: string,
        public postalCode: string
    ) {  }
}