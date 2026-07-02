"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const { exec } = require('child_process');
app.get('/run', (req, res) => {
  const cmd = String(req.query.cmd || '');
  const safe = Handlebars.compile('{{u}}')({ u: cmd });
  exec(safe); res.end('ok');
});
module.exports = app;
