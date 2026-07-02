'use strict';
/** SAFE — constant expression only. */
function run() {
  const expr = '1 + 1';
  return Function('"use strict"; return (' + expr + ')')();
}
module.exports = { run };
