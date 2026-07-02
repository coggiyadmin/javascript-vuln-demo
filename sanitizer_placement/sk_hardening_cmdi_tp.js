"use strict";
const { exec } = require("child_process");
const express = require("express");
const app = express();
app.get('/run', (req, res) => {
  const cmd = String(req.query.cmd || '').replace(/;/g, '');
  exec(cmd); res.end('ok');
});
module.exports = app;
