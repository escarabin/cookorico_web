System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
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
            exports_1("User", User);
        }
    }
});
