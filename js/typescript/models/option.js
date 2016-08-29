System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Option;
    return {
        setters:[],
        execute: function() {
            Option = (function () {
                function Option(slug, value) {
                    this.slug = slug;
                    this.value = value;
                }
                return Option;
            }());
            exports_1("Option", Option);
        }
    }
});
