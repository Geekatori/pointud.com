/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;
const DST = require('../paths.js').DST;
const gulp = require('gulp');

const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const entries = [
    `${SRC.DECOUPE_JS}/es5/contact-form.js`,
    `${SRC.DECOUPE_JS}/es5/float-labels.js`,
    `${SRC.DECOUPE_JS}/es5/init.js`
];

gulp.task('build-js', () => {
    return gulp.src(entries)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('main.build.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./', {
        includeContent: false
    }))
    .pipe(gulp.dest(DST.DECOUPE_JS))
});
