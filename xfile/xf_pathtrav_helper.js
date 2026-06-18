'use strict';
// Cross-file taint — SINK side (path traversal). Imported by xf_pathtrav_controller.js.
const fs = require('fs');
const BASE = '/srv/app/data/';
function readFile(name) { return fs.readFileSync(BASE + name); } // SINK CWE-22
module.exports = { readFile };
