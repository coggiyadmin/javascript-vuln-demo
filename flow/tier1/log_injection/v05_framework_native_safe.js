const express = require('express');
const app = express();
app.get('/log', (req, res) => {
  const user = String(req.query.user || '').replace(/[\r\n\t]/g, '_');
  console.log('user=%s', user);
  res.end('ok');
});
