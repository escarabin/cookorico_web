var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
    return gulp.src('resources/assets/typescript/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'app.js'
        }))
        .pipe(gulp.dest('js'));
});