/**
 * SAFE mirror — sensitive_info_sent.js; only non-sensitive fields are projected into the DTO.
 */
'use strict';
const express = require('express');
const app = express();

const USER = { id: 7, name: 'ada', passwordHash: '$2b$12$abcdef', apiToken: 'sk-live-9931' };

app.get('/me', (req, res) => {
  res.json({ id: USER.id, name: USER.name });  // secrets excluded from response
});
