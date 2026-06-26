const express = require('express');
const sqlite3 = require('sqlite3');
const { parseString } = require('xml2js');
const app = express();
app.post('/xml', express.raw({ type: '*/*' }), (req, res) => {
  const n = String(req.query.n || '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + n + "'", () => {});
  parseString(req.body.toString(), () => res.end('ok'));
});
