// Combination #5 — OOP × XSS (CWE-79, JS). NO finding = FN (#78).
'use strict';
const express = require('express');
const app = express();
class Page { constructor(t) { this.t = t; } render() { return '<h1>' + this.t + '</h1>'; } } // CWE-79
app.get('/oop', (req, res) => { const p = new Page(req.query.q || ''); res.send(p.render()); });
module.exports = app;
