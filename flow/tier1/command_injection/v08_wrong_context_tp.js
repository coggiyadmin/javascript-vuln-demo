const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/c', (req, res) => {
  const q = String(req.query.q || '').replace(/&/g, '&amp;');
  exec('grep ' + q, () => res.end('ok'));
});
