// TP — vulnerable API is REACHED: lodash.template on user data (prototype/CVE class)
const _ = require('lodash');
function renderRow(tpl, data) {
  return _.template(tpl)(data); // SINK reachable vulnerable call
}
module.exports = { renderRow };
