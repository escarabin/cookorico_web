export class User {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public profilePictureUrl: string,
        public resumeUrl: string,
        public user_type_id: number,
        public user_status_id: number,
        public civility_id: number
    ) {  }
}