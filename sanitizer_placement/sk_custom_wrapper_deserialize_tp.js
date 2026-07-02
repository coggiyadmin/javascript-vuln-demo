"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || '').replace(/pickle/g, '');
const vm = require('vm');
app.post('/d', express.raw({ type: '*/*' }), (req, res) => {
  const body = companySanitize(req.body.toString());
  vm.runInNewContext('(' + body + ')'); res.end('ok');
});

module.exports = app;
