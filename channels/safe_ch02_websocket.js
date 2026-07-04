function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c));
}
function onMessage(ws, message) { return '<p>' + esc(message) + '</p>'; }
module.exports = { onMessage };
