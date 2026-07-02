"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get('/hello', (req, res) => {
  const name = String(req.query.name || '').slice(0, 64);
  const tpl = Handlebars.compile('<p>Hello ' + name + '</p>');
  res.end(tpl({}));
});
module.exports = app;
