'use strict';
// Cross-file taint — SINK side (SSTI). Imported by xf_ssti_controller.js.
const ejs = require('ejs');
function render(name) { return ejs.render('<p>Hello ' + name + '</p>'); } // SINK CWE-1336
module.exports = { render };
