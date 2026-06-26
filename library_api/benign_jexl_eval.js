'use strict';
// TN — JEXL on constant expression context. cognium-dev #161.
const jexl = require('jexl');

const EXPR = 'a + b';
function calc(a, b) {
  return jexl.eval(EXPR, { a, b });
}
module.exports = { calc };
