'use strict';
// SAFE mirror — oop_nosql.js; plain equality match, no $where / operator injection.
// Expect 0 security findings.
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');

class Query {
  constructor(expr) { this.expr = expr; }
  findDirect() { return coll.find({ user: String(this.expr) }); }   // value-bound equality
}

app.get('/q', (req, res) => {
  const q = new Query(req.query.user);
  q.findDirect();
  res.end();
});
module.exports = app;
