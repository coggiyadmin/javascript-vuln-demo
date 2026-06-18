'use strict';
// Combination #10 — TEST-FILE handling × SSRF (CWE-918, JS). Real sink in a *.test.js
// file. Question: fires by default? does --exclude-tests suppress it?
const express = require('express');
const http = require('http');
const app = express();

app.get('/run', (req, res) => { http.get(req.query.url || ''); res.end(); }); // real CWE-918 in a test file
module.exports = app;
