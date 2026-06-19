/**
 * FN probe — CWE-1285 Improper Validation of Specified Index/Position/Offset.
 * User-supplied index accesses an array with no bounds check.
 */
'use strict';
const express = require('express');
const app = express();
const ACCOUNTS = [{ id: 0 }, { id: 1 }, { id: 2 }];

app.get('/account', (req, res) => {
  const i = parseInt(req.query.i || '0', 10);  // SOURCE — unchecked index
  res.json(ACCOUNTS[i]);                        // out-of-range / negative index → CWE-1285
});
