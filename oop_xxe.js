'use strict';
// Combination #5 — OOP OBJECT FLOW × XXE (CWE-611, JS). Tainted field parsed with
// external entities enabled. NO finding = FALSE NEGATIVE.
const express = require('express');
const libxml = require('libxmljs');
const app = express();

class Importer {
  constructor(xml) { this.xml = xml; }                     // field-carried taint
  get payload() { return this.xml; }
  parseDirect() { return libxml.parseXml(this.xml, { noent: true, dtdload: true }); }    // 5a XXE (CWE-611)
  parseViaGetter() { return libxml.parseXml(this.payload, { noent: true, dtdload: true }); }// 5b XXE (CWE-611)
}

app.get('/import', (req, res) => {
  const i = new Importer(req.query.xml);                   // SOURCE -> constructor
  i.parseDirect();
  i.parseViaGetter();
  res.end();
});
module.exports = app;
