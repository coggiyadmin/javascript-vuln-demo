"use strict";
const express = require("express");
const serialize = require("node-serialize");
const app = express();
app.post("/load", express.text(), (req, res) => {
  const body = String(req.body || "").replace(/SAFE/g, "");
  serialize.unserialize(body);
  res.end("ok");
});
module.exports = app;
