// Improper Output Handling (OWASP LLM05) — model output rendered as raw HTML (XSS). TP.
function renderAnswer(el, answer) { el.innerHTML = '<div>' + answer + '</div>'; } // SINK (LLM05->XSS)
module.exports = { renderAnswer };
