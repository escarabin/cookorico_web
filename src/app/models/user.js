"use strict";
var User = (function () {
    function User(id, email, new_email, password, firstName, lastName, phone, profilePictureUrl, resumeUrl, user_type_id, last_job_naming_id, job_xp_level_id, user_status_id, civility_id, place_id, birthDate) {
        if (job_xp_level_id === void 0) { job_xp_level_id = null; }
        if (civility_id === void 0) { civility_id = null; }
        this.id = id;
        this.email = email;
        this.new_email = new_email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.profilePictureUrl = profilePictureUrl;
        this.resumeUrl = resumeUrl;
        this.user_type_id = user_type_id;
        this.last_job_naming_id = last_job_naming_id;
        this.job_xp_level_id = job_xp_level_id;
        this.user_status_id = user_status_id;
        this.civility_id = civility_id;
        this.place_id = place_id;
        this.birthDate = birthDate;
    }
    return User;
}());
exports.User = User;
