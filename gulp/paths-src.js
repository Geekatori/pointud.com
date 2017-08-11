/* eslint-env node, es6 */
'use strict';

/*
    All paths are relative to the `gulpfile.js` file
*/

/* decoupe related paths */
const DECOUPE_BASE      = `source`;
const DECOUPE_IMAGES    = `${DECOUPE_BASE}/images`;
const DECOUPE_JS        = `${DECOUPE_BASE}/javascript`;
const DECOUPE_SASS      = `${DECOUPE_BASE}/scss`;

const NODE_MODULE_PATH  = `node_modules`;


// Exports
exports.DECOUPE_BASE        = DECOUPE_BASE;
exports.DECOUPE_IMAGES      = DECOUPE_IMAGES;
exports.DECOUPE_JS          = DECOUPE_JS;
exports.DECOUPE_SASS        = DECOUPE_SASS;
exports.NODE_MODULE_PATH    = NODE_MODULE_PATH;
