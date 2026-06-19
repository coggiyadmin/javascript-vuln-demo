'use strict';
// Combination #1 — CROSS-FILE × XSS (CWE-79, JS).
const express = require('express');
const { renderTitle } = require('./xf_xss_helper');
const app = express();
app.get('/page', (req, res) => { res.send(renderTitle(req.query.q || '')); }); // SOURCE -> helper sink
module.exports = app;
