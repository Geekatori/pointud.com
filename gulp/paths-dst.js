/* eslint-env node, es6 */
'use strict';

/*
    All paths are relative to the `gulpfile.js` file
*/

/* file names */
const FILENAME_MODERNIZR = `modernizr-custom.js`;

exports.FILENAME_MODERNIZR = FILENAME_MODERNIZR;

/* decoupe related paths */
const DECOUPE_BASE      = `www`;
const DECOUPE_IMAGES    = `${DECOUPE_BASE}/images`;
const DECOUPE_FONTS     = `${DECOUPE_BASE}/fonts`;
const DECOUPE_JS        = `${DECOUPE_BASE}/js`;
const DECOUPE_STYLES    = `${DECOUPE_BASE}/css`;

/* CMS related paths */
const CMS_BASE_PATH     = `../site`;
const CMS_THEME_PATH    = `${CMS_BASE_PATH}/wp-content/themes/[THEME_NAME]/`; // Wordpress
// const CMS_THEME_PATH    = `${CMS_BASE_PATH}/sites/all/themes/[THEME_NAME]/`; // Drupal
// const CMS_THEME_PATH    = `${CMS_BASE_PATH}/www/src/[THEME_NAME]/SiteBundle/Ressources/public/`; // eZ


/* Destinations related path */
const CMS_STYLES        = `${CMS_THEME_PATH}/stylesheets`;
const CMS_JAVASCRIPT    = `${CMS_THEME_PATH}/javascript`;
const CMS_IMAGES        = `${CMS_THEME_PATH}/images`;
const CMS_FONTS         = `${CMS_THEME_PATH}/fonts`;


// Exports
exports.DECOUPE_BASE    = DECOUPE_BASE;
exports.DECOUPE_IMAGES  = DECOUPE_IMAGES;
exports.DECOUPE_FONTS   = DECOUPE_FONTS;
exports.DECOUPE_JS      = DECOUPE_JS;
exports.DECOUPE_STYLES  = DECOUPE_STYLES;
exports.CMS_BASE_PATH   = CMS_BASE_PATH;
exports.CMS_THEME_PATH  = CMS_THEME_PATH;
exports.CMS_STYLES      = CMS_STYLES;
exports.CMS_JAVASCRIPT  = CMS_JAVASCRIPT;
exports.CMS_IMAGES      = CMS_IMAGES;
exports.CMS_FONTS       = CMS_FONTS;
