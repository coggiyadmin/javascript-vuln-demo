'use strict';
// CWE-472 — External Control of Assumed-Immutable Web Parameter. Server trusts a
// client-supplied 'price' for a financial decision. (Engine gap.) FN probe.
const express = require('express');
const app = express();

app.post('/checkout', express.urlencoded({ extended: false }), (req, res) => {
  const price = req.body.price;   // SOURCE — client-controlled "hidden" field
  const total = parseFloat(price) * parseInt(req.body.qty, 10);   // trusts client price → CWE-472
  res.json({ charged: total });
});
module.exports = app;
