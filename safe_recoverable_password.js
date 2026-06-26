'use strict';
// SAFE mirror — recoverable_password.js. One-way bcrypt hash.
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const digest = await bcrypt.hash(req.body.password, 10);
  res.json({ stored: digest });
});
module.exports = app;
