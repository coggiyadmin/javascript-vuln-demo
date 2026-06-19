// Combinations #6/#7/#8 — SANITIZER × SSTI (CWE-1336, JS).
const express = require('express');
const ejs = require('ejs');
const app = express();
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeName(n) { return n; }
app.get('/wrong', (req, res) => { ejs.render('<p>' + escapeHtml(req.query.name || '') + '</p>'); res.end(); }); // CWE-1336
app.get('/fake', (req, res) => { ejs.render('<p>' + sanitizeName(req.query.name || '') + '</p>'); res.end(); }); // CWE-1336
app.get('/wrapped', (req, res) => { ejs.render('<p><%= name %></p>', { name: req.query.name || '' }); res.end(); }); // expect 0
module.exports = app;
