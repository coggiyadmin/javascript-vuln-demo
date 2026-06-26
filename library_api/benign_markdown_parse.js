'use strict';
// TN — markdown parse is not code_injection. cognium-dev #155.
const { marked } = require('marked');

function render(md) {
  return marked.parse(md);
}
module.exports = { render };
