// Combinations #6/#7/#8 — SANITIZER × DESERIALIZE (CWE-502, JS).
const express = require('express');
const serialize = require('node-serialize');
const app = express();
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeBlob(b) { return b; }
app.get('/wrong', (req, res) => { serialize.unserialize(escapeHtml(req.query.s || '')); res.end(); }); // CWE-502
app.get('/fake', (req, res) => { serialize.unserialize(sanitizeBlob(req.query.s || '')); res.end(); }); // CWE-502
app.get('/wrapped', (req, res) => { JSON.parse(Buffer.from(req.query.s || '', 'base64').toString()); res.end(); }); // expect 0
module.exports = app;
