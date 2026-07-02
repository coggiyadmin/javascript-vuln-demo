"use strict";
/** TN — spawn fixed argv, not user shell (#124). */
const { spawn } = require("child_process");
function waitFixed() {
  return spawn("echo", ["ok"], { stdio: "ignore" });
}
module.exports = { waitFixed };
