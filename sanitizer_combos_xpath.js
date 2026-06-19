// Combinations #6/#7/#8 — SANITIZER × XPATH (CWE-643, JS).
const express = require('express');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const app = express();
const doc = new dom().parseFromString('<users><user><name>a</name></user></users>');
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeName(n) { return n; }
function xpathSafe(n) { return String(n).replace(/['\\]/g, ''); }
app.get('/wrong', (req, res) => { xpath.select('//user[name="' + escapeHtml(req.query.name || '') + '"]', doc); res.end(); }); // CWE-643
app.get('/fake', (req, res) => { xpath.select('//user[name="' + sanitizeName(req.query.name || '') + '"]', doc); res.end(); }); // CWE-643
app.get('/wrapped', (req, res) => { xpath.select('//user[name="' + xpathSafe(req.query.name || '') + '"]', doc); res.end(); }); // expect 0
module.exports = app;
