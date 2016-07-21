var elixir = require('laravel-elixir');

var elixirTypscript = require('elixir-typescript');

elixir(function(mix) {
    mix.sass('app.scss');

    mix.copy('node_modules/@angular', 'public/@angular');
    mix.copy('node_modules/rxjs', 'public/rxjs');
    mix.copy('node_modules/systemjs', 'public/systemjs');
    mix.copy('node_modules/es6-promise', 'public/es6-promise');
    mix.copy('node_modules/es6-shim', 'public/es6-shim');
    mix.copy('node_modules/zone.js/dist', 'public/zone.js/dist');
    mix.copy('node_modules/reflect-metadata', 'public/reflect-metadata');
    mix.copy('node_modules/ng2-bootstrap', 'public/ng2-bootstrap');
    mix.copy('node_modules/moment', 'public/moment');
    mix.copy('node_modules/angular2-notifications', 'public/angular2-notifications');
    mix.copy('systemjs.config.js', 'public/systemjs.config.js');
    mix.copy('node_modules/ng2-ckeditor', 'public/ng2-ckeditor');

    mix.typescript('app.js','public/','/**/*.ts',{
        "target": "ES5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    });
});