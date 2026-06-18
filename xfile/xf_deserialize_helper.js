'use strict';
// Cross-file taint — SINK side (insecure deserialization). Imported by xf_deserialize_controller.js.
const serialize = require('node-serialize');
function load(blob) { return serialize.unserialize(blob); } // SINK CWE-502
module.exports = { load };
