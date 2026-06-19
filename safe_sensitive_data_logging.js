/**
 * SAFE mirror — sensitive_data_logging.js; only non-sensitive fields are logged.
 */
'use strict';
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const user = req.body.user;
  req.body.password;                      // used for auth, never logged
  const safeUser = String(user).replace(/[\r\n]/g, '');  // CRLF-stripped before logging
  console.log('login attempt user=%s', safeUser);  // no credential, no log injection
  res.send('ok');
});
