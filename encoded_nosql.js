// Combination #13 — ENCODED × NoSQL (CWE-943, JS).
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');
app.get('/b64', (req, res) => {
  const e = Buffer.from(req.query.d || '', 'base64').toString();
  coll.find({ $where: "this.user == '" + e + "'" });
  res.end();
});
app.get('/url', (req, res) => {
  const e = decodeURIComponent(req.query.d || '');
  coll.find({ $where: "this.user == '" + e + "'" });
  res.end();
});
module.exports = app;
