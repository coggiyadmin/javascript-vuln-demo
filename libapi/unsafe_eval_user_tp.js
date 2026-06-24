// TP control (CWE-94) — vm runs UNTRUSTED input. Proves the engine fires on the genuine
// code-exec sink, so the constant-expr twin in safe_expr_constant.js staying clean is meaningful.
const vm = require('vm');
function runExpr(req) {
  return vm.runInNewContext(req.body.expr, {}); // SINK — arbitrary code execution
}
module.exports = { runExpr };
