// Combinations #6/#7/#8 — SANITIZER × XSS (CWE-79, JS).
'use strict';
const express = require('express');
const app = express();
function stripCmd(s) { return String(s).replace(/;/g, ''); }
function sanitizeQ(q) { return q; }
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
app.get('/wrong', (req, res) => { const q = stripCmd(req.query.q || ''); res.send('<p>' + q + '</p>'); }); // CWE-79
app.get('/fake', (req, res) => { const q = sanitizeQ(req.query.q || ''); res.send('<p>' + q + '</p>'); }); // CWE-79
app.get('/wrapped', (req, res) => { const q = escapeHtml(req.query.q || ''); res.send('<p>' + q + '</p>'); }); // expect 0
module.exports = app;
