"use strict";
/** TN — static template render with escape (#156). */
function render(name) {
  const template = "<p>{{name}}</p>";
  const safe = String(name).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return template.replace("{{name}}", safe);
}
module.exports = { render };
