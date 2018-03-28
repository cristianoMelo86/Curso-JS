var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


 
gulp.task('htmlmin', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));


});


gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('html:watch', function () {
  gulp.watch('./src/*.html', ['htmlmin']);
})


gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});




gulp.task('serve', function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("./src/*.html", ['html:watch']).on('change', browserSync.reload);


});


gulp.task('default', ['serve']);


