/**
 * FN probe — CWE-779 Logging of Sensitive Data. The user's password is written to the log.
 * (CWE-532 family.)
 */
'use strict';
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const user = req.body.user;
  const pw = req.body.password;            // SOURCE — credential
  console.log('login attempt user=%s password=%s', user, pw);  // logs the password → CWE-779
  res.send('ok');
});
