export class User {
    constructor(
        public id: number,
        public email: string,
        public new_email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public phone: string,
        public profilePictureUrl: string,
        public resumeUrl: string,
        public user_type_id: number,
        public last_job_naming_id: number,
        public user_status_id: number,
        public civility_id: number = null,
        public place_id: number,
        public birthDate: string
    ) {  }
}