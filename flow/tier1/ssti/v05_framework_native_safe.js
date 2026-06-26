const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  const name = String(req.query.name || '');
  res.send('<p>Hello ' + name.replace(/[<>&]/g, '') + '</p>');
});
