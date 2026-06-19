/**
 * FN probe — CWE-839 Numeric Range Comparison Without Minimum Check. The index is checked
 * against the upper bound only, so a negative offset reads from the array tail. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();
const RECORDS = [{ v: 'a' }, { v: 'b' }, { v: 'c' }];

app.get('/record', (req, res) => {
  const i = parseInt(req.query.i, 10);     // SOURCE
  if (i < RECORDS.length) {                // upper bound only — no `i >= 0` → CWE-839
    return res.json(RECORDS[i]);
  }
  res.status(404).send('not found');
});
