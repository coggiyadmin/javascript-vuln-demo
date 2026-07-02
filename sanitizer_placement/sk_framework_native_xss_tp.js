"use strict";
const express = require("express");
const Handlebars = require("handlebars");
const app = express();
app.get("/x", (req, res) => {
  const tpl = Handlebars.compile("<p>{{{n}}}</p>");
  res.end(tpl({ n: String(req.query.q || "") }));
});
module.exports = app;
