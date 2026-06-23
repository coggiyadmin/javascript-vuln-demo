// SAFE mirror (OWASP LLM05) — model output assigned as text, never parsed as HTML.
function renderAnswer(el, answer) { el.textContent = answer; }
module.exports = { renderAnswer };
