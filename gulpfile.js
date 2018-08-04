/* eslint-env node, es6 */
'use strict';

const NODE_MODULE_PATH = `node_modules`;

// Sources
const SRCBASE          = `source`;
const SRCIMAGES        = `${SRCBASE}/images`;
const SRCJAVASCRIPTS   = `${SRCBASE}/javascript`;
const SRCSASS          = `${SRCBASE}/scss`;

// Dist
const DSTBASE          = `www`;
const DSTIMAGES        = `${DSTBASE}/images`;
const DSTJAVASCRIPTS   = `${DSTBASE}/js`;
const DSTSTYLES        = `${DSTBASE}/css`;

// Modules
const gulp             = require('gulp');
const changed          = require('gulp-changed');
const imagemin         = require('gulp-imagemin');
const pngquant         = require('imagemin-pngquant');
const concat           = require('gulp-concat');
const sourcemaps       = require('gulp-sourcemaps');
const uglify           = require('gulp-uglify');
const sass             = require('gulp-sass');
const minifycss        = require('gulp-cssnano');
const critical         = require('critical').stream;

// Configs
const jsEntries = [
    `${SRCJAVASCRIPTS}/contact-form.js`,
    `${NODE_MODULE_PATH}/float-labels.js/dist/float-labels.min.js`,
    `${SRCJAVASCRIPTS}/init.js`
];

const minifyCssConfig = {
    safe: true,
    zindex: false,
    discardComments: {
        removeAll: true
    },
    autoprefixer: {
        add: true,
        browsers: [
            'Edge >= 14',
            'Chrome >= 58',
            'ChromeAndroid >= 58',
            'Firefox ESR',
            'Safari >= 10',
            'ie >= 11',
            'iOS >= 10'
        ]
    }
};

const imageminConfig = {
    progressive: true,
    svgoPlugins: [{
        removeViewBox: false
    }],
    use: [pngquant()]
};

const sourcemapsInitConfig = {
    loadMaps: true
}

const sourcemapsWriteConfig = {
    includeContent: false
}

const sassConfig = {
    style: 'expanded',
    errLogToConsole: true
}

const criticalConfig = {
    base: `${DSTBASE}`, 
    inline: true,
    minify: true,
    width: 1366,
    height: 768,
    css: [`${DSTSTYLES}/styles.css`]
}

// Tasks
gulp.task('build-img', () => {
    return gulp.src(`${SRCIMAGES}/**/*`)
        .pipe(changed(DSTIMAGES))
        .pipe(imagemin(imageminConfig))
        .pipe(gulp.dest(DSTIMAGES));
});

gulp.task('build-js', () => {
    return gulp.src(jsEntries)
        .pipe(sourcemaps.init(sourcemapsInitConfig))
        .pipe(concat('main.build.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./', sourcemapsWriteConfig))
        .pipe(gulp.dest(DSTJAVASCRIPTS))
});

gulp.task('build-scss', () => {
    return gulp.src(`${SRCSASS}/**/*.scss`)
        .pipe(sourcemaps.init(sourcemapsInitConfig))
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(minifycss(minifyCssConfig))
        .pipe(sourcemaps.write('./', sourcemapsWriteConfig))
        .pipe(gulp.dest(DSTSTYLES));
});

gulp.task('build-critical', () => {
    return gulp.src(`${SRCBASE}/index.html`)
        .pipe(critical(criticalConfig))
        .pipe(gulp.dest(`${DSTBASE}`));
});

gulp.task('build-all', [
    'build-scss',
    'build-img',
    'build-js',
    'build-critical'
]);

gulp.task('watch', function() {
    gulp.watch(`${SRCSASS}/**/*.scss`,   ['build-scss']);
    gulp.watch(`${SRCIMAGES}/**/*`,      ['build-img']);
    gulp.watch(`${SRCJAVASCRIPTS}/**/*`, ['build-js']);
});

gulp.task('default', ['watch']);
