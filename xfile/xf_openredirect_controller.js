'use strict';
// Cross-file taint — SOURCE side (open redirect). Passes user input into a sink
// defined in xf_openredirect_helper.js. Scanner MUST trace taint across the
// require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { go } = require('./xf_openredirect_helper');
const app = express();
app.get('/login', (req, res) => { go(res, req.query.next); }); // SOURCE -> cross-file sink (CWE-601)
module.exports = app;
