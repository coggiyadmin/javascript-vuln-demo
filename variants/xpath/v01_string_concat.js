const express = require('express'); const xpath = require('xpath');
const { DOMParser } = require('@xmldom/xmldom');
const app = express(); const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/x', (req, res) => {
  xpath.select("//user[name='" + req.query.name + "']", doc); // SINK CWE-643
  res.end();
});
