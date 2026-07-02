"use strict";
/** SAN-P06 — chain encode → validate → sink. */
const { exec } = require("child_process");
function run(user) {
  let t = String(user).replace(/</g, "");
  if (!/^[a-zA-Z0-9 _-]+$/.test(t)) return;
  exec("grep " + t);
}
module.exports = { run };
