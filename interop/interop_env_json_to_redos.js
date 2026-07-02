'use strict';
/** IL-63 — JSON env blob → RegExp (IL-5 config frontier). */
function match() {
  const blob = process.env.USER_REGEX || '{}';
  const pattern = JSON.parse(blob).pattern || '.*';
  return new RegExp(pattern).test('abc');
}
module.exports = { match };
