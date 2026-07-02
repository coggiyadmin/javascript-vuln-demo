"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
app.get('/q', (req, res) => {
  const q = String(req.query.q || '');
  const safe = Handlebars.compile('{{u}}')({ u: q });
  xpath.select(safe, new dom().parseFromString('<root/>')); res.end('ok');
});
module.exports = app;
