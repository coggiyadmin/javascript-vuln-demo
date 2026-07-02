'use strict';
const express = require('express');
const app = express();
app.get('/meta', (req, res) => {
  res.type('html').send('<meta http-equiv="refresh" content="0;url=' + req.query.next + '">'); // CWE-601
});
module.exports = app;
