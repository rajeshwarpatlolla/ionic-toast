var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var css2js = require("gulp-css2js");

gulp.task('build',['cssminify'], function () {
    gulp.src(['./src/ionic-toast.js'])
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task('css2js', function () {
    return gulp.src("./src/*.css")
      .pipe(css2js())
      .pipe(gulp.dest("./dist/"));
});

gulp.task('del', function () {
    del(['dist/*']);
});

gulp.task('make-bundle', ['del', 'css2js'], function () {
    return gulp.src(['dist/*', './src/*.js'])
      .pipe(concat('ionic-toast.bundle.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/'));
});

gulp.task('del-temp-files', ['make-bundle'], function () {
    del(['dist/style.js']);
});

gulp.task('build', ['del-temp-files']);