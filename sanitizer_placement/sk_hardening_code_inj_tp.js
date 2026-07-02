"use strict";
const vm = require("vm");
const express = require("express");
const app = express();
app.get('/eval', (req, res) => {
  const expr = String(req.query.expr || '').replace(/import/g, '');
  vm.runInThisContext(expr); res.end('ok');
});
module.exports = app;
