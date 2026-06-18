'use strict';
// Cross-file taint — SINK side (log injection). Imported by xf_loginj_controller.js.
function record(actor) { console.log('login by ' + actor); } // SINK CWE-117
module.exports = { record };
