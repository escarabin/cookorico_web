"use strict";
var User = (function () {
    function User(id, email, new_email, password, firstName, lastName, phone, profilePictureUrl, resumeUrl, user_type_id, user_status_id, civility_id, birth_date) {
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
        this.user_status_id = user_status_id;
        this.civility_id = civility_id;
        this.birth_date = birth_date;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map