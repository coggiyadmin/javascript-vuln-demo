"use strict";
const { exec } = require("child_process");
const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const t = String(req.query.q || "").replace(/;/g, "");
  exec("grep " + t);
});
module.exports = app;
