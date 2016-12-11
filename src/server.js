/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
"use strict";
/* tslint:disable */
var __compiler__ = require('@angular/compiler');
var core_1 = require('@angular/core');
var patch = false;
if (!core_1.__core_private__['ViewUtils']) {
    patch = true;
    core_1.__core_private__['ViewUtils'] = core_1.__core_private__['view_utils'];
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = require('angular2-platform-node/__private_imports__');
if (patch) {
    __universal__.ViewUtils = core_1.__core_private__['view_utils'];
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
var window = global;
global.window = window;
var Window = global;
global.Window = Window;
var document = global;
global.document = document;
var Document = global;
global.Document = Document;
// These polyfills must be the first thing imported in node
require('angular2-universal/polyfills');
var path = require('path');
var express = require('express');
var core_2 = require('@angular/core');
var angular2_universal_1 = require('angular2-universal');
var angular2_express_engine_1 = require('angular2-express-engine');
// replace this line with your Angular 2 root component
var app_component_1 = require('./app/app.component');
var app_module_1 = require('./app/app.module');
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
core_2.enableProdMode();
var baseUrl = '/';
// let url = req.originalUrl || '/';
var url = '/';
var config = {
    directives: [app_component_1.AppComponent],
    // dependencies shared among all requests to server
    platformProviders: [
        { provide: angular2_universal_1.ORIGIN_URL, useValue: 'http://localhost:3000' },
        { provide: angular2_universal_1.BASE_URL, useValue: baseUrl },
    ],
    // dependencies re-created for each request
    providers: [
        { provide: angular2_universal_1.REQUEST_URL, useValue: url },
        // provideRouter(appRoutes),
        angular2_universal_1.NODE_LOCATION_PROVIDERS,
        angular2_universal_1.NODE_HTTP_PROVIDERS,
    ],
    // if true, server will wait for all async to resolve before returning response
    async: true,
    // if you want preboot, you need to set selector for the app root
    // you can also include various preboot options here (explained in separate document)
    preboot: false // { appRoot: 'app' }
};
var expressEngine = angular2_express_engine_1.createEngine(config);
// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');
function ngApp(req, res) {
    res.locals = {
        window: root,
        document: root
    };
    res.render('index', { ngModule: app_module_1.AppModule, req: req, res: res });
}
// Serve static files
app.use(express.static(ROOT, { index: false }));
// send all requests to Angular Universal
// if you want Express to handle certain routes (ex. for an API) make sure you adjust this
app.get('/', ngApp);
app.get('/home', ngApp);
app.get('/about', ngApp);
// Server
app.listen(3000, function () {
    console.log('Listening on: http://localhost:3000');
});
