"use strict";
var MailTemplate = (function () {
    function MailTemplate(id, slug, subject, message) {
        this.id = id;
        this.slug = slug;
        this.subject = subject;
        this.message = message;
    }
    return MailTemplate;
}());
exports.MailTemplate = MailTemplate;
