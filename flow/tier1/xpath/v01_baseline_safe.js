const express = require('express'); const xpath = require('xpath');
const { DOMParser } = require('@xmldom/xmldom');
const app = express(); const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/x', (req, res) => {
  const name = String(req.query.name || '');
  if (!/^[a-zA-Z0-9_-]+$/.test(name)) return res.status(403).end();
  xpath.select('//user[name="' + name + '"]', doc);
  res.end();
});
