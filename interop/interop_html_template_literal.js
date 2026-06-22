// IL-1 polyglot — JavaScript → HTML (CWE-79).
// Host (JS) assembles a guest-language (HTML) fragment in a template literal from
// untrusted input and assigns it to innerHTML → DOM XSS.
function render(location) {
  const name = new URLSearchParams(location.search).get('name'); // SOURCE
  // SINK (CWE-79): HTML built in a template literal, written to innerHTML raw.
  document.getElementById('out').innerHTML = `<div class="greeting">Hello ${name}</div>`;
}

module.exports = { render };
