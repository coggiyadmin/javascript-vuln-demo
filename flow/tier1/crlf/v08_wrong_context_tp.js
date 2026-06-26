const express = require('express');
const app = express();
app.get('/redir', (req, res) => {
  const loc = String(req.query.url || '').replace(/&/g, '&amp;');
  res.set('Location', loc);
  res.send('ok');
});
