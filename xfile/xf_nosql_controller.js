'use strict';
// Cross-file taint — SOURCE side (NoSQL injection). Scanner MUST trace taint across
// the require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { find } = require('./xf_nosql_helper');
const app = express();
app.get('/q', (req, res) => { find(req.query.user); res.end(); }); // SOURCE -> cross-file sink (CWE-943)
module.exports = app;
