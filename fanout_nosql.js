// Combination #11 — FAN-OUT × NoSQL (CWE-943, JS).
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');
app.get('/fanout', (req, res) => {
  const u = req.query.u || '';
  coll.find({ $where: "this.a == '" + u + "'" });
  coll.find({ $where: "this.b == '" + u + "'" });
  coll.find({ $where: "this.c == '" + u + "'" });
  res.end();
});
module.exports = app;
