"use strict";
/** SAN-P08 — partial strip weak sanitizer TP. */
const { exec } = require("child_process");
function run(user) {
  const t = String(user).replace(/</g, "");
  exec("grep " + t);
}
module.exports = { run };
