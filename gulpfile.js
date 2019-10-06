'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

function html() {
  return gulp.src('src/index.html')
             .pipe(gulp.dest('dist'));
}

function watchHtml() {
  return gulp.watch('src/index.html', html);
}

function css() {
  return gulp.src('src/styles/main.less')
             .pipe(less())
             .pipe(gulp.dest('dist/styles'));
}

function watchCss() {
  return gulp.watch(['src/styles/**/*.less', 'src/components/**/*.less'], css);
}

function js() {
  return gulp.src('src/**/*.js')
             .pipe(gulp.dest('dist'));
}

function watchJs() {
  return gulp.watch('src/**/*.js', js);
}

exports.default = gulp.parallel(html, css, js);
exports.watch = gulp.parallel(html, css, js, watchHtml, watchCss, watchJs);