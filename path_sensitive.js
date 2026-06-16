/**
 * Combination #2 — PATH-SENSITIVITY (JS). Each route is a REAL vuln on at least
 * one path. Uses express() app (not Router — see #75) so req sources are
 * recognized. Any route with NO finding is a FALSE NEGATIVE.
 */
'use strict';
const express = require('express');
const app = express();

// 2a. NEGATED GUARD — tainted value used in the failure branch
app.post('/neg', (req, res) => {
  const code = req.body.code;
  if (!/^[0-9]+$/.test(code)) {   // validation fails for malicious input...
    eval(code);                    // ...yet evaluated anyway → CWE-94
  }
  res.send('ok');
});

// 2b. ONE-BRANCH SANITIZER — else path leaves the value tainted
app.post('/onebranch', (req, res) => {
  let code = req.body.code;
  if (req.body.safe) {
    code = encodeURIComponent(code); // sanitized ONLY on this branch
  }
  eval(code);                        // else path: code is tainted → CWE-94
  res.send('ok');
});

// 2c. EARLY-RETURN guard that does not cover the sink path
app.post('/early', (req, res) => {
  const code = req.body.code;
  if (!code) return res.send('empty'); // only guards the falsy case
  eval(code);                          // any truthy tainted code → CWE-94
});

module.exports = app;
