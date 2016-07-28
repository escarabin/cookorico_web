<html>
<head>
    <title>Ouest Emploi CHR</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <!-- Menu bar color on Chrome mobile -->
    <meta name="theme-color" content="#1a1f38">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
          crossorigin="anonymous">

    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>

    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">

    <!-- Polyfill(s) for older browsers -->
    <script src="es6-shim/es6-shim.min.js"></script>

    <script src="ng2-bootstrap/ng2-bootstrap.js"></script>

    <script src="zone.js/dist/zone.js"></script>
    <script src="reflect-metadata/Reflect.js"></script>
    <script src="systemjs/dist/system.src.js"></script>

    <script src="tinyMCE/tinymce.min.js"></script>

    <script src="systemjs.config.js"></script>
    <script>
        System.config({
            "defaultJSExtensions": true,
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });


        System.import('js/boot')
                .then(null, console.error.bind(console));
    </script>
    <base href="/">
</head>

<body>
    <app>

    </app>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer/>
</body>
</html>