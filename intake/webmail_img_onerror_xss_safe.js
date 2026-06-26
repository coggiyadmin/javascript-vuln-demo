/**
 * Safe mirror — attachment id selects constant filename via allowlist.
 */
'use strict';
const express = require('express');
const app = express();

app.get('/mail/img', (req, res) => {
  let file;
  switch (req.query.id) {
    case 'a': file = 'a.png'; break;
    case 'b': file = 'b.png'; break;
    default: return res.status(400).send('invalid id');
  }
  res.send(`<img src="https://cdn.example.com/attachments/${file}" alt="attachment">`);
});

module.exports = app;
