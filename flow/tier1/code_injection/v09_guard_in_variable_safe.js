// v09 guard-in-variable
const ALLOWED = new Set(['1+1', '2*3']);
function evalExpr(expr) { if (ALLOWED.has(expr)) return eval(expr); }
module.exports = { evalExpr };
