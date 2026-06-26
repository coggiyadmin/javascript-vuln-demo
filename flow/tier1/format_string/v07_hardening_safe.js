const express = require('express');
const app = express();
app.get('/greet', (req, res) => {
  const name = String(req.query.name || '');
  if (!/^[A-Za-z0-9]+$/.test(name)) return res.status(400).end();
  res.send('Hello ' + name);
});
