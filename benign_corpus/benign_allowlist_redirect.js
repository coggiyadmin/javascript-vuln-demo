'use strict';
const express = require('express');
const app = express();
app.get('/go', (_req, res) => res.redirect('/dashboard'));
module.exports = app;
