const express = require('express');
const xpath = require('xpath');
const sqlite3 = require('sqlite3');
const { DOMParser } = require('@xmldom/xmldom');
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/x', (req, res) => {
  const name = String(req.query.name || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + name + "'", () => {});
  xpath.select("//user[name='" + name + "']", doc);
  res.end('ok');
});
