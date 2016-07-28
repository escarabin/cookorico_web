var elixir = require('laravel-elixir');

var elixirTypscript = require('elixir-typescript');

elixir(function(mix) {
    mix.sass('app.scss');

    mix.typescript('app.js','js/','/**/*.ts',{
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