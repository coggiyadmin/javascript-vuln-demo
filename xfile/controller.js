'use strict';
const express = require('express');
const { run } = require('./helper');
const app = express();
app.get('/x', (req, res) => { const h = req.query.h; run(h); res.end(); }); // SOURCE -> cross-file sink
module.exports = app;
