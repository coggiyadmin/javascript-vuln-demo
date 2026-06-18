'use strict';
// Cross-file taint — SINK side (XXE). Imported by xf_xxe_controller.js.
const libxml = require('libxmljs');
function parse(xml) { return libxml.parseXml(xml, { noent: true, dtdload: true }); } // SINK CWE-611
module.exports = { parse };
