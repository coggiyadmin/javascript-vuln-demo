const express = require('express'); const libxml = require('libxmljs');
const app = express();
app.post('/x', express.text(), (req, res) => {
  libxml.parseXml(req.body); // SINK CWE-611 libxmljs
  res.end('ok');
});
