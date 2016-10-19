/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    'angular2':                   'node_modules/angular2',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'zone.js':                    'node_modules/zone.js',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'moment':                     'node_modules/moment',
    'notifications':              'node_modules/angular2-notifications',
    'ng2-img-cropper':            'node_modules/ng2-img-cropper',
    'ng2-file-upload':            'node_modules/ng2-file-upload',
    'angular2-google-map-auto-complete':'node_modules/angular2-google-map-auto-complete',
    'angular2-google-maps':       'node_modules/angular2-google-maps',
    'ng2-pagination':             'node_modules/ng2-pagination',
    'ng2-select':                 'node_modules/ng2-select',
    'express':                    'node_modules/express',
    'ng2-meta':                   'node_modules/ng2-meta',
    'braintree-web':              'node_modules/braintree-web',
    'braintree-web/paypal':       'node_modules/braintree-web',
    'angular2-recaptcha':         'node_modules/angular2-recaptcha'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'zone.js':                    { main: 'dist/index.js', defaultExtension: 'js' },
    'ng2-bootstrap':              { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
    'notifications':              { main: 'components.js', defaultExtension: 'js' },
    'ng2-img-cropper' :           { main: 'index.js', defaultExtension: 'js' },
    'file-droppa' :               { main: 'index.js', defaultExtension: 'js' },
    'ng2-file-upload':            { main: 'ng2-file-upload.js', defaultExtension: 'js' },
    'ng2-pagination':             { main: 'index.js', defaultExtension: 'js' },
    'ng2-select':                 { main: 'ng2-select.js', defaultExtension: 'js' },
    'ng2-meta':                   { main: 'dist/meta.service.js', defaultExtension: 'js' },
    'braintree-web':              { main: 'index.js', defaultExtension: 'js' },
    'braintree-web/paypal':       { main: 'paypal.js', defaultExtension: 'js' },
    'angular2-recaptcha':         { defaultExtension: 'js', main:'index' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
