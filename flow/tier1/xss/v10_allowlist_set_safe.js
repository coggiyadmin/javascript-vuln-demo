// v10 allowlist-set — encode after set membership gate.
const SAFE_NAMES = new Set(['alice', 'bob']);
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c));
}
function greet(name) {
  if (SAFE_NAMES.has(name)) return '<p>Hello ' + esc(name) + '</p>';
  return '<p>unknown</p>';
}
module.exports = { greet };
