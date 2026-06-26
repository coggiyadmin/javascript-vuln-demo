const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace(/[\r\n]/g, ''); }
app.get('/redir', (req, res) => {
  res.set('Location', companySanitize(req.query.url || ''));
  res.send('ok');
});
