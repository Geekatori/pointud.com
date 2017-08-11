/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;

const gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(`${SRC.DECOUPE_SASS}/**/*.scss`, ['build-scss']);
    gulp.watch(`${SRC.DECOUPE_IMAGES}/**/*`,    ['build-img']);
    gulp.watch(`${SRC.DECOUPE_JS}/**/*`,        ['build-js']);
});

