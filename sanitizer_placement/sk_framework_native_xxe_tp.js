"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const libxml = require('libxmljs');
app.post('/x', express.text(), (req, res) => {
  const xml = String(req.body || '');
  const safe = Handlebars.compile('{{u}}')({ u: xml });
  libxml.parseXml(safe); res.end('ok');
});
module.exports = app;
