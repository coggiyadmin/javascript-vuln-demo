'use strict';
// Cross-file taint — SOURCE side (SSTI). Scanner MUST trace taint across the require
// boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { render } = require('./xf_ssti_helper');
const app = express();
app.get('/hello', (req, res) => { res.end(render(req.query.name)); }); // SOURCE -> cross-file sink (CWE-1336)
module.exports = app;
