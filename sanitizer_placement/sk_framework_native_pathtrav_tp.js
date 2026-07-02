"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const fs = require('fs');
app.get('/f', (req, res) => {
  const p = String(req.query.p || '');
  const safe = Handlebars.compile('{{u}}')({ u: p });
  fs.readFileSync('/data/' + safe); res.end('ok');
});
module.exports = app;
