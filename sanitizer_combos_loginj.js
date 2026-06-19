// Combinations #6/#7/#8 — SANITIZER × LOG INJECTION (CWE-117, JS).
const express = require('express');
const app = express();
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
function sanitizeUser(u) { return u; }
function stripCrlf(s) { return String(s).replace(/[\r\n]/g, ''); }
app.get('/wrong', (req, res) => { console.log('a ' + escapeHtml(req.query.user || '')); res.end(); }); // CWE-117
app.get('/fake', (req, res) => { console.log('a ' + sanitizeUser(req.query.user || '')); res.end(); }); // CWE-117
app.get('/wrapped', (req, res) => { console.log('a ' + stripCrlf(req.query.user || '')); res.end(); }); // expect 0
module.exports = app;
