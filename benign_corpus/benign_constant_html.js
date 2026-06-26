'use strict';
const express = require('express');
const app = express();
app.get('/', (_req, res) => res.type('html').send('<html><body><p>Hello</p></body></html>'));
module.exports = app;
