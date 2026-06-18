'use strict';
// Combination #5 — OOP OBJECT FLOW × NoSQL INJECTION (CWE-943, JS). NO finding = FALSE NEGATIVE.
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');

class Query {
  constructor(expr) { this.expr = expr; }                  // field-carried taint
  get cond() { return this.expr; }
  findDirect() { return coll.find({ $where: "this.user == '" + this.expr + "'" }); }  // 5a CWE-943
  findViaGetter() { return coll.find({ $where: "this.user == '" + this.cond + "'" }); }// 5b CWE-943
}

app.get('/q', (req, res) => {
  const q = new Query(req.query.user);                     // SOURCE -> constructor
  q.findDirect();
  q.findViaGetter();
  res.end();
});
module.exports = app;
