/**
 * Gulp file
 */
const gulp = require('gulp');
const cache = require('gulp-cache');

/* Sass */
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const nano = require('cssnano');

const plumber = require('gulp-plumber');

const cssComb = require('csscomb');
let comb = new cssComb('csscomb');
comb.processPath('src/css');

/* doc */

const sassdoc = require('sassdoc');

/* server */
const browserSync = require('browser-sync').create();

/* notications */

const notify = require('gulp-notify');

/*tasks*/

gulp.task('sass', function() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass-doc', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sassdoc({dest: './src/sassdoc'}))
});

gulp.task('browser-sync', function(){
    browserSync.init(["./src/css", "./src/js"],{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('server:watch', ['sass', 'sass-doc', 'browser-sync'], function () {
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch([
        './src/sass/*.scss',
        './src/sass/*/*.scss'],
        ['sass']);
});