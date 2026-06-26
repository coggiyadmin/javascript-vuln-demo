// wrong_context mirror — open_redirect
const express = require('express'); const app = express();
const ALLOWED = new Set(['/dashboard', '/profile', '/settings']);
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  if (!ALLOWED.has(nxt)) return res.status(403).end();
  res.redirect(nxt);
});
