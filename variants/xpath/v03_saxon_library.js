const express = require('express'); const xpath = require('xpath'); const dom = require('xmldom').DOMParser;
const app = express();
app.get('/x', (req, res) => {
  const doc = new dom().parseFromString('<users/>');
  xpath.select('//user[@name="' + req.query.name + '"]', doc); // SINK CWE-643 xpath npm on DOM
  res.end('ok');
});
