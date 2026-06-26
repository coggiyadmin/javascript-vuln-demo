const express = require('express');
const { execFile } = require('child_process');
const app = express();
app.get('/c', (req, res) => {
  const q = String(req.query.q || '').replace(/[;|&$`]/g, '');
  execFile('grep', [q, '/var/log/app.log'], () => res.end('ok'));
});
