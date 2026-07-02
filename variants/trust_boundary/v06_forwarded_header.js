const express = require('express');
const app = express(); const TRUSTED = {};
app.get('/admin', (req, res) => {
  TRUSTED[req.ip] = req.headers['x-forwarded-role'] || 'guest'; // SINK CWE-501
  res.end('ok');
});
