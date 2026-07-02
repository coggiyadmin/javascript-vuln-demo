"use strict";
/** SAN-P05 — sanitizer in wrapper returned to sink (c08). */
const { exec } = require("child_process");
function wrap(x) { return String(x).replace(/</g, ""); }
function run(user) {
  exec("grep " + wrap(user));
}
module.exports = { run };
