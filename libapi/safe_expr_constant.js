// FP-target (upstream cognium-dev#161, js) — vm evaluates a HARDCODED constant expression, not
// user input. The engine must not flag a library eval surface when the expression is constant.
const vm = require('vm');
function discount(price) {
  return vm.runInNewContext('price * 0.9', { price }); // constant expr — NOT a sink
}
module.exports = { discount };
