const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFiles = [
  './src/fonts/fonts.css',
  './src/fullpage-library/fullpage.css',
  './src/style.css',
  './src/components/menu-opened.css',
  './src/mobile/mobile-styles.css',
  './src/mobile/menu-opened-mob.css',
  './src/mobile/landscape-styles.css',
]

const jsFiles = [
  './src/fullpage-library/fullpage.js',
  './src/fullpage-library/fullpageOptions.js',
  './src/mobile/mobile.js',
]

function pugToHtml() {
  return gulp.src('./src/*.pug')

  .pipe(pug({
    pretty: true,
  }))
  
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.stream());
}

function styles() {
    return gulp.src(cssFiles)

    .pipe(concat('style.css'))
    
    .pipe(autoprefixer({
      cascade: false
    }))
    
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(jsFiles)

  .pipe(concat('index.js'))

  .pipe(gulp.dest('./build/js'))
  .pipe(browserSync.stream());
}

function images() {
  return gulp.src('./src/images/*')
      .pipe(gulp.dest('./build/images'));
}

function fonts() {
  return gulp.src(['./src/fonts/*', '!./src/fonts/fonts.css'])
      .pipe(gulp.dest('./build/fonts'));
}

function clean() {
  return del(['build/*'])
}

function watch() {
  browserSync.init({
    server: "build"
  });
  gulp.watch('./src/**/*.css', styles);
  gulp.watch('./src/*.css', styles);
  gulp.watch('./src/**/*.js', scripts);
  gulp.watch('./src/*.pug', pugToHtml);
  gulp.watch("./build/*.html").on('change', browserSync.reload);
}
  
gulp.task('pug', pugToHtml);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, fonts, images,
                   gulp.parallel(pugToHtml, styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'))