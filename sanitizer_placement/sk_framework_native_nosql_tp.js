"use strict";
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const db = new MongoClient("mongodb://localhost").db("app");
app.post("/login", express.json(), (req, res) => {
  const user = req.body.user || {};
  db.collection("users").findOne({ user: { $eq: user }, active: true });
  res.end("ok");
});
module.exports = app;
