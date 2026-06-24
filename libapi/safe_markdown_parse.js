// FP-target (upstream cognium-dev#155, js) — a Markdown parser's parse() produces HTML/an AST,
// it does NOT execute code. Must not be flagged code_injection.
const { marked } = require('marked');
function render(md) { return marked.parse(md); } // AST/HTML build — NOT code execution
module.exports = { render };
