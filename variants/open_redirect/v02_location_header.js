'use strict';
const express = require('express');
const app = express();
app.get('/loc', (req, res) => {
  res.set('Location', req.query.url); // SINK CWE-601
  res.status(302).end();
});
module.exports = app;
