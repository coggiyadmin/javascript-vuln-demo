/**
 * SAFE mirror — index_validation.js; the index is range-checked before use.
 */
'use strict';
const express = require('express');
const app = express();
const ACCOUNTS = [{ id: 0 }, { id: 1 }, { id: 2 }];

app.get('/account', (req, res) => {
  const i = parseInt(req.query.i || '0', 10);
  if (!(i >= 0 && i < ACCOUNTS.length)) {  // bounds-checked
    return res.status(404).send('not found');
  }
  res.json(ACCOUNTS[i]);
});
