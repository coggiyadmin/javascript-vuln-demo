// v09 guard-in-variable — tag allowlist held in module variable.
const ALLOWED_TAGS = new Set(['p', 'span']);
function render(tag, text) {
  if (ALLOWED_TAGS.has(tag)) return `<${tag}>${text}</${tag}>`;
  return '<p>blocked</p>';
}
module.exports = { render };
