'use strict';
/** Safe mirror — PAT-INFO-01 */
const express = require('express');
const app = express();
app.get('/debug', (req, res) => {
  res.json({ status: 'ok' });
});
module.exports = app;
