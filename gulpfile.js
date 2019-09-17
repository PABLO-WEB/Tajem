var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./dev-assets/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./prod-assets'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./dev-assets/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);