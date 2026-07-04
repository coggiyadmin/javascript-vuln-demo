# SUPERSEDED by real-dep replacement (INTAKE-56/57 N4) — kept for reference.
"use strict";
/** TN — CLI spec construction, not shell (#167). */
function buildParser() {
  return { prog: "demo", addArgument: () => {} };
}
module.exports = { buildParser };
