'use strict';
// Cross-file taint — SOURCE side (SSRF). Passes user input into a sink defined in
// xf_ssrf_helper.js. Scanner MUST trace taint across the require boundary; no
// finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { fetchUrl } = require('./xf_ssrf_helper');
const app = express();
app.get('/fetch', (req, res) => { fetchUrl(req.query.url); res.end(); }); // SOURCE -> cross-file sink (CWE-918)
module.exports = app;
