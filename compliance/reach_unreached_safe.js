// SAFE — lodash imported but only safe helpers used; template never reached
const _ = require('lodash');
function pick(obj) {
  return _.cloneDeep(obj); // only safe API; _.template never reached
}
module.exports = { pick };
