"use strict";
const express = require("express");
const app = express();
const companySanitize = (v) => String(v || '').replace(//g, '');
app.get('/go', (req, res) => {
  const nxt = companySanitize(req.query.next);
  res.setHeader('Location', '/home?u=' + nxt); res.end('ok');
});

module.exports = app;
