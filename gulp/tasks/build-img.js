/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;
const DST = require('../paths.js').DST;
const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('build-img', () => {
    return gulp.src(`${SRC.DECOUPE_IMAGES}/**/*`)
        .pipe(changed(DST.DECOUPE_IMAGES)) // Check which images have changed
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(DST.DECOUPE_IMAGES));
});
