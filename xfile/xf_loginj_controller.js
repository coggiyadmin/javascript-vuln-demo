'use strict';
// Cross-file taint — SOURCE side (log injection). Scanner MUST trace taint across
// the require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { record } = require('./xf_loginj_helper');
const app = express();
app.get('/audit', (req, res) => { record(req.query.user); res.end(); }); // SOURCE -> cross-file sink (CWE-117)
module.exports = app;
