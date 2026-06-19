/**
 * FN probe — CWE-367 Time-of-check Time-of-use (TOCTOU) race condition.
 * File is checked then opened separately; attacker can swap it in the window.
 */
'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const BASE = '/var/app/data/';

app.get('/write', (req, res) => {
  const target = BASE + (req.query.f || '');
  if (fs.existsSync(target)) {            // CHECK
    fs.writeFileSync(target, req.query.d || '');  // USE — race window → CWE-367
  }
  res.send('ok');
});
