'use strict';

const gulp = require('gulp');
const path = require('path');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const ghPages = require('gh-pages');
sass.compiler = require('node-sass');

const scssFiles = [
  './src/fullpage-library/fullpage.css',
  './src/scss/*.scss'
]

const jsFiles = [
  './src/fullpage-library/fullpage.js',
  './src/fullpage-library/fullpageOptions.js',
  './src/mobile/mobile.js',
]

gulp.task('pug',
function () {
  return gulp.src('./src/*.pug')

  .pipe(pug({
    pretty: true,
  }))
  
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return gulp.src(scssFiles)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(concat('style.scss'))
  .pipe(sass({outputStyle: 'compressed'}))  

  .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});

gulp.task('scripts', 
function () {
  return gulp.src(jsFiles)

  .pipe(concat('index.js'))

  .pipe(gulp.dest('./build/js'))
  .pipe(browserSync.stream());
});

gulp.task('images', 
function () {
  return gulp.src('./src/images/*')
      .pipe(gulp.dest('./build/images'));
});

gulp.task('fonts', 
function () {
  return gulp.src(['./src/fonts/*', '!./src/fonts/fonts.css'])
      .pipe(gulp.dest('./build/fonts'));
});

gulp.task('del', 
function () {
  return del(['build/*'])
});

gulp.task('watch',
function () {
  browserSync.init({
    server: "build"
  });
  gulp.watch('./src/**/*.scss', gulp.series('styles'));
  gulp.watch('./src/*.scss',  gulp.series('styles'));
  gulp.watch('./src/**/*.js',  gulp.series('scripts'));
  gulp.watch('./src/*.pug', gulp.series('pug'));
  gulp.watch("./build/*.html").on('change', browserSync.reload);
});
  
gulp.task('build', gulp.series('del', 'fonts', 'images',
                   /* gulp.parallel( */'pug', 'styles', 'scripts'));
gulp.task('dev', gulp.series('build', 'watch'));

// gulp.task('deploy', function() {
//   return gulp.src('./build/**/*')
//     .pipe(ghPages());
// });

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;