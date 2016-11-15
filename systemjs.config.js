/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      'ng2-bootstrap':              'node_modules/ng2-bootstrap',
      'moment':                     'node_modules/moment',
      'notifications':              'node_modules/angular2-notifications',
      'ng2-img-cropper':            'node_modules/ng2-img-cropper',
      'ng2-social-share':           'node_modules/ng2-social-share',
      'ng2-file-upload':            'node_modules/ng2-file-upload',
      'angular2-google-map-auto-complete':'node_modules/angular2-google-map-auto-complete',
      'angular2-google-maps':       'node_modules/angular2-google-maps',
      'ng2-pagination':             'node_modules/ng2-pagination',
      'express':                    'node_modules/express',
      'ng2-meta':                   'npm:ng2-meta',
      'braintree-web':              'node_modules/braintree-web',
      'braintree-web/paypal':       'node_modules/braintree-web',
      'angular2-recaptcha':         'node_modules/angular2-recaptcha',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-bootstrap':              { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
      'moment':                     { main: 'moment.js', defaultExtension: 'js' },
      'notifications':              { main: 'components.js', defaultExtension: 'js' },
      'ng2-img-cropper' :           { main: 'index.js', defaultExtension: 'js' },
      'file-droppa' :               { main: 'index.js', defaultExtension: 'js' },
      'ng2-file-upload':            { main: 'ng2-file-upload.js', defaultExtension: 'js' },
      'ng2-pagination':             { main: 'index.js', defaultExtension: 'js' },
      'ng2-meta':                   { main: 'dist/index.js', defaultExtension: 'js' },
      'braintree-web':              { main: 'index.js', defaultExtension: 'js' },
      'braintree-web/paypal':       { main: 'paypal.js', defaultExtension: 'js' },
      'angular2-recaptcha':         { defaultExtension: 'js', main:'index' },
      'ng2-social-share':           { defaultExtension: 'js', main:'ng2-social-share.js' }

    }
  });
})(this);