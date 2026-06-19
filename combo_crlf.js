// CRLF combo probes (CWE-113) — rule gap #86/FN-17.
'use strict';
const express = require('express');
const app = express();
app.get('/wrong', (req, res) => { res.set('Location', (req.query.url || '').replace('<','')); res.end(); });
app.get('/fake', (req, res) => { res.set('Location', req.query.url || ''); res.end(); });
module.exports = app;
