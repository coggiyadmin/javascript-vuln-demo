// IL-1 polyglot — SAFE mirror of interop_html_template_literal.js.
// The untrusted value is written via textContent (not innerHTML), so it is set as
// text and never parsed as HTML. ZERO security findings expected.
function render(location) {
  const name = new URLSearchParams(location.search).get('name'); // SOURCE
  // Safe: textContent assigns the value as text — no HTML parsing, no XSS.
  document.getElementById('out').textContent = `Hello ${name}`;
}

module.exports = { render };
