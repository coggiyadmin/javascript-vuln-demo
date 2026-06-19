/**
 * FN probe — CWE-1284 Improper Validation of Specified Quantity in Input. A user-supplied
 * order quantity is used unchecked (negative / huge) in pricing and allocation. NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();
const UNIT_PRICE = 1000;

app.get('/order', (req, res) => {
  const qty = parseInt(req.query.qty, 10); // SOURCE — unvalidated quantity
  const slots = new Array(qty);            // negative/huge quantity used unchecked → CWE-1284
  const total = UNIT_PRICE * qty;          // negative qty → negative total
  res.json({ slots: slots.length, total });
});
