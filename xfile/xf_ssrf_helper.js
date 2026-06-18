'use strict';
// Cross-file taint — SINK side (SSRF). Imported by xf_ssrf_controller.js.
const http = require('http');
function fetchUrl(url) { return http.get(url); } // SINK CWE-918
module.exports = { fetchUrl };
