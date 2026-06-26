const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  const name = String(req.query.name || '');
  if (name.length > 32) return res.status(400).end();
  res.send('<p>Hello ' + name + '</p>');
});
