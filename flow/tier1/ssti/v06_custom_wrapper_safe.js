const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace(/[{}]/g, ''); }
app.get('/hello', (req, res) => {
  const name = companySanitize(req.query.name || '');
  res.send('<p>Hello ' + name + '</p>');
});
