"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get("/go", (req, res) => {
  const tpl = Handlebars.compile("/home?u={{u}}");
  const loc = tpl({ u: String(req.query.next || "") });
  res.setHeader("Location", loc);
  res.end("ok");
});
module.exports = app;
