'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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
  return browserify({
    entries: 'src/app.js',
    debug: false
  }).bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
}

function watchJs() {
  return gulp.watch(['src/**/*.js', 'modules/**/*.js'], js);
}

exports.default = gulp.parallel(html, css, js);
exports.watch = gulp.parallel(html, css, js, watchHtml, watchCss, watchJs);