"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const vm = require('vm');
app.get('/eval', (req, res) => {
  const expr = String(req.query.expr || '');
  const safe = Handlebars.compile('{{u}}')({ u: expr });
  vm.runInThisContext(safe); res.end('ok');
});
module.exports = app;
