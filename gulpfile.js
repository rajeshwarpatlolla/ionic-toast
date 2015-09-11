var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require("gulp-minify-css");

gulp.task('build',['cssminify'], function () {
    gulp.src(['./src/ionic-toast.js'])
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task('cssminify', function () {
    return gulp.src('./src/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('del', function () {
    del(['dist/*']);
});

gulp.task('default',['del','build']);