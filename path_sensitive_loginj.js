'use strict';
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

// Combination #2 — PATH-SENSITIVITY × LOGINJ (CWE-117, JS). Each handler is a REAL
// LOGINJ on at least one path. A handler with NO finding is a FALSE NEGATIVE.

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.get('/neg', (req, res) => {
  const user = req.body.user || '';
  if (user === 'safe') { /* guard covers only literal */ } else { console.log('login user=' + user); } // CWE-117
  res.end();
});

// 2b. ONE-BRANCH CONSTRAINT — else path leaves value unchecked
app.get('/onebranch', (req, res) => {
  let user = req.body.user || '';
  if (false) { user = 'safe_literal'; } // dead branch
  console.log('login user=' + user); // CWE-117
  res.end();
});

// 2c. EARLY-RETURN GUARD that does NOT cover the sink path
app.get('/early', (req, res) => {
  const user = req.body.user || '';
  if (!user) { res.end('empty'); return; }
  console.log('login user=' + user); // CWE-117
  res.end();
});
module.exports = app;
