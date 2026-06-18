'use strict';
// Cross-file taint — SOURCE side (LDAP injection). Scanner MUST trace taint across
// the require boundary; no finding = FALSE NEGATIVE (cross-file).
const express = require('express');
const { search } = require('./xf_ldap_helper');
const app = express();
app.get('/dir', (req, res) => { search(req.query.user, () => {}); res.end(); }); // SOURCE -> cross-file sink (CWE-90)
module.exports = app;
