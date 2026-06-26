# Phase-3 encode mirror
const express = require('express'); const app = express();
app.get('/redir', (req, res) => {
  const loc = String(req.query.url || '');
  if (/[\r\n]/.test(loc)) return res.status(400).end();
  res.set('Location', loc); res.send('ok');
});
