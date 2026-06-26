'use strict';
// SAFE mirror — web_param_tamper.js. Price from server catalog, not client body.
const express = require('express');
const app = express();
app.use(express.json());
const CATALOG = { 'sku-1': 9.99 };

app.post('/checkout', (req, res) => {
  const sku = req.body.sku;
  const qty = parseInt(req.body.qty, 10);
  const price = CATALOG[sku];
  res.json({ charged: price * qty });
});
module.exports = app;
