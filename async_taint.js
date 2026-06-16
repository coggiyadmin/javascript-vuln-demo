/**
 * Combination #4 — ASYNC / CALLBACK / PROMISE boundaries (JS).
 * express() app + var pattern (avoids #67/#75). Each route is a REAL code
 * injection; taint crosses an async boundary. NO finding = FALSE NEGATIVE.
 */
'use strict';
const express = require('express');
const fs = require('fs');
const app = express();

// 4a. async/await — taint through await
app.post('/await', async (req, res) => {
  const code = await Promise.resolve(req.body.code);
  eval(code);                       // CWE-94
  res.send('ok');
});

// 4b. Promise .then() — taint through the then-callback parameter
app.post('/then', (req, res) => {
  const code = req.body.code;
  Promise.resolve(code).then((c) => {
    eval(c);                        // CWE-94 (taint via .then arg)
  });
  res.send('ok');
});

// 4c. Node callback — taint captured in a callback closure
app.post('/cb', (req, res) => {
  const code = req.body.code;
  fs.readFile('/tmp/x', () => {
    eval(code);                     // CWE-94 (taint via closure into callback)
  });
  res.send('ok');
});

// 4d. setTimeout callback closure
app.post('/timer', (req, res) => {
  const code = req.body.code;
  setTimeout(() => eval(code), 10); // CWE-94
  res.send('ok');
});

module.exports = app;
