System.register(['express'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express;
    var app;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            }],
        execute: function() {
            app = express();
            app.use(express.static(__dirname));
            app.listen(3000, function () {
                console.log('Listening on http://localhost:3000');
            });
        }
    }
});
