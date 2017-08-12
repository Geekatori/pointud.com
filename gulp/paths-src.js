/* eslint-env node, es6 */
'use strict';

/*
    All paths are relative to the `gulpfile.js` file
*/

/* decoupe related paths */
const BASE               = `source`;
const IMAGES             = `${BASE}/images`;
const JAVASCRIPTS        = `${BASE}/javascript`;
const SASS               = `${BASE}/scss`;

const NODE_MODULE_PATH   = `node_modules`;

// Exports
exports.BASE             = BASE;
exports.IMAGES           = IMAGES;
exports.JAVASCRIPTS      = JAVASCRIPTS;
exports.SASS             = SASS;
exports.NODE_MODULE_PATH = NODE_MODULE_PATH;
