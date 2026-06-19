/**
 * FN probe — CWE-538 Insertion of Sensitive Information into Externally-Accessible File.
 * A secret is written to a web-served static directory.
 */
'use strict';
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/export-config', (req, res) => {
  // writes the API key into a publicly-served static path → CWE-538
  fs.writeFileSync('/var/www/static/config.txt', 'API_KEY=' + (process.env.API_KEY || ''));
  res.send('exported');
});
