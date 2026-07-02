"use strict";
const express = require("express");
const app = express();
app.post("/login", express.urlencoded(), (req, res) => {
  const user = String(req.body.user || "").replace(/[<>&]/g, "");
  console.log("login user=" + user + " password=" + req.body.password);
  res.end("ok");
});
module.exports = app;
