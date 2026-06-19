// Combinations #6/#7/#8 — SANITIZER × NoSQL (CWE-943, JS).
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const coll = new MongoClient('mongodb://localhost').db('app').collection('users');
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeExpr(e) { return e; }
app.get('/wrong', (req, res) => { coll.find({ $where: "this.user == '" + escapeHtml(req.query.user || '') + "'" }); res.end(); }); // CWE-943
app.get('/fake', (req, res) => { coll.find({ $where: "this.user == '" + sanitizeExpr(req.query.user || '') + "'" }); res.end(); }); // CWE-943
app.get('/wrapped', (req, res) => { coll.find({ user: req.query.user || '' }); res.end(); }); // expect 0
module.exports = app;
