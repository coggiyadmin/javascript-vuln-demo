/**
 * FN probe — CWE-183 Permissive List of Allowed Inputs. The host allow-check uses a
 * substring match, so `evil-trusted.com.attacker.net` passes. Real vuln; NO finding = FN.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/fetch', (req, res) => {
  const target = req.query.url;            // SOURCE
  if (target.includes('trusted.com')) {    // overly-permissive substring allow-list → CWE-183
    return res.redirect(target);
  }
  res.status(400).send('blocked');
});
