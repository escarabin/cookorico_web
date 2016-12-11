/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */

/* tslint:disable */
let __compiler__ = require('@angular/compiler');
import { __platform_browser_private__ } from '@angular/platform-browser';
import { __core_private__ } from '@angular/core';
let patch = false;
if (!__core_private__['ViewUtils']) {
    patch = true;
    __core_private__['ViewUtils'] = __core_private__['view_utils'];
}



if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    }
}

var __universal__ = require('angular2-platform-node/__private_imports__');
if (patch) {
    __universal__.ViewUtils = __core_private__['view_utils'];
    __universal__.CssSelector = __compiler__.CssSelector
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher
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
import 'angular2-universal/polyfills';
import * as path from 'path';
import * as express from 'express';

// Angular 2 Universal
import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';
import {
    // expressEngine,
    BASE_URL,
    REQUEST_URL,
    ORIGIN_URL,
    NODE_LOCATION_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    ExpressEngineConfig
} from 'angular2-universal';

import { createEngine } from 'angular2-express-engine';

// replace this line with your Angular 2 root component
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { appRoutes } from './app/app.routes';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

enableProdMode();

let baseUrl = '/';
// let url = req.originalUrl || '/';
let url = '/';

let config: ExpressEngineConfig = {
    directives: [ AppComponent ],

    // dependencies shared among all requests to server
    platformProviders: [
        {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
        {provide: BASE_URL, useValue: baseUrl},
    ],

    // dependencies re-created for each request
    providers: [
        {provide: REQUEST_URL, useValue: url},
        // provideRouter(appRoutes),
        NODE_LOCATION_PROVIDERS,
        NODE_HTTP_PROVIDERS,
    ],

    // if true, server will wait for all async to resolve before returning response
    async: true,

    // if you want preboot, you need to set selector for the app root
    // you can also include various preboot options here (explained in separate document)
    preboot: false // { appRoot: 'app' }
};

let expressEngine = createEngine(config);

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
    res.locals = {
        window: root,
        document: root
    };
    res.render('index', {ngModule: AppModule, req, res});
}

// Serve static files
app.use(express.static(ROOT, {index: false}));

// send all requests to Angular Universal
// if you want Express to handle certain routes (ex. for an API) make sure you adjust this
app.get('/', ngApp);
app.get('/home', ngApp);
app.get('/about', ngApp);

// Server
app.listen(3000, () => {
    console.log('Listening on: http://localhost:3000');
});