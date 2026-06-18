'use strict';
// Cross-file taint — SOURCE side (path traversal). Passes user input into a sink
// defined in xf_pathtrav_helper.js. Scanner MUST trace taint across the require
// boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { readFile } = require('./xf_pathtrav_helper');
const app = express();
app.get('/doc', (req, res) => { readFile(req.query.name); res.end(); }); // SOURCE -> cross-file sink (CWE-22)
module.exports = app;
