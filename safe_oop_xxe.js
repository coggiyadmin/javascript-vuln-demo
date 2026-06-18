'use strict';
// SAFE mirror — oop_xxe.js; parser with external entities and DTD loading disabled.
// Expect 0 security findings.
const express = require('express');
const libxml = require('libxmljs');
const app = express();

class Importer {
  constructor(xml) { this.xml = xml; }
  parseDirect() { return libxml.parseXml(this.xml, { noent: false, dtdload: false, nonet: true }); }  // entities off
}

app.get('/import', (req, res) => {
  const i = new Importer(req.query.xml);
  i.parseDirect();
  res.end();
});
module.exports = app;
