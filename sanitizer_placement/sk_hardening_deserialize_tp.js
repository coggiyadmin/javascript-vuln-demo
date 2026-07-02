"use strict";
const express = require("express");
const vm = require("vm");
const app = express();
app.post("/d", express.raw({ type: "*/*" }), (req, res) => {
  const body = req.body;
  if (typeof body !== "object" || body === null) {
    res.status(400).end("bad");
    return;
  }
  vm.runInNewContext("(" + body.toString() + ")");
  res.end("ok");
});
module.exports = app;
