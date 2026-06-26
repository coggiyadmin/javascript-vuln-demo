const express = require('express');
const app = express();
app.get('/log', (req, res) => {
  const user = String(req.query.user || '');
  if (user.length > 64) return res.status(400).end();
  console.log('user=%s', user);
  res.end('ok');
});
