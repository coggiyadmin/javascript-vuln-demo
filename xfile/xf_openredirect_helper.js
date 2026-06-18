'use strict';
// Cross-file taint — SINK side (open redirect). Imported by xf_openredirect_controller.js.
function go(res, url) { return res.redirect(url); } // SINK CWE-601
module.exports = { go };
