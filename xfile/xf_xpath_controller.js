'use strict';
// Cross-file taint — SOURCE side (XPath injection). Scanner MUST trace taint across
// the require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { find } = require('./xf_xpath_helper');
const app = express();
app.get('/lookup', (req, res) => { find(req.query.name); res.end(); }); // SOURCE -> cross-file sink (CWE-643)
module.exports = app;
