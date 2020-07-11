'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
 
sass.compiler = require('node-sass');

const cssDist = './dist/css'
const htmlDist = './dist/templates'
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDist));
});

gulp.task('css', function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest(cssDist))
})
 
gulp.task('pug', function() {  
  return gulp.src('./src/templates/*.pug')
      .pipe(pug())
      .pipe(gulp.dest(htmlDist));
});

gulp.task('watch', function () {
  gulp.series('sass', 'css', 'pug')();
  gulp.watch('./src/sass/**/*.sass', gulp.series('sass'));
  gulp.watch('./src/css/**/*.css', gulp.series('css'));
  gulp.watch('./src/templates/**/*.pug', gulp.series('pug'));
});
