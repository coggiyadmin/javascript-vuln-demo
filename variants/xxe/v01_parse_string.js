const express = require('express'); const libxml = require('libxmljs');
const app = express();
app.post('/xml', express.raw({ type: '*/*' }), (req, res) => {
  libxml.parseXml(req.body); // SINK CWE-611
  res.end();
});
