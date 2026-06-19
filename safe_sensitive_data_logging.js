/**
 * SAFE mirror — sensitive_data_logging.js; only non-sensitive fields are logged.
 */
'use strict';
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const user = req.body.user;
  req.body.password;                      // used for auth, never logged
  console.log('login attempt user=%s', user);  // no credential in the log
  res.send('ok');
});
