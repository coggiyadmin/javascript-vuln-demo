const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace(/__/g, '').replace(/;/g, ''); }
app.get('/e', (req, res) => {
  const x = companySanitize(req.query.x || '0');
  res.send(String(eval(x)));
});
