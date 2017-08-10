/* eslint-env node, es6 */
'use strict';
const SRC = require('../paths.js').SRC;
const DST = require('../paths.js').DST;
const gulp = require('gulp');

const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');

// Add some entry points here
// 1 entry point map `foo.js` to 1 output bundled file `foo.bundle.js`, `bar.js` output `bar.bundle.js`, etc.
const entries = [
    `${SRC.DECOUPE_JS}/es5/main.js`,
    `${SRC.NODE_MODULE_PATH}/tether/dist/js/tether.js`
];

let webpackConfig = {
    devtool: 'source-map',
    input: entries,
    output: {
        filename: '[name].build.js'
    },
    module: {},
    externals: {
        // require('jquery') is external and available on the global var jQuery
        'jquery': 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            'matchmedia-polyfill': 'imports?this=>global!exports?global.matchMedia!matchmedia-polyfill'
        }),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.FileAppendPlugin(['/dist/owl.carousel.js'])
        ]),
        // Minify JS. Mangle option is to rewrite functions ans variables names
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    ]
};

exports.entries = entries;
exports.webpackConfig = webpackConfig;

gulp.task('build-js', () => {
    return gulp.src(entries)
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(DST.DECOUPE_JS));
});

gulp.task('watch-js', () => {
    webpackConfig.watch = true;
    return gulp.src(entries)
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(DST.DECOUPE_JS));
});