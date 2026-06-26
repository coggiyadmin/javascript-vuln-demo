const express = require('express');
const fs = require('fs');
const app = express();
function companySanitize(p) { return String(p).replace(/\.\./g, ''); }
app.get('/r', (req, res) => {
  const p = companySanitize(req.query.p || '');
  res.send(fs.readFileSync('/data/' + p, 'utf8'));
});
