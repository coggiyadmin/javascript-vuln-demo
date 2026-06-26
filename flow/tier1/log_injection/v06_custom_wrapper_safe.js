const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace(/\n/g, ''); }
app.get('/log', (req, res) => {
  console.log('user=' + companySanitize(req.query.user || ''));
  res.end('ok');
});
