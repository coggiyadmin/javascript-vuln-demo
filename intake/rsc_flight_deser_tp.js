/**
 * TP — RSC-style flight payload deserialized server-side (CWE-502 intake pattern).
 * CVE-2025-55182 class: pre-auth unsafe deserialization of client flight blob.
 */
'use strict';
const express = require('express');
const serialize = require('node-serialize');

const app = express();
app.post('/_flight', express.text(), (req, res) => {
  const obj = serialize.unserialize(req.body); // SINK CWE-502
  res.json({ ok: true, keys: Object.keys(obj || {}) });
});

module.exports = app;
