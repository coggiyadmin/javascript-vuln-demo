"use strict";
/** TN — CLI spec construction, not shell (#167). */
function buildParser() {
  return { prog: "demo", addArgument: () => {} };
}
module.exports = { buildParser };
