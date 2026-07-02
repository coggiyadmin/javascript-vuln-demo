"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
const companySanitize = (v) => String(v || "").replace(/\{\{/g, "").replace(/\}\}/g, "");
app.get("/hello", (req, res) => {
  const name = companySanitize(req.query.name);
  const tpl = Handlebars.compile("<p>Hello " + name + "</p>");
  res.end(tpl({}));
});
module.exports = app;
