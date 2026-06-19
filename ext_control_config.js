/**
 * FN probe — CWE-15 External Control of System or Configuration Setting.
 * A user-controlled key/value writes directly into process configuration.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/config', (req, res) => {
  const key = req.query.k;                 // SOURCE — attacker-controlled setting name
  const val = req.query.v;
  process.env[key] = val;                  // user controls arbitrary config → CWE-15
  res.send('ok');
});
