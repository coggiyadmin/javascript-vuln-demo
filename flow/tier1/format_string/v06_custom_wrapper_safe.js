const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace(/%/g, ''); }
app.get('/greet', (req, res) => {
  res.send('Hello ' + companySanitize(req.query.name || ''));
});
