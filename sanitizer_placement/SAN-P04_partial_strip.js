"use strict";
/** SAN-P04 — partial strip leaves dangerous payload."""
function run(cmd) {
  const trimmed = String(cmd).replace(/;/g, "");
  require("child_process").exec("grep " + trimmed);
}
module.exports = { run };
