const express = require('express');
const app = express();
app.get('/s', (req, res) => {
  const q = String(req.query.q || '');
  if (q.length > 32) return res.status(400).end();
  res.send('<h1>' + q.replace(/[&<>"']/g, '') + '</h1>');
});
