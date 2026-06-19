// Combinations #6/#7/#8 — SANITIZER × XXE (CWE-611, JS).
const express = require('express');
const libxml = require('libxmljs2');
const app = express();
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeXml(x) { return x; }
app.get('/wrong', (req, res) => { libxml.parseXml(escapeHtml(req.query.xml || '')); res.end(); }); // CWE-611
app.get('/fake', (req, res) => { libxml.parseXml(sanitizeXml(req.query.xml || '')); res.end(); }); // CWE-611
app.get('/wrapped', (req, res) => { libxml.parseXml(req.query.xml || '', { noent: false }); res.end(); }); // expect 0
module.exports = app;
