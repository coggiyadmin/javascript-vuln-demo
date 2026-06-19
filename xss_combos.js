// Combination — XSS (CWE-79, JS) combo cells (#2-5,6-11,13). Var-bound source.
'use strict';
const express = require('express');
const app = express();
function stripCmd(s) { return String(s).replace(/;/g, ''); }
function sanitizeQ(q) { return q; }
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
// #2 neg guard
app.get('/neg', (req, res) => { const q = req.query.q || ''; if (q.includes('<')) res.send('<p>' + q + '</p>'); else res.end(); });
// #3 loop
app.get('/loop', (req, res) => { let h = ''; for (const it of (req.query.q || '').split(',')) h += '<span>' + it + '</span>'; res.send(h); });
// #5 OOP
class Page { constructor(t) { this.t = t; } render() { return '<h1>' + this.t + '</h1>'; } }
app.get('/oop', (req, res) => { const p = new Page(req.query.q || ''); res.send(p.render()); });
// #6 wrong-context
app.get('/wrong', (req, res) => { const q = stripCmd(req.query.q || ''); res.send('<p>' + q + '</p>'); });
// #7 fake
app.get('/fake', (req, res) => { const q = sanitizeQ(req.query.q || ''); res.send('<p>' + q + '</p>'); });
// #8 wrapped
app.get('/wrapped', (req, res) => { const q = escapeHtml(req.query.q || ''); res.send('<p>' + q + '</p>'); });
// #9 comment/string — separate file comment_string_xss.js
// #11 fanout
app.get('/fanout', (req, res) => { const q = req.query.q || ''; res.send('<p>'+q+'</p><h1>'+q+'</h1>'); });
// #13 encoded
app.get('/b64', (req, res) => { const q = Buffer.from(req.query.d || '', 'base64').toString(); res.send('<p>' + q + '</p>'); });
module.exports = app;
