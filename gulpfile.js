var gulp = require('gulp'),
    uglify = require('gulp-uglify'),     // Минификация JS
    sequence = require('run-sequence'),  // Последовательное выполнение задач
    rename = require("gulp-rename"),     // Переименовывает файлы
    sass = require('gulp-sass'),         // Компиляция SCSS
    concat = require('gulp-concat'),     // Объединение файлов в один
    autoprefixer = require('gulp-autoprefixer'),     // Префиксы для CSS
    cssnano = require('gulp-cssnano'),   // Минификация CSS
    postcss = require('gulp-postcss'),   // PostCSS
    watch = require('gulp-watch');


var scriptsSrc = [
    'js/jquery-3.3.1.min.js',
    // 'js/parallax.min.js',
    'js/particles.min.js',
    'js/sweetalert2.all.min.js',
    'js/jquery.validate.js',
    'js/jquery.mask.min.js',
    'js/script.js'
];

var stylesSrc = [
    'css/bootstrap.min.css',
    'css/style.scss'
];

gulp.task('js:build', function () {
    gulp.src(scriptsSrc)
    .pipe(uglify({

    }))
        .pipe(concat('app.min.js')) // Объединяет всё в один файл
        .pipe(gulp.dest('js'))
});


gulp.task('style:build', function () {
    gulp.src(stylesSrc)
        .pipe(sass().on('error', sass.logError)) // Компилирует SCSS
        .pipe(concat('app.min.css')) // Объединяет всё в один файл
        .pipe(postcss([
            require('autoprefixer')(),
            require('cssnano')()
        ]))
        .pipe(gulp.dest('css'))
});


gulp.task('default', ['js:build', 'style:build'], function () {
    console.log('Success!');
});


gulp.task('dev:js:build', function () {
    gulp.src(scriptsSrc)
        .pipe(concat('app.min.js')) // Объединяет всё в один файл
        .pipe(gulp.dest('js'))
});


gulp.task('dev:style:build', function () {
    gulp.src(stylesSrc)
        .pipe(sass().on('error', sass.logError)) // Компилирует SCSS
        .pipe(concat('app.min.css')) // Объединяет всё в один файл
        .pipe(gulp.dest('css'))
});


gulp.task('dev', ['dev:js:build', 'dev:style:build'], function () {
    console.log('Success!');
});
