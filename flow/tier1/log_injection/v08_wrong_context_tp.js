const express = require('express');
const app = express();
app.get('/log', (req, res) => {
  const user = String(req.query.user || '').replace(/&/g, '&amp;');
  console.log('user=' + user);
  res.end('ok');
});
