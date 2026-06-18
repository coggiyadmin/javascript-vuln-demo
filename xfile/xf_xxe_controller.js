'use strict';
// Cross-file taint — SOURCE side (XXE). Scanner MUST trace taint across the require
// boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { parse } = require('./xf_xxe_helper');
const app = express();
app.get('/import', (req, res) => { parse(req.query.xml); res.end(); }); // SOURCE -> cross-file sink (CWE-611)
module.exports = app;
