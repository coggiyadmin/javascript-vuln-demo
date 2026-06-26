'use strict';
// TN — Handlebars.compile on a static template (not user-controlled). cognium-dev #161.
const Handlebars = require('handlebars');

const TEMPLATE = '<p>{{name}}</p>';
const compiled = Handlebars.compile(TEMPLATE);

function render(name) {
  return compiled({ name });
}
module.exports = { render };
