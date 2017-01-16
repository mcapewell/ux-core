var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./src/sass/UXCore.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});