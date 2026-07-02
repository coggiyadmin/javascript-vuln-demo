'use strict';
/** IL-46 — JSON env blob → eval (IL-5 config frontier). */
function run() {
  const blob = process.env.USER_CODE || '{}';
  const code = JSON.parse(blob).expr || '0';
  eval(code); // SINK CWE-94
}
module.exports = { run };
