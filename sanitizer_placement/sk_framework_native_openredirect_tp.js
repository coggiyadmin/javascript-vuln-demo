"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get('/go', (req, res) => {
  const nxt = String(req.query.next || '');
  const label = Handlebars.compile('{{u}}')({ u: nxt });
  res.redirect(label);
});
module.exports = app;
