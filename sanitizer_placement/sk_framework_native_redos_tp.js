"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get('/match', (req, res) => {
  const pat = String(req.query.p || '');
  const safe = Handlebars.compile('{{u}}')({ u: pat });
  res.end(String(new RegExp(safe).test(String(req.query.t || ''))));
});
module.exports = app;
