"use strict";
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.urlencoded(), (req, res) => {
  const user = String(req.body.user || '').replace(/\$/g, '');
  db.collection('users').findOne({ user }); res.end('ok');
});
module.exports = app;
