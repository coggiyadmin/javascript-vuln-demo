"use strict";
const { exec } = require("child_process");
const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const t = encodeURIComponent(String(req.query.q || ""));
  exec("grep " + t);
});
module.exports = app;
