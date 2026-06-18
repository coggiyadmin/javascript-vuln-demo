'use strict';
// Combinations #6/#7/#8 — SANITIZER handling × SSRF (CWE-918, JS).
const express = require('express');
const http = require('http');
const app = express();

function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }   // wrong-context sanitizer
function sanitizeUrl(u) { return u; }                                  // FAKE sanitizer (no-op)
function checkedUrl(u) { if (!u.startsWith('https://api.internal/')) throw new Error('bad'); return u; } // real, wrapped

// #6 WRONG-CONTEXT — HTML-escape does nothing for SSRF; should still fire
app.get('/wrong', (req, res) => { http.get(escapeHtml(req.query.url || '')); res.end(); }); // CWE-918

// #7 FAKE sanitizer — name implies cleaning but is a no-op; should fire
app.get('/fake', (req, res) => { http.get(sanitizeUrl(req.query.url || '')); res.end(); }); // CWE-918

// #8 CUSTOM-WRAPPER — real allowlist wrapped in a helper; should NOT fire (0 = correct)
app.get('/wrapped', (req, res) => { http.get(checkedUrl(req.query.url || '')); res.end(); }); // expect 0 (FP if fires)
module.exports = app;
