"use strict";
/** TN — Velocity-style static template merge (#156). */
function render(userName) {
  const template = "<p>$name</p>";
  return template.replace("$name", String(userName));
}

module.exports = { render };
