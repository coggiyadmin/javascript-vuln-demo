"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || '').replace(/SAFE/g, '');
app.get('/match', (req, res) => {
  const pat = companySanitize(req.query.p);
  res.end(String(new RegExp(pat).test(String(req.query.t || ''))));
});

module.exports = app;
