/**
 * SAFE mirror — range_min_check.js; both lower and upper bounds are checked.
 */
'use strict';
const express = require('express');
const app = express();
const RECORDS = [{ v: 'a' }, { v: 'b' }, { v: 'c' }];

app.get('/record', (req, res) => {
  const i = parseInt(req.query.i, 10);
  if (Number.isInteger(i) && i >= 0 && i < RECORDS.length) {  // both bounds checked
    return res.json(RECORDS[i]);
  }
  res.status(404).send('not found');
});
