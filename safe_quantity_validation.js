/**
 * SAFE mirror — quantity_validation.js; the quantity is validated against a sane range.
 */
'use strict';
const express = require('express');
const app = express();
const UNIT_PRICE = 1000;
const MAX_QTY = 100;

app.get('/order', (req, res) => {
  const qty = parseInt(req.query.qty, 10);
  if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) {  // validated range
    return res.status(400).send('invalid quantity');
  }
  res.json({ slots: qty, total: UNIT_PRICE * qty });
});
