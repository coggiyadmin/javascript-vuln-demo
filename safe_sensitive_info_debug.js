/**
 * SAFE mirror — sensitive_info_debug.js; the debug branch returns only a correlation id.
 */
'use strict';
const express = require('express');
const crypto = require('crypto');
const app = express();

app.get('/op', (req, res) => {
  try {
    throw new Error('boom');
  } catch (e) {
    const ref = crypto.randomUUID();
    console.error('op failed', ref, e);    // detail stays server-side
    res.status(500).send('error ref=' + ref);
  }
});
