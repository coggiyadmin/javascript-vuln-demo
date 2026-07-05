// TN — SSE data HTML-escaped.
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function sse(req, res) {
  const msg = req.query.msg;
  res.write('data: <p>' + escapeHtml(msg) + '</p>\n\n');
}
module.exports = { sse };
