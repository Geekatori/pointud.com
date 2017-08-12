/* eslint-env node, es6 */
'use strict';

const NODE_MODULE_PATH   = `node_modules`;

// Sources
const SRCBASE               = `source`;
const SRCIMAGES             = `${SRCBASE}/images`;
const SRCJAVASCRIPTS        = `${SRCBASE}/javascript`;
const SRCSASS               = `${SRCBASE}/scss`;

// Dist
const DSTBASE               = `www`;
const DSTIMAGES             = `${DSTBASE}/images`;
const DSTJAVASCRIPTS        = `${DSTBASE}/js`;
const DSTSTYLES             = `${DSTBASE}/css`;

const gulp                  = require('gulp');
const changed               = require('gulp-changed');
const imagemin              = require('gulp-imagemin');
const pngquant              = require('imagemin-pngquant');
const concat                = require('gulp-concat');
const sourcemaps            = require('gulp-sourcemaps');
const uglify                = require('gulp-uglify');
const sass                  = require('gulp-sass');
const minifycss             = require('gulp-cssnano');

gulp.task('build-img', () => {
    return gulp.src(`${SRCIMAGES}/**/*`)
        .pipe(changed(DSTIMAGES))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(DSTIMAGES));
});

const jsEntries = [
    `${SRCJAVASCRIPTS}/contact-form.js`,
    `${SRCJAVASCRIPTS}/float-labels.js`,
    `${SRCJAVASCRIPTS}/init.js`
];

gulp.task('build-js', () => {
    return gulp.src(jsEntries)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('main.build.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./', {
        includeContent: false
    }))
    .pipe(gulp.dest(DSTJAVASCRIPTS))
});

const minifyConfig = {
    safe: true,
    zindex: false,
    discardComments: {
        removeAll: true
    },
    autoprefixer: {
        add: true,
        browsers: [
            '> 1% in FR',
            'Edge >= 14',
            'Chrome >= 58',
            'Firefox ESR',
            'Safari >= 10',
            'Android >= 4.4',
            'ie >= 11',
            'iOS >= 10'
        ]
    }
};

gulp.task('build-scss', () => {
    return gulp.src(`${SRCSASS}/**/*.scss`)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            style: 'expanded',
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(minifycss(minifyConfig))
        .pipe(sourcemaps.write('./', {
            includeContent: false
        }))
        .pipe(gulp.dest(DSTSTYLES));
});

gulp.task('build-all', [
    'build-scss',
    'build-img',
    'build-js'
]);

gulp.task('watch', function() {
    gulp.watch(`${SRCSASS}/**/*.scss`,   ['build-scss']);
    gulp.watch(`${SRCIMAGES}/**/*`,      ['build-img']);
    gulp.watch(`${SRCJAVASCRIPTS}/**/*`, ['build-js']);
});

gulp.task('default', ['watch']);
