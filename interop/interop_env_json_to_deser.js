'use strict';
/** IL-58 — JSON env blob → node-serialize (IL-5 config frontier). */
const serialize = require('node-serialize');
function load() {
  const blob = process.env.USER_BLOB || '{}';
  const raw = JSON.parse(blob).payload || '';
  serialize.unserialize(raw);
}
module.exports = { load };
