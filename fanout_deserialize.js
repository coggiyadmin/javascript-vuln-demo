// Combination #11 — FAN-OUT × DESER (CWE-502, JS).
const express = require('express');
const serialize = require('node-serialize');
const app = express();
app.get('/fanout', (req, res) => {
  const s = req.query.s || '';
  serialize.unserialize(s);
  serialize.unserialize(s + '');
  serialize.unserialize(Buffer.from(s, 'base64').toString());
  res.end();
});
module.exports = app;
