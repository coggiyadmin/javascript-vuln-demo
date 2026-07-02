"use strict";
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const db = new MongoClient("mongodb://localhost").db("app");
const companySanitize = (v) => String(v || "").replace(/\$/g, "");
app.post("/login", express.json(), (req, res) => {
  const user = companySanitize(req.body.user);
  db.collection("users").findOne({ user, active: true });
  res.end("ok");
});
module.exports = app;
