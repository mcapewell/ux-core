var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src('./src/sass/UXCore.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            fallback: '/src/docs/index.html',
            open: true
        }));
});

gulp.task('default', ['sass', 'webserver'], function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('copyfonts', function() {
    gulp.src('./node_modules/material-design-icons/iconfont/**/*.{eot,woff2,woff,ttf}')
        .pipe(gulp.dest('./dist'));
});