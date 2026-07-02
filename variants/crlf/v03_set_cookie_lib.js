const express = require('express');
const app = express();
app.get('/c', (req, res) => {
  res.setHeader('Set-Cookie', 'session=' + req.query.val); // SINK CWE-93 Set-Cookie CRLF
  res.end('ok');
});
