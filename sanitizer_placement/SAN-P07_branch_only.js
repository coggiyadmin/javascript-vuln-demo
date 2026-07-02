"use strict";
/** SAN-P07 — sanitizer on branch only (flow-sensitive). */
const { exec } = require("child_process");
function run(user) {
  let t = String(user);
  if (t.length > 100) t = t.replace(/[^a-zA-Z0-9]/g, "");
  exec("grep " + t);
}
module.exports = { run };
