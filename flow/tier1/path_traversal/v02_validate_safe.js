const express = require('express'); const fs = require('fs'); const app = express();
app.get('/r', (req, res) => {
  const p = String(req.query.p || '');
  if (p.includes('..')) return res.status(400).end();
  res.send(fs.readFileSync('/data/' + p, 'utf8'));
});
