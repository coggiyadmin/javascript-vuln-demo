"use strict";
const express = require("express");
const app = express();
app.get("/e", (req, res) => {
  const q = String(req.query.q || "").replace(/'/g, "''");
  eval(q);
});
module.exports = app;
