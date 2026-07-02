"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || '').replace(/
/g, '');
app.get('/auth', (req, res) => {
  const user = companySanitize(req.query.user);
  console.warn('login user=' + user); res.end('ok');
});

module.exports = app;
