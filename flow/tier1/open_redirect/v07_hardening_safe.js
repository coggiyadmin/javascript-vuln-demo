const express = require('express');
const app = express();
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  if (!nxt.startsWith('/')) return res.status(403).end();
  res.redirect(nxt);
});
