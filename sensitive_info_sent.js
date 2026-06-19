/**
 * FN probe — CWE-201 Insertion of Sensitive Information Into Sent Data. The full user record,
 * including the password hash and API token, is serialized to the client. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

const USER = { id: 7, name: 'ada', passwordHash: '$2b$12$abcdef', apiToken: 'sk-live-9931' };

app.get('/me', (req, res) => {
  res.json(USER);                          // leaks passwordHash + apiToken to client → CWE-201
});
