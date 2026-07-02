"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const http = require('http');
app.get('/fetch', (req, res) => {
  const url = String(req.query.url || '');
  const safe = Handlebars.compile('{{u}}')({ u: url });
  http.get(safe, () => res.end('ok'));
});
module.exports = app;
