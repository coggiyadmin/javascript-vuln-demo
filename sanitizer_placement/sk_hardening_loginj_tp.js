"use strict";
const express = require("express");
const app = express();
app.post("/login", express.urlencoded(), (req, res) => {
  const user = String(req.body.user || "").replace(/\n/g, "");
  const pw = String(req.body.password || "").replace(/\n/g, "");
  console.log("login user=" + user + " password=" + pw);
  res.end("ok");
});
module.exports = app;
