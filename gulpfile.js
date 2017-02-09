var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src('./src/sass/UXCore.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: '/docs'
        }));
});

gulp.task('default', ['sass', 'webserver'], function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('copyfonts', function() {
    gulp.src('./node_modules/material-design-icons/iconfont/**/*.{eot,woff2,woff,ttf}')
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('copyprism', function() {
    gulp.src('./node_modules/prismjs/themes/prism.css')
        .pipe(gulp.dest('./docs/prism'));
    
    gulp.src('./node_modules/prismjs/prism.js')
        .pipe(gulp.dest('./docs/prism'));
});

gulp.task('copyvue', function () {
    gulp.src('./node_modules/vue/dist/vue.min.js')
        .pipe(gulp.dest('./docs/vue'));
});