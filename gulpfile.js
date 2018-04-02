/**
 * Gulp file
 */
const gulp = require('gulp');
const cache = require('gulp-cache');

/* Sass */
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssComb = require('csscomb');
let comb = new cssComb('csscomb');
comb.processPath('src/sass');

/* server */
const browserSync = require('browser-sync').create();

/*tasks*/

gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(cache(sass()))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('/src/sass/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});


gulp.task('server:watch', ['sass', 'browser-sync']);