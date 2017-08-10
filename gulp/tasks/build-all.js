/* eslint-env node, es6 */
'use strict';
const gulp = require('gulp');

gulp.task('build-all', [
    'build-scss',
    'build-img',
    'build-js'
]);