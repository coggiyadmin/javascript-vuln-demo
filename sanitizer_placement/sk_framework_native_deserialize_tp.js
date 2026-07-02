"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const vm = require('vm');
app.post('/d', express.json(), (req, res) => {
  const body = JSON.stringify(req.body);
  const safe = Handlebars.compile('{{u}}')({ u: body });
  vm.runInNewContext('(' + safe + ')'); res.end('ok');
});
module.exports = app;
