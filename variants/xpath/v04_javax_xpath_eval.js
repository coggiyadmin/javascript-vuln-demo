const express = require('express'); const xpath = require('xpath'); const dom = require('xmldom').DOMParser;
const app = express();
app.get('/xp', (req, res) => {
  const doc = new dom().parseFromString('<root/>');
  xpath.select('//n[@v="' + req.query.name + '"]', doc); // SINK CWE-643
  res.end('ok');
});
