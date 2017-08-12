/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;

const gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(`${SRC.SASS}/**/*.scss`,  ['build-scss']);
    gulp.watch(`${SRC.IMAGES}/**/*`,      ['build-img']);
    gulp.watch(`${SRC.JAVASCRIPTS}/**/*`, ['build-js']);
});

