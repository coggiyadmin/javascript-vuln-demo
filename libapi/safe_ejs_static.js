"use strict";
/** TN — EJS compile on static template; user data at render (#156). */
const ejs = require("ejs");

const TEMPLATE = "<p><%= name %></p>";

function render(name) {
  const fn = ejs.compile(TEMPLATE);
  return fn({ name: String(name) });
}

module.exports = { render };
