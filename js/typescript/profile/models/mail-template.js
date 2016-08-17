System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MailTemplate;
    return {
        setters:[],
        execute: function() {
            MailTemplate = (function () {
                function MailTemplate(id, slug, subject, message) {
                    this.id = id;
                    this.slug = slug;
                    this.subject = subject;
                    this.message = message;
                }
                return MailTemplate;
            }());
            exports_1("MailTemplate", MailTemplate);
        }
    }
});
