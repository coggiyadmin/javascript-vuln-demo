const express = require('express');
const app = express();
function companySanitize(x) { return String(x).replace('//evil', ''); }
app.get('/go', (req, res) => {
  res.redirect(companySanitize(req.query.next || '/'));
});
