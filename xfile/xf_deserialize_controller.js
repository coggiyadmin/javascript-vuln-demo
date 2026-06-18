'use strict';
// Cross-file taint — SOURCE side (insecure deserialization). Scanner MUST trace
// taint across the require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { load } = require('./xf_deserialize_helper');
const app = express();
app.get('/restore', (req, res) => { load(req.query.s); res.end(); }); // SOURCE -> cross-file sink (CWE-502)
module.exports = app;
