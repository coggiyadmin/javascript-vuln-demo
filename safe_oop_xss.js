// SAFE mirror — oop_xss.js. Expect 0.
'use strict';
const express = require('express');
const app = express();
function escapeHtml(s) { return String(s).replace(/[<>&]/g, '_'); }
class Page { constructor(t) { this.t = t; } render() { return '<h1>' + escapeHtml(this.t) + '</h1>'; } }
app.get('/oop', (req, res) => { const p = new Page(req.query.q || ''); res.send(p.render()); });
module.exports = app;
