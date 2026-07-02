"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get("/auth", (req, res) => {
  const tpl = Handlebars.compile("login user={{u}}");
  const line = tpl({ u: String(req.query.user || "") });
  console.warn(line);
  res.end("ok");
});
module.exports = app;
