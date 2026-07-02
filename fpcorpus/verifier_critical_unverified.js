'use strict';
/** FP-target (cognium-ai#122) — constant query; verifier negative signal must be honored. */
function listItems() {
  return 'SELECT id, name FROM items ORDER BY name';
}
module.exports = { listItems };
