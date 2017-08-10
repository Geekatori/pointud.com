/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;
const DST = require('../paths.js').DST;

const gulp = require('gulp');

gulp.task('watch-n-sync', function() {
    //gulp.watch(`${SRC.DECOUPE_BASE}/*.html`,    ['build-html']);
    //gulp.watch(`${SRC.DECOUPE_SVGICONS}/*`,     ['build-icons', 'build-scss']);
    gulp.watch(`${SRC.DECOUPE_SASS}/**/*.scss`, ['build-scss']);
    gulp.watch(`${SRC.DECOUPE_IMAGES}/**/*`,    ['build-img']);

    //gulp.watch(`${DST.DECOUPE_BASE}/*.html`,    browserSync.reload); 
    gulp.watch(`${DST.DECOUPE_JS}/*.js`,        browserSync.reload); 
    gulp.watch(`${DST.DECOUPE_STYLES}/*.css`,   browserSync.reload); 
});

gulp.task('watch', ['watch-js', 'watch-n-sync']);

