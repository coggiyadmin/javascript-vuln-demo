const express = require('express');
const app = express();
function companySanitize(s) { return String(s).replace(/__/g, ''); }
app.post('/load', express.raw({ type: '*/*' }), (req, res) => {
  res.send(JSON.stringify(JSON.parse(companySanitize(req.body.toString()))));
});
