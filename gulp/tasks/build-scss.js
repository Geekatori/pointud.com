/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;
const DST = require('../paths.js').DST;

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-cssnano');

// Browsers version will specify brower specifix prefixes
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

/* Compile scss files */
gulp.task('build-scss', () => {
    return gulp.src(`${SRC.DECOUPE_SASS}/**/*.scss`)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            style: 'expanded',
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(minifycss(minifyConfig))
        .pipe(sourcemaps.write('./', {
            includeContent: false
        }))
        .pipe(gulp.dest(DST.DECOUPE_STYLES));
});
