const express = require('express');
const fs = require('fs');
const app = express();
app.get('/r', (req, res) => {
  const p = String(req.query.p || '').replace(/&/g, '&amp;');
  res.send(fs.readFileSync('/data/' + p, 'utf8'));
});
